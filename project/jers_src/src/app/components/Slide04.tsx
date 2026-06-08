import Logo from "./Logo";

export default function Slide04() {
  return (
    <div className="bg-[#fcfaf5] relative size-full px-[108px] pt-[81.3px]">
      {/* Logo */}
      <div className="absolute right-[24px] top-[24px] opacity-30">
        <Logo size="small" />
      </div>

      {/* Header */}
      <div className="relative">
        <p className="font-['Google_Sans:Medium',sans-serif] leading-[19.2px] opacity-85 text-[#1d4ed8] text-[16px] tracking-[1.28px] uppercase whitespace-nowrap">
          04 / Propuesta de valor
        </p>
        <h2 className="font-['Google_Sans:Bold',sans-serif] leading-[42.24px] mt-[25.58px] text-[#0b1422] text-[38.4px] whitespace-nowrap">
          Lo que ofrecemos
        </h2>
        <div className="bg-[#1d4ed8] h-[2px] mt-[5px] w-[44.797px]" />
      </div>

      {/* Description */}
      <p className="font-['Google_Sans:Regular',sans-serif] leading-[28.56px] mt-[97.3px] opacity-55 text-[20px] text-black w-[595px]">
        Análisis estratégico + diseño UX/UI + desarrollo con IA. Un proceso claro, rápido y personalizado.
      </p>

      {/* Grid section */}
      <div className="absolute top-[455px] left-[108px] right-[108px] border-[rgba(90,78,55,0.1)] border-solid border-t pt-[22.39px]">
        <div className="grid grid-cols-2 gap-y-[23px]">
          {/* UX real */}
          <div>
            <p className="font-['Google_Sans:Medium',sans-serif] leading-[41.6px] text-[#1d4ed8] text-[45px] whitespace-nowrap">
              UX real
            </p>
            <p className="font-['Google_Sans:Regular',sans-serif] leading-[18.368px] mt-[4.47px] opacity-50 text-[20px] text-black">
              diseño centrado en usuario
            </p>
            <div className="bg-[#1d4ed8] h-[2px] mt-[7.19px] w-[32px]" />
          </div>

          {/* AI-first */}
          <div className="border-[rgba(90,78,55,0.1)] border-l border-solid pl-[32px]">
            <p className="font-['Google_Sans:Medium',sans-serif] leading-[41.6px] text-[#0b1422] text-[45px] whitespace-nowrap">
              AI-first
            </p>
            <p className="font-['Google_Sans:Regular',sans-serif] leading-[18.368px] mt-[4.47px] opacity-50 text-[20px] text-black">
              proceso automatizado con IA
            </p>
            <div className="bg-[#d4a017] h-[2px] mt-[7.19px] opacity-50 w-[32px]" />
          </div>

          {/* Entrega */}
          <div>
            <p className="font-['Google_Sans:Medium',sans-serif] leading-[41.6px] text-[#0b1422] text-[45px] whitespace-nowrap">
              Entrega
            </p>
            <p className="font-['Google_Sans:Regular',sans-serif] leading-[18.368px] mt-[4.47px] opacity-50 text-[20px] text-black">
              sprints de 1–2 semanas
            </p>
            <div className="bg-[#d4a017] h-[2px] mt-[7.19px] opacity-50 w-[32px]" />
          </div>

          {/* Menor costo */}
          <div className="border-[rgba(90,78,55,0.1)] border-l border-solid pl-[32px]">
            <p className="font-['Google_Sans:Medium',sans-serif] leading-[41.6px] text-[#1d4ed8] text-[45px] whitespace-nowrap">
              Menor costo
            </p>
            <p className="font-['Google_Sans:Regular',sans-serif] leading-[18.368px] mt-[4.47px] opacity-50 text-[20px] text-black">
              Inversión Inicial
            </p>
            <div className="bg-[#1d4ed8] h-[2px] mt-[7.19px] w-[32px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
