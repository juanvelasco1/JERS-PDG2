import Logo from "./Logo";
import img1 from "../../imports/WhatsApp_Image_2026-04-21_at_09.47.43_1.png";
import img2 from "../../imports/WhatsApp_Image_2026-04-27_at_18.30.38_1.png";
import img3 from "../../imports/WhatsApp_Image_2026-04-21_at_09.47.44_1.png";

export default function Slide07() {
  return (
    <div className="bg-[#fcfaf5] relative size-full px-[108px] pt-[81.3px]">
      {/* Logo */}
      <div className="absolute right-[24px] top-[24px] opacity-30">
        <Logo size="small" />
      </div>
      {/* Header */}
      <div className="relative">
        <p className="font-['Google_Sans:Medium',sans-serif] leading-[19.2px] opacity-85 text-[#1d4ed8] text-[16px] tracking-[1.28px] uppercase whitespace-nowrap">
          07 / Estrategia de Mercadeo
        </p>
        <h2 className="font-['Google_Sans:Bold',sans-serif] leading-[42.24px] mt-[25.58px] text-[#0b1422] text-[38.4px] whitespace-nowrap">
          Canales y ejecución 90 días
        </h2>
        <div className="bg-[#1d4ed8] h-[2px] mt-[5px] w-[44.797px]" />
      </div>

      {/* Content grid */}
      <div className="mt-[48px] flex gap-[48px]">
        {/* Left column: Canales prioritarios */}
        <div className="flex-1">
          <h3 className="font-['Google_Sans:Medium',sans-serif] leading-[28.16px] text-[#0b1422] text-[24px] mb-[16px]">
            Canales Prioritarios
          </h3>
          <div className="space-y-[14px]">
            <div className="flex gap-[12px]">
              <div className="bg-[#1d4ed8] h-[6px] mt-[10px] rounded-full shrink-0 w-[6px]" />
              <div>
                <p className="font-['Google_Sans:Medium',sans-serif] leading-[22.4px] text-[#0b1422] text-[18px]">
                  LinkedIn
                </p>
                <p className="font-['Google_Sans:Regular',sans-serif] leading-[22.4px] opacity-55 text-[16px] text-black">
                  Prospección directa + contenido educativo (3 posts/semana)
                </p>
              </div>
            </div>
            <div className="flex gap-[12px]">
              <div className="bg-[#1d4ed8] h-[6px] mt-[10px] rounded-full shrink-0 w-[6px]" />
              <div>
                <p className="font-['Google_Sans:Medium',sans-serif] leading-[22.4px] text-[#0b1422] text-[18px]">
                  Referidos
                </p>
                <p className="font-['Google_Sans:Regular',sans-serif] leading-[22.4px] opacity-55 text-[16px] text-black">
                  Comisión 15% para contadores, abogados, coaches
                </p>
              </div>
            </div>
            <div className="flex gap-[12px]">
              <div className="bg-[#1d4ed8] h-[6px] mt-[10px] rounded-full shrink-0 w-[6px]" />
              <div>
                <p className="font-['Google_Sans:Medium',sans-serif] leading-[22.4px] text-[#0b1422] text-[18px]">
                  Alianzas estratégicas
                </p>
                <p className="font-['Google_Sans:Regular',sans-serif] leading-[22.4px] opacity-55 text-[16px] text-black">
                  Coworkings, consultores empresariales
                </p>
              </div>
            </div>
            <div className="flex gap-[12px]">
              <div className="bg-[#1d4ed8] h-[6px] mt-[10px] rounded-full shrink-0 w-[6px]" />
              <div>
                <p className="font-['Google_Sans:Medium',sans-serif] leading-[22.4px] text-[#0b1422] text-[18px]">
                  SEO orgánico
                </p>
                <p className="font-['Google_Sans:Regular',sans-serif] leading-[22.4px] opacity-55 text-[16px] text-black">
                  Blog + casos de éxito
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Ejecución 90 días */}
        <div className="flex-1">
          <h3 className="font-['Google_Sans:Medium',sans-serif] leading-[28.16px] text-[#0b1422] text-[24px] mb-[16px]">
            Ejecución 90 días
          </h3>
          <div className="space-y-[14px]">
            <div className="flex gap-[12px]">
              <div className="bg-[#d4a017] h-[6px] mt-[10px] rounded-full shrink-0 w-[6px]" />
              <div>
                <p className="font-['Google_Sans:Medium',sans-serif] leading-[22.4px] text-[#0b1422] text-[18px]">
                  Semana 1-2
                </p>
                <p className="font-['Google_Sans:Regular',sans-serif] leading-[22.4px] opacity-55 text-[16px] text-black">
                  Activar LinkedIn + identificar 20 aliados
                </p>
              </div>
            </div>
            <div className="flex gap-[12px]">
              <div className="bg-[#d4a017] h-[6px] mt-[10px] rounded-full shrink-0 w-[6px]" />
              <div>
                <p className="font-['Google_Sans:Medium',sans-serif] leading-[22.4px] text-[#0b1422] text-[18px]">
                  Semana 3-4
                </p>
                <p className="font-['Google_Sans:Regular',sans-serif] leading-[22.4px] opacity-55 text-[16px] text-black max-w-[480px]">
                  Publicar contenido + contactar aliados + cold email a 200 pymes
                </p>
              </div>
            </div>
            <div className="flex gap-[12px]">
              <div className="bg-[#d4a017] h-[6px] mt-[10px] rounded-full shrink-0 w-[6px]" />
              <div>
                <p className="font-['Google_Sans:Medium',sans-serif] leading-[22.4px] text-[#0b1422] text-[18px]">
                  Semana 5-8
                </p>
                <p className="font-['Google_Sans:Regular',sans-serif] leading-[22.4px] opacity-55 text-[16px] text-black">
                  Cerrar 2-4 proyectos pagos
                </p>
              </div>
            </div>
            <div className="flex gap-[12px]">
              <div className="bg-[#d4a017] h-[6px] mt-[10px] rounded-full shrink-0 w-[6px]" />
              <div>
                <p className="font-['Google_Sans:Medium',sans-serif] leading-[22.4px] text-[#0b1422] text-[18px]">
                  Semana 9-12
                </p>
                <p className="font-['Google_Sans:Regular',sans-serif] leading-[22.4px] opacity-55 text-[16px] text-black">
                  Documentar casos de éxito + análisis Go/No-Go
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image section */}
      <div className="absolute top-[507px] left-[108px] right-[108px] flex items-center justify-between">
        <div className="h-[237px] w-[333px] rounded-[20px] overflow-hidden border-2 border-[#b2b2b2]">
          <img src={img1} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="h-[237px] w-[334px] rounded-[20px] overflow-hidden border-2 border-[#b2b2b2]">
          <img src={img2} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="h-[237px] w-[334px] rounded-[20px] overflow-hidden border-2 border-[#b2b2b2]">
          <img src={img3} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
}
