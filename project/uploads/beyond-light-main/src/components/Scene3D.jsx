import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

/* ── Waypoints for camera per section ── */
const waypoints = [
  { pos: [0, 0, 30], look: [0, 0, 0] },
  { pos: [0, 0, -85], look: [0, 0, -120] },
  { pos: [20, 15, -230], look: [0, 0, -260] },
  { pos: [30, 25, -360], look: [0, 0, -400] },
  { pos: [-15, 5, -530], look: [0, 0, -560] },
  { pos: [18, 10, -670], look: [0, -3, -700] },
  { pos: [0, 0, -810], look: [0, 0, -870] },
  { pos: [15, 8, -985], look: [0, 0, -1020] },
  { pos: [0, 10, -1140], look: [0, 0, -1180] },
]

function lerp(a, b, t) { return a + (b - a) * t }
function smoothstep(t) { return t * t * (3 - 2 * t) }

/* ══════════════════════════════════
   CAMERA CONTROLLER
   ══════════════════════════════════ */
function CameraRig() {
  const { camera } = useThree()
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useFrame(() => {
    const docH = document.documentElement.scrollHeight - window.innerHeight
    const scrollFrac = docH > 0 ? window.scrollY / docH : 0
    const total = waypoints.length - 1
    const raw = scrollFrac * total
    const idx = Math.min(Math.floor(raw), total - 1)
    const frac = smoothstep(raw - idx)

    const A = waypoints[idx]
    const B = waypoints[Math.min(idx + 1, waypoints.length - 1)]
    const mx = mouse.current.x
    const my = mouse.current.y

    camera.position.set(
      lerp(A.pos[0], B.pos[0], frac) + mx * 3,
      lerp(A.pos[1], B.pos[1], frac) + my * 1.5,
      lerp(A.pos[2], B.pos[2], frac)
    )
    camera.lookAt(
      lerp(A.look[0], B.look[0], frac) + mx,
      lerp(A.look[1], B.look[1], frac),
      lerp(A.look[2], B.look[2], frac)
    )
  })
  return null
}

/* ══════════════════════════════════
   SCENE 0: HERO – icosahedron + halo
   ══════════════════════════════════ */
function HeroScene() {
  const icoRef = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(3000 * 3)
    for (let i = 0; i < 3000; i++) {
      const r = 8 + Math.random() * 30
      const th = Math.random() * Math.PI * 2
      const ph = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(ph) * Math.cos(th)
      arr[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th)
      arr[i * 3 + 2] = r * Math.cos(ph)
    }
    return arr
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (icoRef.current) {
      icoRef.current.rotation.x = t * 0.1
      icoRef.current.rotation.y = t * 0.15
    }
  })

  return (
    <group position={[0, 0, 0]}>
      <mesh ref={icoRef}>
        <icosahedronGeometry args={[6, 2]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.08} />
      </mesh>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={3000} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial color="#ffffff" size={0.15} transparent opacity={0.6} depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>
    </group>
  )
}

/* ══════════════════════════════════
   SCENE 1: STAR FIELD
   ══════════════════════════════════ */
