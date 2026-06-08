import Logo from "./Logo";

export default function Slide12() {
  const sprints = [
    { title: "S1", desc: "Investigación y diagnóstico", accent: false },
    { title: "S2", desc: "Diseño UX/UI", accent: false },
    { title: "S3", desc: "Desarrollo e implementación", accent: true },
    { title: "S4", desc: "Pruebas y validación", accent: false },
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
          13 / Alcance por sprint
        </p>
        <h2 className="font-['Google_Sans:Bold',sans-serif] leading-[42.24px] mt-[25.58px] text-[#0b1422] text-[38.4px] whitespace-nowrap">
          Plan de ejecución
        </h2>
        <div className="absolute bg-[#1d4ed8] h-[2px] mt-[5px] w-[44.797px]" />
      </div>

      {/* Description */}
      <p className="font-['Google_Sans:Regular',sans-serif] leading-[28.56px] mt-[16px] opacity-55 text-[20px] text-black w-[585px]">
        Metodología ágil en 4 sprints con entregables concretos en cada etapa.
      </p>

      {/* Sprints section */}
      <div className="absolute top-[455px] left-[108px] right-[108px] border-[rgba(90,78,55,0.1)] border-solid border-t pt-[23px]">
        <div className="flex gap-[101px]">
          {sprints.map((sprint, i) => (
            <div key={i}>
              <p
                className="font-['Google_Sans:SemiBold',sans-serif] leading-[56.32px] text-[45px] whitespace-nowrap"
                style={{
                  color: sprint.accent ? "#1d4ed8" : "#0b1422",
                }}
              >
                {sprint.title}
              </p>
              <p className="font-['Google_Sans:Regular',sans-serif] leading-[18.368px] mt-[4.47px] opacity-50 text-[20px] text-black">
                {sprint.desc}
              </p>
              <div
                className="h-[2px] mt-[7.9px] w-[32px]"
                style={{
                  backgroundColor: sprint.accent ? "#1d4ed8" : "#d4a017",
                  opacity: sprint.accent ? 1 : 0.5,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
