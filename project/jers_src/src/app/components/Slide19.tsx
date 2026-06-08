import { motion } from "motion/react";
import Logo from "./Logo";

export default function Slide19({ subStep = 0 }: { subStep?: number }) {
  const features = [
    { title: "Rápido", desc: "menos tiempo de entrega", accent: false },
    { title: "Claro", desc: "sin ambigüedad", accent: false },
    { title: "Escalable", desc: "crece con el negocio", accent: true },
  ];

  return (
    <div className="bg-[#fcfaf5] relative size-full px-[108px] pt-[81.3px]">
      {/* Logo */}
      <div className="absolute right-[24px] top-[24px] opacity-30">
        <Logo size="small" />
      </div>

      {/* Main quote */}
      <motion.div
        className="mt-[56px]"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <p className="font-['Google_Sans:Bold',sans-serif] leading-[70.4px] text-[64px] w-[768px]">
          <span className="opacity-50">"</span>
          <span className="text-[#0b1422]">Construimos sistemas digitales eficientes.</span>
          <span className="opacity-50">"</span>
        </p>
      </motion.div>

      {/* Blue underline */}
      <motion.div
        className="bg-[#1d4ed8] h-[2px] mt-[11px] w-[44.797px]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        style={{ transformOrigin: "left" }}
      />

      {/* Tagline */}
      <motion.p
        className="font-['Google_Sans:Medium',sans-serif] leading-[33.28px] mt-[21px] opacity-50 text-[#0b1422] text-[20.8px] whitespace-nowrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.45, delay: 0.35 }}
      >
        Diseño rapido, impacto real
      </motion.p>

      {/* Features section */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={subStep >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="absolute top-[455px] left-[108px] right-[108px] border-[rgba(90,78,55,0.1)] border-solid border-t pt-[23.39px]"
      >
        <div className="flex gap-[68px]">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={subStep >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              <p
                className="font-['Google_Sans:SemiBold',sans-serif] leading-[56.32px] text-[45px] whitespace-nowrap"
                style={{ color: feature.accent ? "#1d4ed8" : "#0b1422" }}
              >
                {feature.title}
              </p>
              <p className="font-['Google_Sans:Regular',sans-serif] leading-[18.368px] mt-[4.47px] opacity-50 text-[20px] text-black">
                {feature.desc}
              </p>
              <div
                className="h-[2px] mt-[7.9px] w-[32px]"
                style={{
                  backgroundColor: i === 0 ? "#1d4ed8" : i === 1 ? "#0b1422" : "#d4a017",
                  opacity: i === 0 ? 0.5 : i === 1 ? 1 : 0.5,
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
