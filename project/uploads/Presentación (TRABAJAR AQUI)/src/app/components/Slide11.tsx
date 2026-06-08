import Logo from "./Logo";

export default function Slide11() {
  const steps = [
    { num: "01", title: "Diagnóstico", desc: "análisis de necesidades", accent: true },
    { num: "02", title: "Arquitectura", desc: "estructura del sitio", accent: false },
    { num: "03", title: "Propuesta", desc: "clara y priorizada", accent: false },
    { num: "04", title: "Validación", desc: "con cliente real", accent: true },
  ];

  return (
    <div className="bg-[#fcfaf5] relative size-full px-[84px] pt-[81.3px]">
      {/* Logo */}
      <div className="absolute right-[24px] top-[24px] opacity-30">
        <Logo size="small" />
      </div>

      {/* Header */}
      <div className="relative ml-[24px]">
        <p className="font-['Google_Sans:Medium',sans-serif] leading-[19.2px] opacity-85 text-[#1d4ed8] text-[16px] tracking-[1.28px] uppercase whitespace-nowrap">
          11 / MVP
        </p>
        <h2 className="font-['Google_Sans:Bold',sans-serif] leading-[42.24px] mt-[25.58px] text-[#0b1422] text-[38.4px] whitespace-nowrap">
          MVP: Diagnóstico + Landing
        </h2>
        <div className="bg-[#1d4ed8] h-[2px] mt-[5px] w-[44.797px]" />
      </div>

      {/* Description */}
      <p className="font-['Google_Sans:Regular',sans-serif] leading-[28.56px] ml-[24px] mt-[97.3px] opacity-55 text-[20px] text-black w-[544px]">
        El primer entregable valida el proceso completo con un cliente real en 2 semanas.
      </p>

      {/* Steps section */}
      <div className="absolute top-[455px] left-[84px] right-[84px] border-[rgba(90,78,55,0.1)] border-solid border-t pt-[32px]">
        <div className="flex gap-[37px]">
          {steps.map((step, i) => (
            <div key={i} className="w-[285px]">
              <p
                className="font-['Google_Sans:Medium',sans-serif] leading-[17.28px] text-[20px] tracking-[0.9216px] whitespace-nowrap"
                style={{
                  color: step.accent ? "#1d4ed8" : "#0b1422",
                  opacity: step.accent ? 1 : 0.45,
                }}
              >
                {step.num}
              </p>
              <p
                className="font-['Google_Sans:SemiBold',sans-serif] leading-[31.68px] mt-[12px] text-[45px] whitespace-nowrap"
                style={{
                  color: step.accent ? "#1d4ed8" : "#0b1422",
                }}
              >
                {step.title}
              </p>
              <p className="font-['Google_Sans:Regular',sans-serif] leading-[18.368px] mt-[21px] opacity-45 text-[20px] text-black">
                {step.desc}
              </p>
              <div
                className="h-[2px] mt-[7.5px] w-[32px]"
                style={{
                  backgroundColor: step.accent ? "#1d4ed8" : "#0b1422",
                  opacity: step.accent ? 1 : 1,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