function StarFieldScene() {
  const ref = useRef()
  const { positions, sizes } = useMemo(() => {
    const count = 8000
    const pos = new Float32Array(count * 3)
    const sz = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 200
      pos[i * 3 + 1] = (Math.random() - 0.5) * 200
      pos[i * 3 + 2] = (Math.random() - 0.5) * 200
      sz[i] = Math.random() * 2.5 + 0.5
    }
    return { positions: pos, sizes: sz }
  }, [])

  const shaderMat = useMemo(() => new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 } },
    vertexShader: `
      attribute float size;
      uniform float uTime;
      varying float vA;
      void main(){
        vA = 0.3 + 0.7 * sin(uTime * 0.8 + position.x * 0.15 + position.y * 0.15);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (250.0 / -mv.z);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `
      varying float vA;
      void main(){
        float d = length(gl_PointCoord - 0.5);
        if(d > 0.5) discard;
        float g = 1.0 - smoothstep(0.0, 0.5, d);
        gl_FragColor = vec4(1.0, 1.0, 1.0, g * vA);
      }`,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  }), [])

  useFrame(({ clock }) => {
    shaderMat.uniforms.uTime.value = clock.getElapsedTime()
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.01
  })

  const brightStars = useMemo(() => {
    const stars = []
    for (let i = 0; i < 12; i++) {
      stars.push({
        pos: [(Math.random() - 0.5) * 60, (Math.random() - 0.5) * 60, (Math.random() - 0.5) * 60],
        r: 0.3 + Math.random() * 0.5,
      })
    }
    return stars
  }, [])

  return (
    <group ref={ref} position={[0, 0, -120]}>
      <points material={shaderMat}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={8000} array={positions} itemSize={3} />
          <bufferAttribute attach="attributes-size" count={8000} array={sizes} itemSize={1} />
        </bufferGeometry>
      </points>
      {brightStars.map((s, i) => (
        <mesh key={i} position={s.pos}>
          <sphereGeometry args={[s.r, 16, 16]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.7} />
        </mesh>
      ))}
    </group>
  )
}

/* ══════════════════════════════════
   SCENE 2: GALAXY
   ══════════════════════════════════ */
function GalaxyScene() {
  const ptsRef = useRef()
  const { positions, colors } = useMemo(() => {
    const count = 25000
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const arms = 4
    for (let i = 0; i < count; i++) {
      const arm = i % arms
      const off = (arm / arms) * Math.PI * 2
      const dist = Math.pow(Math.random(), 0.6) * 40
      const angle = dist * 0.6 + off
      const scatter = (Math.random() - 0.5) * dist * 0.25
      pos[i * 3] = Math.cos(angle) * dist + scatter
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40 * 0.03
      pos[i * 3 + 2] = Math.sin(angle) * dist + scatter
      const b = 1.0 - (dist / 40) * 0.5
      col[i * 3] = col[i * 3 + 1] = col[i * 3 + 2] = b
    }
    return { positions: pos, colors: col }
  }, [])

  useFrame(({ clock }) => {
    if (ptsRef.current) ptsRef.current.rotation.z = clock.getElapsedTime() * 0.02
  })

  return (
    <group position={[0, 0, -260]}>
      <points ref={ptsRef} rotation={[Math.PI * 0.35, 0, 0]}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={25000} array={positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={25000} array={colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.12} vertexColors transparent opacity={0.8} depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>
      <mesh rotation={[Math.PI * 0.35, 0, 0]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.15} />
      </mesh>
    </group>
  )
}

/* ══════════════════════════════════
   SCENE 3: SOLAR SYSTEM
   ══════════════════════════════════ */
const planetsData = [
  { r: 0.5, dist: 8, speed: 1.4, color: '#999999', ring: false },
  { r: 0.8, dist: 12, speed: 0.9, color: '#777777', ring: false },
  { r: 1.0, dist: 17, speed: 0.6, color: '#888888', ring: false },
  { r: 0.6, dist: 22, speed: 0.4, color: '#aaaaaa', ring: false },
  { r: 2.0, dist: 30, speed: 0.25, color: '#666666', ring: true },
  { r: 1.7, dist: 38, speed: 0.18, color: '#555555', ring: true },
  { r: 1.2, dist: 45, speed: 0.12, color: '#777777', ring: false },
  { r: 1.0, dist: 52, speed: 0.08, color: '#888888', ring: false },
]

function Planet({ data, index }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    const angle = t * data.speed
    ref.current.position.x = Math.cos(angle) * data.dist
    ref.current.position.z = Math.sin(angle) * data.dist
    ref.current.children[0].rotation.y = t * (0.5 + index * 0.1)
  })

  const orbitPoints = useMemo(() => {
    const pts = []
    for (let i = 0; i <= 100; i++) {
      const a = (i / 100) * Math.PI * 2
      pts.push(new THREE.Vector3(Math.cos(a) * data.dist, 0, Math.sin(a) * data.dist))
    }
    return pts
  }, [data.dist])

  return (
    <>
      <group ref={ref}>
        <mesh>
          <sphereGeometry args={[data.r, 24, 24]} />
          <meshStandardMaterial color={data.color} roughness={0.8} metalness={0.1} />
        </mesh>
        {data.ring && (
          <mesh rotation={[Math.PI * 0.45, 0, 0]}>
            <ringGeometry args={[data.r * 1.5, data.r * 2.3, 48]} />
            <meshBasicMaterial color="#888888" side={THREE.DoubleSide} transparent opacity={0.25} />
          </mesh>
        )}
      </group>
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={orbitPoints.length}
            array={new Float32Array(orbitPoints.flatMap(p => [p.x, p.y, p.z]))}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#333333" transparent opacity={0.2} />
      </line>
    </>
  )
}

function SolarSystemScene() {
  const sunRef = useRef()
  useFrame(({ clock }) => {
    if (sunRef.current) sunRef.current.rotation.y = clock.getElapsedTime() * 0.05
  })

  return (
    <group position={[0, 0, -400]}>
      <mesh ref={sunRef}>
        <sphereGeometry args={[4, 32, 32]} />
        <meshBasicMaterial color="#dddddd" />
      </mesh>
      <mesh>
        <sphereGeometry args={[5.5, 32, 32]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.06} />
      </mesh>
      {planetsData.map((d, i) => <Planet key={i} data={d} index={i} />)}
    </group>
  )
}

/* ══════════════════════════════════
   SCENE 4: TIME – rings + spiral
   ══════════════════════════════════ */
function TimeScene() {
  const groupRef = useRef()
  const handsRef = useRef([])

  const spiralPositions = useMemo(() => {
    const count = 4000
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const t = (i / count) * Math.PI * 12
      const r = 2 + t * 0.8
      arr[i * 3] = Math.cos(t) * r
      arr[i * 3 + 1] = (i / count - 0.5) * 40
      arr[i * 3 + 2] = Math.sin(t) * r
    }
    return arr
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    handsRef.current.forEach((h, i) => {
      if (h) h.rotation.z = t * (0.5 - i * 0.15)
    })
  })

  const rings = useMemo(() =>
    Array.from({ length: 12 }, (_, i) => ({
      radius: 4 + i * 2,
      opacity: 0.05 + i * 0.015,
      rotX: Math.PI / 2 + (i % 2 ? 0.05 : -0.05),
      rotZ: i * 0.15,
    })), [])

  return (
    <group ref={groupRef} position={[0, 0, -560]}>
      {rings.map((r, i) => (
        <mesh key={i} rotation={[r.rotX, 0, r.rotZ]}>
          <torusGeometry args={[r.radius, 0.04, 8, 100]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={r.opacity} />
        </mesh>
      ))}
      {[0, 1, 2].map(i => (
        <group key={i} ref={el => handsRef.current[i] = el}>
          <mesh position={[0, (8 + i * 5) / 2, 0]}>
            <boxGeometry args={[0.08, 8 + i * 5, 0.08]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.2 - i * 0.05} />
          </mesh>
        </group>
      ))}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={4000} array={spiralPositions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial color="#ffffff" size={0.1} transparent opacity={0.4} depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>
    </group>
  )
}

/* ══════════════════════════════════
   SCENE 5: RELATIVITY – warped grid
   ══════════════════════════════════ */
function RelativityScene() {
  const massRef = useRef()

  const gridGeo = useMemo(() => {
    const geo = new THREE.PlaneGeometry(60, 60, 40, 40)
    const pos = geo.attributes.position
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), y = pos.getY(i)
      const dist = Math.sqrt(x * x + y * y)
      pos.setZ(i, dist < 15 ? -8 * Math.pow(1 - dist / 15, 2) : 0)
    }
    geo.computeVertexNormals()
    return geo
  }, [])

  useFrame(({ clock }) => {
    if (massRef.current) {
      const pulse = 1 + Math.sin(clock.getElapsedTime() * 2) * 0.08
      massRef.current.scale.setScalar(pulse)
    }
  })

  return (
    <group position={[0, 0, -700]}>
      <mesh geometry={gridGeo} rotation={[-Math.PI * 0.45, 0, 0]}>
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.1} />
      </mesh>
      <mesh ref={massRef} position={[0, -3, 5]}>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshStandardMaterial color="#999999" roughness={0.5} metalness={0.3} emissive="#222222" />
      </mesh>
    </group>
  )
}

/* ══════════════════════════════════
   SCENE 6: WORMHOLE – tunnel
   ══════════════════════════════════ */
function WormholeScene() {
  const ringsRef = useRef([])

  const tunnelPositions = useMemo(() => {
    const count = 5000
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const t = Math.random()
      const angle = Math.random() * Math.PI * 2
      const r = 3 + Math.sin(t * Math.PI) * 8 + (Math.random() - 0.5) * 2
      arr[i * 3] = Math.cos(angle) * r
      arr[i * 3 + 1] = Math.sin(angle) * r
      arr[i * 3 + 2] = -t * 120
    }
    return arr
  }, [])

  const ringsData = useMemo(() =>
    Array.from({ length: 40 }, (_, i) => ({
      radius: 3 + Math.sin((i / 40) * Math.PI) * 8,
      opacity: 0.04 + (i / 40) * 0.12,
      z: -i * 3,
    })), [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    ringsRef.current.forEach((ring, i) => {
      if (ring) {
        ring.rotation.z = t * 0.15 + i * 0.08
        const s = 1 + Math.sin(t * 3 + i * 0.3) * 0.08
        ring.scale.setScalar(s)
      }
    })
  })

  return (
    <group position={[0, 0, -860]}>
      {ringsData.map((r, i) => (
        <mesh key={i} ref={el => ringsRef.current[i] = el} position={[0, 0, r.z]}>
          <torusGeometry args={[r.radius, 0.05, 8, 80]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={r.opacity} />
        </mesh>
      ))}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={5000} array={tunnelPositions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial color="#ffffff" size={0.08} transparent opacity={0.3} depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>
    </group>
  )
}

/* ══════════════════════════════════
   SCENE 7: BLACK HOLE
   ══════════════════════════════════ */
function BlackHoleScene() {
  const diskRef = useRef()
  const photonRef = useRef()

  const { diskPositions, diskColors } = useMemo(() => {
    const count = 15000
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2
      const r = 6 + Math.random() * 18
      const h = (Math.random() - 0.5) * 0.5 * (1 + r * 0.02)
      pos[i * 3] = Math.cos(angle) * r
      pos[i * 3 + 1] = h
      pos[i * 3 + 2] = Math.sin(angle) * r
      const b = Math.max(0, 1.0 - ((r - 6) / 18) * 0.8)
      col[i * 3] = col[i * 3 + 1] = col[i * 3 + 2] = b
    }
    return { diskPositions: pos, diskColors: col }
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (diskRef.current) diskRef.current.rotation.z = t * 0.1
    if (photonRef.current) photonRef.current.rotation.z = -t * 0.2
  })

  return (
    <group position={[0, 0, -1020]}>
      <mesh>
        <sphereGeometry args={[5, 48, 48]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
      <points ref={diskRef} rotation={[Math.PI * 0.3, 0, 0]}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={15000} array={diskPositions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={15000} array={diskColors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.12} vertexColors transparent opacity={0.7} depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>
      <mesh ref={photonRef} rotation={[Math.PI * 0.3, 0, 0]}>
        <torusGeometry args={[7, 0.15, 16, 100]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.2} />
      </mesh>
      <mesh rotation={[Math.PI * 0.3, 0, 0]}>
        <torusGeometry args={[5.5, 0.5, 16, 100]} />
        <meshBasicMaterial color="#222222" transparent opacity={0.15} />
      </mesh>
    </group>
  )
}

/* ══════════════════════════════════
   SCENE 8: BEYOND – multiverse
   ══════════════════════════════════ */
function BeyondScene() {
  const bubblesRef = useRef([])

  const bubblesData = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      r: 2 + Math.random() * 6,
      detail: i < 5 ? 2 : 1,
      opacity: 0.03 + Math.random() * 0.06,
      pos: [(Math.random() - 0.5) * 60, (Math.random() - 0.5) * 40, (Math.random() - 0.5) * 60],
    })), [])

  const lines = useMemo(() => {
    const result = []
    for (let i = 0; i < 10; i++) {
      const a = bubblesData[Math.floor(Math.random() * bubblesData.length)]
      const b = bubblesData[Math.floor(Math.random() * bubblesData.length)]
      if (a === b) continue
      result.push({ from: a.pos, to: b.pos })
    }
    return result
  }, [bubblesData])

  const ambientPositions = useMemo(() => {
    const count = 3000
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 100
      arr[i * 3 + 1] = (Math.random() - 0.5) * 80
      arr[i * 3 + 2] = (Math.random() - 0.5) * 100
    }
    return arr
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    bubblesRef.current.forEach((b, i) => {
      if (b) {
        b.rotation.x = t * 0.03 + i
        b.rotation.y = t * 0.02 + i * 0.5
      }
    })
  })

  return (
    <group position={[0, 0, -1180]}>
      {bubblesData.map((b, i) => (
        <mesh key={i} ref={el => bubblesRef.current[i] = el} position={b.pos}>
          <icosahedronGeometry args={[b.r, b.detail]} />
          <meshBasicMaterial color="#ffffff" wireframe transparent opacity={b.opacity} />
        </mesh>
      ))}
      {lines.map((l, i) => (
        <line key={`l${i}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([...l.from, ...l.to])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#ffffff" transparent opacity={0.04} />
        </line>
      ))}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={3000} array={ambientPositions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial color="#ffffff" size={0.08} transparent opacity={0.3} depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>
    </group>
  )
}

