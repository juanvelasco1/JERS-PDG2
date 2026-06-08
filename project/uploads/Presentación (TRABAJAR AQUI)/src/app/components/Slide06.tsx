import Logo from "./Logo";
import { ExternalLink } from "lucide-react";
import qrCodeImg from "../../imports/Group.png";

export default function Slide06() {
  return (
    <div className="bg-[#fcfaf5] relative size-full px-[108px] pt-[81.3px]">
      {/* Logo */}
      <div className="absolute right-[24px] top-[24px] opacity-30">
        <Logo size="small" />
      </div>

      {/* Header */}
      <div className="relative">
        <p className="font-['Google_Sans:Medium',sans-serif] leading-[19.2px] opacity-85 text-[#1d4ed8] text-[16px] tracking-[1.28px] uppercase whitespace-nowrap">
          06 / Demostración
        </p>
        <h2 className="font-['Google_Sans:Bold',sans-serif] leading-[42.24px] mt-[25.58px] text-[#0b1422] text-[38.4px] whitespace-nowrap">
          Landing page en acción
        </h2>
        <div className="bg-[#1d4ed8] h-[2px] mt-[5px] w-[44.797px]" />
      </div>

      {/* Main content */}
      <div className="mt-[56px] flex gap-[48px] items-start">
        {/* Landing page preview */}
        <div className="flex-1">
          {/* Browser frame */}
          <div className="bg-white rounded-[12px] shadow-lg overflow-hidden border border-[rgba(90,78,55,0.08)]">
            {/* Browser chrome */}
            

            {/* Video */}
            <div className="relative" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 size-full"
                src="https://www.youtube.com/embed/zTsbXobXph8"
                title="JERS Landing Page Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Link below */}
          <div className="mt-[16px] flex items-center gap-[8px]">
            <ExternalLink size={14} color="#1d4ed8" />
            <a
              href="https://jers.com.co"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Google_Sans:Regular',sans-serif] text-[14px] text-[#1d4ed8] hover:underline"
            >
              Ver demo en vivo →
            </a>
          </div>
        </div>

        {/* QR Code section */}
        <div className="flex flex-col items-center gap-[16px]">
          <div className="bg-white rounded-[12px] p-[16px] shadow-md border border-[rgba(90,78,55,0.08)]">
            {/* QR Code - Simplified version */}
            <div className="size-[180px] bg-white p-[8px] rounded-[4px]">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://juanvelasco1.github.io/JERS/&color=1d4ed8" alt="QR Code" className="size-full object-contain" />
            </div>
          </div>
          <p className="font-['Google_Sans:Regular',sans-serif] text-[14px] text-[#0b1422] opacity-60 text-center">
            Escanea para ver
          </p>
        </div>
      </div>
    </div>
  );
}
