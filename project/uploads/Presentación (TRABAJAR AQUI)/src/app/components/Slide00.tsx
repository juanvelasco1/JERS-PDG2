import svgPaths from "../../imports/svg-iddc7l101j";
import imgLogoIcesi1 from "figma:asset/35098f25071a8a23bc1c4b2c071d5deeedcfaac7.png";
import { Settings } from "lucide-react";

interface Slide00Props {
  onOpenConfig?: () => void;
}

export default function Slide00({ onOpenConfig }: Slide00Props) {
  return (
    <div className="bg-[#fcfaf5] relative size-full">
      {/* Logo group */}
      <div className="absolute left-[56px] top-[141px]">
        <div className="absolute h-[19.059px] left-0 top-[11.61px] w-[14.938px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9378 19.0585">
            <path d={svgPaths.p28166200} fill="#2563EB" />
          </svg>
        </div>
        <div className="absolute h-[30.391px] left-[0.52px] top-[8px] w-[22.149px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.1491 30.3906">
            <path d={svgPaths.p2bdc8800} fill="#2563EB" />
          </svg>
        </div>
        <div className="absolute h-[37.144px] left-[49.89px] top-[3.93px] w-[108.111px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoIcesi1} />
        </div>
        <div className="absolute h-[46.204px] left-[42.64px] top-0 w-0">
          <div className="absolute inset-[0_-0.65px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.29068 46.2037">
              <path d="M0.645338 0V46.2037" stroke="#2563EB" strokeWidth="1.29068" />
            </svg>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="absolute left-[56px] top-[310.59px]">
        <p className="font-['Google_Sans:Bold',sans-serif] leading-[70.4px] text-[#0b1422] text-[70px] whitespace-nowrap">
          <span>JERS</span>
          <span> </span>
          <span className="text-[#1d4ed8]">Consultora Digital</span>
        </p>
      </div>

      {/* Blue underline */}
      <div className="absolute bg-[#1d4ed8] h-[2px] left-[56px] top-[387.59px] w-[172px]" />

      {/* Tagline */}
      <p className="absolute font-['Google_Sans:Medium',sans-serif] leading-[35.84px] left-[56.39px] opacity-45 text-[#0b1422] text-[22.4px] top-[411.59px] tracking-[0.448px] whitespace-nowrap">
        Diseño rapido, impacto real
      </p>

      {/* Settings button */}
      <button
        onClick={onOpenConfig}
        className="absolute right-[56px] top-[56px] p-[12px] hover:bg-[rgba(29,78,216,0.1)] rounded-lg transition-colors group"
        aria-label="Configurar presentación"
      >
        <Settings size={28} color="#0b1422" opacity={0.4} className="group-hover:opacity-100 transition-opacity" />
      </button>

      {/* Decorative grid */}
      <div className="absolute h-[132px] left-[1145px] opacity-7 top-[325.59px] w-[153px]">
        {Array.from({ length: 8 }, (_, row) =>
          Array.from({ length: 8 }, (_, col) => (
            <div
              key={`${row}-${col}`}
              className="absolute bg-[#0b1422] rounded-[3.047px] size-[6.094px]"
              style={{
                left: `${col * 20.98}px`,
                top: `${row * 20.98}px`,
              }}
            />
          ))
        )}
      </div>

      {/* Team info */}
      <div className="absolute h-[57px] left-[56px] top-[669.59px] w-[914px]">
        {/* First member */}
        <div className="absolute left-0 top-[-34px]">
          <p className="font-['Google_Sans:Medium',sans-serif] leading-[27.04px] text-[#0b1422] text-[20.8px]">
            Sergio Restrepo Prado
          </p>
          <p className="font-['Google_Sans:Regular',sans-serif] leading-[21.6px] opacity-55 text-[20px] text-black">
            UX / Estrategia / Investigación
          </p>
        </div>

        {/* Second member */}
        <div className="absolute left-[398px] top-[-34px]">
          <p className="font-['Google_Sans:Medium',sans-serif] leading-[27.04px] text-[#0b1422] text-[20.8px]">
            Juan Esteban Velasco
          </p>
          <p className="font-['Google_Sans:Regular',sans-serif] leading-[21.6px] opacity-55 text-[20px] text-black">
            Desarrollo / Tecnología / Implementación
          </p>
        </div>
      </div>
    </div>
  );
}