/* ══════════════════════════════════
   BACKGROUND DUST (always visible)
   ══════════════════════════════════ */
function BackgroundDust() {
  const positions = useMemo(() => {
    const count = 3000
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 300
      arr[i * 3 + 1] = (Math.random() - 0.5) * 2500
      arr[i * 3 + 2] = -600 + (Math.random() - 0.5) * 200
    }
    return arr
  }, [])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={3000} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.3} transparent opacity={0.25} depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  )
}

/* ══════════════════════════════════
   MAIN SCENE EXPORT
   ══════════════════════════════════ */
export default function Scene3D() {
  return (
    <div className="three-canvas-wrapper">
      <Canvas
        camera={{ fov: 55, near: 0.1, far: 2000, position: [0, 0, 30] }}
        gl={{ antialias: true }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#000000']} />
        <fog attach="fog" args={['#000000', 100, 400]} />
        <ambientLight intensity={0.4} color="#333333" />
        <directionalLight position={[20, 30, 20]} intensity={0.8} />
        <CameraRig />
        <BackgroundDust />
        <HeroScene />
        <StarFieldScene />
        <GalaxyScene />
        <SolarSystemScene />
        <TimeScene />
        <RelativityScene />
        <WormholeScene />
        <BlackHoleScene />
        <BeyondScene />
      </Canvas>
    </div>
  )
}
