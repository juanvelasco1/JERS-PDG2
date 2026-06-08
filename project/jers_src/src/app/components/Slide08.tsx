import Logo from "./Logo";
import iphone1 from "../../imports/Group_2.png";
import iphone2 from "../../imports/iPhone-13-Pro-Front.png";
import iphone3 from "../../imports/iPhone-13-Pro-Front-1.png";
import iphone4 from "../../imports/iPhone-13-Pro-Front-2.png";

export default function Slide08() {
  return (
    <div className="bg-[#fcfaf5] relative size-full px-[108px] pt-[81.3px]">
      {/* Logo */}
      <div className="absolute right-[24px] top-[24px] opacity-30">
        <Logo size="small" />
      </div>
      {/* Header */}
      <div className="relative">
        <p className="font-['Google_Sans:Medium',sans-serif] leading-[19.2px] opacity-85 text-[#1d4ed8] text-[16px] tracking-[1.28px] uppercase whitespace-nowrap">
          08 / Estrategia de Mercadeo
        </p>
        <h2 className="font-['Google_Sans:Bold',sans-serif] leading-[42.24px] mt-[25.58px] text-[#0b1422] text-[38.4px] whitespace-nowrap">
          Presupuesto y métricas de control
        </h2>
        <div className="bg-[#1d4ed8] h-[2px] mt-[5px] w-[44.797px]" />
      </div>

      {/* Content grid */}
      <div className="mt-[48px] flex gap-[48px]">
        {/* Left column: Distribución presupuesto */}
        <div className="flex-1">
          <h3 className="font-['Google_Sans:Medium',sans-serif] leading-[28.16px] text-[#0b1422] text-[24px] mb-[16px]">
            Distribución Presupuesto Marketing
          </h3>
          <div className="space-y-[12px]">
            <div className="flex items-center gap-[12px]">
              <div className="flex-1 font-['Google_Sans:Regular',sans-serif] leading-[22.4px] text-[16px] text-black opacity-85">
                LinkedIn (contenido + herramientas)
              </div>
              <div className="font-['Google_Sans:Medium',sans-serif] leading-[22.4px] text-[#1d4ed8] text-[18px] w-[60px] text-right">
                5%
              </div>
            </div>
            <div className="flex items-center gap-[12px]">
              <div className="flex-1 font-['Google_Sans:Regular',sans-serif] leading-[22.4px] text-[16px] text-black opacity-85">
                Ads digitales (Google, Meta)
              </div>
              <div className="font-['Google_Sans:Medium',sans-serif] leading-[22.4px] text-[#1d4ed8] text-[18px] w-[60px] text-right">
                20%
              </div>
            </div>
            <div className="flex items-center gap-[12px]">
              <div className="flex-1 font-['Google_Sans:Regular',sans-serif] leading-[22.4px] text-[16px] text-black opacity-85">
                Eventos y networking
              </div>
              <div className="font-['Google_Sans:Medium',sans-serif] leading-[22.4px] text-[#1d4ed8] text-[18px] w-[60px] text-right">
                8%
              </div>
            </div>
            <div className="flex items-center gap-[12px]">
              <div className="flex-1 font-['Google_Sans:Regular',sans-serif] leading-[22.4px] text-[16px] text-black opacity-85">
                Producciones (fotos, videos)
              </div>
              <div className="font-['Google_Sans:Medium',sans-serif] leading-[22.4px] text-[#1d4ed8] text-[18px] w-[60px] text-right">
                10%
              </div>
            </div>
            <div className="flex items-center gap-[12px]">
              <div className="flex-1 font-['Google_Sans:Regular',sans-serif] leading-[22.4px] text-[16px] text-black opacity-85">
                Herramientas (email, analytics, landing)
              </div>
              <div className="font-['Google_Sans:Medium',sans-serif] leading-[22.4px] text-[#1d4ed8] text-[18px] w-[60px] text-right">
                9%
              </div>
            </div>
            <div className="flex items-center gap-[12px] pt-[8px] border-t border-[rgba(90,78,55,0.1)]">
              <div className="flex-1 font-['Google_Sans:Medium',sans-serif] leading-[22.4px] text-[16px] text-black">
                Reserva/contingencia
              </div>
              <div className="font-['Google_Sans:Bold',sans-serif] leading-[22.4px] text-[#d4a017] text-[18px] w-[60px] text-right">
                48%
              </div>
            </div>
          </div>
        </div>

        {/* Right column: KPIs de control */}
        <div className="flex-1">
          <h3 className="font-['Google_Sans:Medium',sans-serif] leading-[28.16px] text-[#0b1422] text-[24px] mb-[16px]">
            KPIs de Control
          </h3>
          <div className="space-y-[18px]">
            {/* Leads y conversión */}
            <div>
              <p className="font-['Google_Sans:Medium',sans-serif] leading-[22.4px] text-[#1d4ed8] text-[18px] mb-[4px]">
                Generación y conversión
              </p>
              <div className="flex flex-wrap gap-x-[16px] gap-y-[4px]">
                <span className="font-['Google_Sans:Regular',sans-serif] leading-[22.4px] text-[16px] text-black opacity-55">
                  Leads: 20-30/mes
                </span>
                <span className="font-['Google_Sans:Regular',sans-serif] leading-[22.4px] text-[16px] text-black opacity-55">
                  Conversión: 15% mín
                </span>
                <span className="font-['Google_Sans:Regular',sans-serif] leading-[22.4px] text-[16px] text-black opacity-55">
                  CAC: &lt;$100K
                </span>
              </div>
            </div>

            {/* Clientes y revenue */}
            <div>
              <p className="font-['Google_Sans:Medium',sans-serif] leading-[22.4px] text-[#1d4ed8] text-[18px] mb-[4px]">
                Clientes y revenue
              </p>
              <div className="flex flex-wrap gap-x-[16px] gap-y-[4px]">
                <span className="font-['Google_Sans:Regular',sans-serif] leading-[22.4px] text-[16px] text-black opacity-55">
                  Clientes pagos Mes 3: 2-4
                </span>
                <span className="font-['Google_Sans:Regular',sans-serif] leading-[22.4px] text-[16px] text-black opacity-55">
                  MRR: $500K/mes
                </span>
                <span className="font-['Google_Sans:Regular',sans-serif] leading-[22.4px] text-[16px] text-black opacity-55">
                  Margen: &gt;55%
                </span>
              </div>
            </div>

            {/* Satisfacción */}
            <div>
              <p className="font-['Google_Sans:Medium',sans-serif] leading-[22.4px] text-[#1d4ed8] text-[18px] mb-[4px]">
                Satisfacción del cliente
              </p>
              <div className="flex flex-wrap gap-x-[16px] gap-y-[4px]">
                <span className="font-['Google_Sans:Regular',sans-serif] leading-[22.4px] text-[16px] text-black opacity-55">
                  NPS: &gt;40
                </span>
                <span className="font-['Google_Sans:Regular',sans-serif] leading-[22.4px] text-[16px] text-black opacity-55">
                  CSAT: &gt;8/10
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* iPhone mockups section */}
      <div className="absolute left-[108px] right-[108px] flex items-end justify-center gap-[44px] p-[0px] mx-[0px] mt-[0px] mb-[-14px]" style={{ bottom: '-28px' }}>
        <div className="w-[205px]">
          <img src={iphone1} alt="Analytics" className="w-full h-auto drop-shadow-md" />
        </div>
        <div className="w-[205px]">
          <img src={iphone2} alt="LinkedIn Profile" className="w-full h-auto drop-shadow-md" />
        </div>
        <div className="w-[205px]">
          <img src={iphone3} alt="Instagram Profile" className="w-full h-auto drop-shadow-md" />
        </div>
        <div className="w-[205px]">
          <img src={iphone4} alt="Instagram Feed" className="w-full h-auto drop-shadow-md" />
        </div>
      </div>
    </div>
  );
}
