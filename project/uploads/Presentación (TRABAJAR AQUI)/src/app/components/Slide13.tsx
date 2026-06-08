import Logo from "./Logo";

export default function Slide13() {
  const metrics = [
    { title: "Tiempo", desc: "reducción de entrega", accent: true },
    { title: "Claridad", desc: "propuesta sin ambigüedad", accent: false },
    { title: "Interés", desc: "disposición real a pagar", accent: false },
  ];

  return (
    <div className="bg-[#fcfaf5] relative size-full px-[108px] pt-[81.3px]">
      {/* Logo */}
      <div className="absolute right-[24px] top-[24px] opacity-30">
        <Logo size="small" />
      </div>

      {/* Header */}
      <div className="relative">
        <p className="font-['Google_Sans:Medium',sans-serif] leading-[19.2px] opacity-85 text-[#1d4ed8] text-[16px] tracking-[1.28px] uppercase whitespace-nowrap">
          13 / Validación
        </p>
        <h2 className="font-['Google_Sans:Bold',sans-serif] leading-[42.24px] mt-[25.58px] text-[#0b1422] text-[38.4px] whitespace-nowrap">
          Qué validamos
        </h2>
        <div className="absolute bg-[#1d4ed8] h-[2px] mt-[5px] w-[44.797px]" />
      </div>

      {/* Description */}
      <p className="font-['Google_Sans:Regular',sans-serif] leading-[28.56px] mt-[97.3px] opacity-55 text-[20px] text-black whitespace-nowrap">
        Métricas que demuestran valor antes de escalar.
      </p>

      {/* Metrics section */}
      <div className="absolute top-[455px] left-[108px] right-[108px] border-[rgba(90,78,55,0.1)] border-solid border-t pt-[22.39px]">
        <div className="flex gap-[62px]">
          {metrics.map((metric, i) => (
            <div key={i}>
              <p
                className="font-['Google_Sans:SemiBold',sans-serif] leading-[56.32px] text-[45px] whitespace-nowrap"
                style={{
                  color: metric.accent ? "#1d4ed8" : "#0b1422",
                }}
              >
                {metric.title}
              </p>
              <p className="font-['Google_Sans:Regular',sans-serif] leading-[18.368px] mt-[4.47px] opacity-50 text-[20px] text-black">
                {metric.desc}
              </p>
              <div
                className="h-[2px] mt-[7.9px] w-[32px]"
                style={{
                  backgroundColor: metric.accent ? "#1d4ed8" : "#0b1422",
                  opacity: metric.accent ? 1 : 1,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
