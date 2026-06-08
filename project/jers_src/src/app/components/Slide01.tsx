import Logo from "./Logo";

export default function Slide01() {
  return (
    <div className="bg-[#fcfaf5] relative size-full px-[108px] pt-[81.3px]">
      {/* Logo */}
      <div className="absolute right-[24px] top-[24px] opacity-30">
        <Logo size="small" />
      </div>
      {/* Header */}
      <div className="relative">
        <p className="font-['Google_Sans:Medium',sans-serif] leading-[19.2px] opacity-85 text-[#1d4ed8] text-[16px] tracking-[1.28px] uppercase whitespace-nowrap">
          01 / Contexto
        </p>
        <h2 className="font-['Google_Sans:Bold',sans-serif] leading-[42.24px] mt-[25.58px] text-[#0b1422] text-[38.4px] whitespace-nowrap">
          De la necesidad a la validación
        </h2>
        <div className="bg-[#1d4ed8] h-[2px] mt-[5px] w-[44.797px]" />
      </div>

      {/* Description */}
      <p className="font-['Google_Sans:Regular',sans-serif] leading-[28.56px] mt-[40px] opacity-55 text-[20px] text-black w-[645px]">
        JERS nace de observar la necesidad creciente en pymes y startups que buscan presencia digital profesional, rápida y económica.
      </p>

      {/* Origin section */}
      <div className="mt-[32px]">
        <p className="font-['Google_Sans:Medium',sans-serif] leading-[24px] text-[#0b1422] text-[18px] opacity-70">
          Problema identificado:
        </p>
        <div className="mt-[16px] flex gap-[32px]">
          <div className="flex items-baseline gap-[8px]">
            <span className="font-['Google_Sans:Bold',sans-serif] text-[28px] text-[#1d4ed8] leading-none">
              1,8M
            </span>
            <span className="font-['Google_Sans:Regular',sans-serif] text-[#0b1422] opacity-50 text-[16px]">
              pymes en Colombia
            </span>
          </div>
          <div className="flex items-baseline gap-[8px]">
            <span className="font-['Google_Sans:Bold',sans-serif] text-[28px] text-[#0b1422] leading-none opacity-70">
              55%
            </span>
            <span className="font-['Google_Sans:Regular',sans-serif] text-[#0b1422] opacity-50 text-[16px]">
              sin sitio web funcional
            </span>
          </div>
          <div className="flex items-baseline gap-[8px]">
            <span className="font-['Google_Sans:Bold',sans-serif] text-[28px] text-[#0b1422] leading-none opacity-70">
              78%
            </span>
            <span className="font-['Google_Sans:Regular',sans-serif] text-[#0b1422] opacity-50 text-[16px]">
              con dificultades para implementar soluciones TI
            </span>
          </div>
        </div>
      </div>

      {/* Market context section - bottom */}
      <div className="absolute top-[455px] left-[108px] right-[108px] border-[rgba(90,78,55,0.1)] border-solid border-t pt-[20px]">
        <p className="font-['Google_Sans:Medium',sans-serif] leading-[20px] text-[#1d4ed8] tracking-[0.8px] uppercase opacity-70 mb-[18px] text-[16px]">
          Contexto de mercado · 2025
        </p>
        
        <div className="grid grid-cols-2 gap-x-[120px] gap-y-[16px]">
          <div className="flex items-baseline gap-[10px]">
            <span className="font-['Google_Sans:Bold',sans-serif] text-[32px] text-[#0b1422] opacity-70 leading-none shrink-0">
              $1,7B
            </span>
            <span className="font-['Google_Sans:Regular',sans-serif] text-[#0b1422] opacity-50 leading-[18px] text-[16px]">
              en pagos digitales PyMEs solo en dic 2025 (12M ops)
            </span>
          </div>

          <div className="flex items-baseline gap-[10px]">
            <span className="font-['Google_Sans:Bold',sans-serif] text-[32px] text-[#1d4ed8] opacity-70 leading-none shrink-0">
              $2-5B
            </span>
            <span className="font-['Google_Sans:Regular',sans-serif] text-[#0b1422] opacity-50 leading-[18px] text-[16px]">
              TAM estimado · 1,1M PyMEs sin web × $2-5M c/u
            </span>
          </div>

          <div className="flex items-baseline gap-[10px]">
            <span className="font-['Google_Sans:Bold',sans-serif] text-[32px] text-[#0b1422] opacity-70 leading-none shrink-0">
              54%
            </span>
            <span className="font-['Google_Sans:Regular',sans-serif] text-[#0b1422] opacity-50 leading-[18px] text-[16px]">
              de PyMEs ya operan principalmente en línea
            </span>
          </div>

          <div className="flex items-baseline gap-[10px]">
            <span className="font-['Google_Sans:Bold',sans-serif] text-[32px] text-[#0b1422] opacity-70 leading-none shrink-0">
              50%
            </span>
            <span className="font-['Google_Sans:Regular',sans-serif] text-[#0b1422] opacity-50 leading-[18px] text-[16px]">
              planea integrar e-commerce en 2025
            </span>
          </div>
        </div>

        <div className="mt-[16px] pt-[12px] border-t border-[rgba(90,78,55,0.08)]">
          <p className="font-['Google_Sans:Regular',sans-serif] text-[#0b1422] opacity-35 leading-[18px] italic text-[16px]">
            MinTIC destinó $1,4B en conectividad, educación digital, innovación e IA — inversión pública que impulsa la demanda de servicios digitales privados.
          </p>
        </div>
      </div>
    </div>
  );
}