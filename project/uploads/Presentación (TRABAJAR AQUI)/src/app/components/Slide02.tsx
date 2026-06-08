import Logo from "./Logo";

export default function Slide02() {
  const experiments = [
    {
      num: "01",
      title: "Landing page",
      desc: "validar interés con propuesta clara",
      metrics: [
        { value: "36", label: "usuarios activos" },
        { value: "9", label: "recurrentes" },
        { value: "2m 35s", label: "tiempo promedio" },
      ],
    },
    {
      num: "02",
      title: "Redes sociales",
      desc: "segmentación y alcance orgánico",
      metrics: [
        { value: "227", label: "visitas totales" },
        { value: "64", label: "scrolls" },
        { value: "90", label: "interacciones" },
      ],
    },
    {
      num: "03",
      title: "Prototipo express",
      desc: "rapidez y viabilidad técnica",
      metrics: [
        { value: "4,249", label: "impresiones" },
        { value: "60", label: "clics al enlace" },
        { value: "$280", label: "inversión" },
      ],
    },
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
          02 / Validación
        </p>
        <h2 className="font-['Google_Sans:Bold',sans-serif] leading-[42.24px] mt-[25.58px] text-[#0b1422] text-[38.4px] whitespace-nowrap">
          Experimentos de validación
        </h2>
        <div className="bg-[#1d4ed8] h-[2px] mt-[5px] w-[44.797px]" />
      </div>

      {/* Description */}
      <p className="font-['Google_Sans:Regular',sans-serif] leading-[28.56px] mt-[97.3px] opacity-55 text-[20px] text-black w-[645px]">
        Tres experimentos realizados para validar la hipótesis de negocio y confirmar la demanda del mercado.
      </p>

      {/* Experiments section */}
      <div className="absolute top-[455px] left-[108px] right-[108px] border-[rgba(90,78,55,0.1)] border-solid border-t pt-[22.39px]">
        <div className="flex gap-[42px]">
          {experiments.map((exp, idx) => (
            <div key={idx} className="flex-1">
              <div className="flex items-baseline gap-[10px] mb-[12px]">
                <span className="font-['Google_Sans:Medium',sans-serif] text-[18px] text-[#1d4ed8] opacity-70 tracking-[0.8px]">
                  {exp.num}
                </span>
                <span className="font-['Google_Sans:SemiBold',sans-serif] text-[28px] text-[#0b1422] leading-[32px]">
                  {exp.title}
                </span>
              </div>
              <p className="font-['Google_Sans:Regular',sans-serif] text-[16px] text-[#0b1422] opacity-50 mb-[18px] leading-[20px]">
                {exp.desc}
              </p>
              <div className="flex flex-col gap-[8px]">
                {exp.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="flex items-baseline gap-[8px]">
                    <span className="font-['Google_Sans:Bold',sans-serif] text-[20px] text-[#0b1422] opacity-80 min-w-[60px]">
                      {metric.value}
                    </span>
                    <span className="font-['Google_Sans:Regular',sans-serif] text-[16px] text-[#0b1422] opacity-45">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
              <div
                className="h-[2px] mt-[12px] w-[32px]"
                style={{
                  backgroundColor: idx === 0 ? "#1d4ed8" : idx === 1 ? "#0b1422" : "#d4a017",
                  opacity: idx === 0 ? 1 : idx === 1 ? 1 : 0.5,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}