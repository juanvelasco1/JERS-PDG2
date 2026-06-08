import { motion } from "motion/react";
import { DollarSign, Star, Clock, ClipboardCheck } from "lucide-react";
import Logo from "./Logo";

const PLOT_W = 680;
const PLOT_H = 330;
const AXIS_LEFT = 72;

const priceTicks = [
  { label: "$300", pct: 10 },
  { label: "$1.5K", pct: 28 },
  { label: "$3K", pct: 44 },
  { label: "$8K", pct: 66 },
  { label: "$20K+", pct: 86 },
];

const qualityTicks = [
  { label: "Básica", pct: 12 },
  { label: "Estándar", pct: 47 },
  { label: "Premium", pct: 80 },
];

// x=calidad (0=baja → 100=alta), y=precio (0=barato → 100=caro)
// labelAnchor: "below" | "above" | "left" | "right"
const points: { name: string; note: string; x: number; y: number; highlight: boolean; labelAnchor: string }[] = [
  { name: "Plantillas", note: "$100–300 · sin personalización", x: 12, y: 10, highlight: false, labelAnchor: "below-right" },
  { name: "Freelancers", note: "$500–2K · calidad variable", x: 36, y: 27, highlight: false, labelAnchor: "below-right" },
  { name: "Agencia tradicional", note: "$10K–25K · burocracia", x: 50, y: 90, highlight: false, labelAnchor: "above-left" },
  { name: "Boutique UX", note: "$5K–15K · diseño premium", x: 77, y: 76, highlight: false, labelAnchor: "above-right" },
  { name: "JERS", note: "$1K–3K · calidad de agencia", x: 82, y: 38, highlight: true, labelAnchor: "right" },
];

const reasons = [
  { Icon: DollarSign, text: "Precio de freelancer: $1,000–$3,000" },
  { Icon: Star, text: "Calidad de agencia boutique en cada entrega" },
  { Icon: Clock, text: "Sin horas de edición ni frustraciones" },
  { Icon: ClipboardCheck, text: "Proceso profesional con diagnóstico incluido" },
];

function getLabelStyle(anchor: string, dotSize: number): React.CSSProperties {
  const half = dotSize / 2;
  switch (anchor) {
    case "below-right": return { left: half + 6, top: half + 4 };
    case "below-left": return { right: half + 6, top: half + 4, textAlign: "right" };
    case "above-right": return { left: half + 6, bottom: half + 4 };
    case "above-left": return { right: half + 6, bottom: half + 4, textAlign: "right" };
    case "right": return { left: half + 8, top: "50%", transform: "translateY(-50%)" };
    case "left": return { right: half + 8, top: "50%", transform: "translateY(-50%)", textAlign: "right" };
    default: return { left: half + 6, top: half + 4 };
  }
}

export default function Slide09({ subStep = 0 }: { subStep?: number }) {
  return (
    <div className="bg-[#fcfaf5] relative size-full px-[108px] pt-[68px]">
      <div className="absolute right-[24px] top-[24px] opacity-30">
        <Logo size="small" />
      </div>

      {/* Header */}
      <div className="relative">
        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 0.85, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
          className="font-['Google_Sans:Medium',sans-serif] text-[#1d4ed8] text-[16px] tracking-[1.28px] uppercase">
          09 / Posicionamiento
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.18 }}
          className="font-['Google_Sans:Bold',sans-serif] mt-[12px] text-[#0b1422] text-[34px] leading-[40px]">
          Precio vs Calidad
        </motion.h2>
        <div className="bg-[#1d4ed8] h-[2px] mt-[4px] w-[44px]" />
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 0.28 }}
          className="font-['Google_Sans:Regular',sans-serif] mt-[8px] text-[16px] text-black leading-[22px]">
          Alta calidad a precio de freelancer. El cuadrante que nadie más ocupa.
        </motion.p>
      </div>

      {/* Body: chart + sidebar */}
      <div className="flex gap-[36px] mt-[28px] items-start">

        {/* Chart container */}
        <div className="relative shrink-0" style={{ width: `${AXIS_LEFT + PLOT_W + 20}px`, height: `${PLOT_H + 48}px` }}>

          {/* Rotated Y-axis label */}
          <div className="absolute" style={{ left: 0, top: 0, width: "16px", height: `${PLOT_H}px`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span className="-rotate-90 font-['Google_Sans:Regular',sans-serif] text-[12px] text-[#0b1422] opacity-30 tracking-[0.6px] uppercase whitespace-nowrap">
              Precio
            </span>
          </div>

          {/* Price index labels on Y axis */}
          {priceTicks.map((tick, i) => {
            const yPx = PLOT_H - (tick.pct / 100) * PLOT_H;
            return (
              <div key={i} className="absolute flex items-center justify-end"
                style={{ left: "18px", top: `${yPx - 8}px`, width: `${AXIS_LEFT - 24}px`, gap: "4px" }}>
                <span className="font-['Google_Sans:Medium',sans-serif] text-[11px] text-[#0b1422] opacity-40 whitespace-nowrap">
                  {tick.label}
                </span>
                <div className="h-px w-[5px] bg-[rgba(11,20,34,0.2)]" />
              </div>
            );
          })}

          {/* Plot area */}
          <div className="absolute" style={{ left: `${AXIS_LEFT}px`, top: 0, width: `${PLOT_W}px`, height: `${PLOT_H}px` }}>
            {/* Grid lines */}
            {priceTicks.map((tick, i) => {
              const yPx = PLOT_H - (tick.pct / 100) * PLOT_H;
              return <div key={i} className="absolute left-0 w-full h-px border-t border-dashed border-[rgba(11,20,34,0.06)]" style={{ top: `${yPx}px` }} />;
            })}

            {/* Axes */}
            <div className="absolute left-0 top-0 w-px bg-[rgba(90,78,55,0.25)]" style={{ height: `${PLOT_H}px` }} />
            <div className="absolute left-0 w-full h-px bg-[rgba(90,78,55,0.25)]" style={{ top: `${PLOT_H}px` }} />

            {/* X-axis quality ticks */}
            {qualityTicks.map((tick, i) => {
              const xPx = (tick.pct / 100) * PLOT_W;
              return (
                <div key={i} className="absolute" style={{ left: `${xPx}px`, top: `${PLOT_H + 8}px` }}>
                  <span className="font-['Google_Sans:Regular',sans-serif] text-[11px] text-[#0b1422] opacity-40 whitespace-nowrap"
                    style={{ display: "block", textAlign: "center", transform: "translateX(-50%)" }}>
                    {tick.label}
                  </span>
                </div>
              );
            })}
            <span className="absolute font-['Google_Sans:Regular',sans-serif] text-[12px] text-[#0b1422] opacity-30 tracking-[0.6px] uppercase whitespace-nowrap"
              style={{ right: 0, top: `${PLOT_H + 30}px` }}>
              Calidad →
            </span>

            {/* Data points */}
            {points.map((pt, i) => {
              const isJers = pt.highlight;
              const show = isJers ? subStep >= 1 : true;
              const xPx = (pt.x / 100) * PLOT_W;
              const yPx = PLOT_H - (pt.y / 100) * PLOT_H;
              const dotSize = isJers ? 12 : 8;

              return (
                <motion.div key={i} className="absolute"
                  style={{ left: `${xPx}px`, top: `${yPx}px` }}
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.4 }}
                  transition={{ duration: 0.38, delay: isJers ? 0.22 : 0.06 * i }}>
                  {/* Dot */}
                  <div className="absolute rounded-full"
                    style={{
                      width: dotSize, height: dotSize,
                      backgroundColor: isJers ? "#1d4ed8" : "rgba(11,20,34,0.3)",
                      transform: "translate(-50%, -50%)",
                    }} />
                  {/* Label */}
                  <div className="absolute" style={getLabelStyle(pt.labelAnchor, dotSize)}>
                    <p className="font-['Google_Sans:Medium',sans-serif] text-[12.5px] leading-[15px] whitespace-nowrap"
                      style={{ color: isJers ? "#1d4ed8" : "#0b1422", opacity: isJers ? 1 : 0.7 }}>
                      {pt.name}
                    </p>
                    <p className="font-['Google_Sans:Regular',sans-serif] text-[10.5px] leading-[13px] whitespace-nowrap opacity-50"
                      style={{ color: "#0b1422" }}>
                      {pt.note}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* Circle around JERS */}
            <motion.div className="absolute pointer-events-none"
              style={{
                left: `${(82 / 100) * PLOT_W - 80}px`,
                top: `${PLOT_H - (38 / 100) * PLOT_H - 80}px`,
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={subStep >= 1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.55, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}>
              <svg width="160" height="160" fill="none">
                <circle cx="80" cy="80" r="78" stroke="#1D4ED8" strokeWidth="1.5" strokeDasharray="5 3" />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Reason sidebar */}
        <motion.div className="flex-1 pt-[2px]"
          initial={{ opacity: 0, x: 18 }}
          animate={subStep >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 18 }}
          transition={{ duration: 0.42, ease: "easeOut" }}>
          <div className="bg-white rounded-[10px] border border-[rgba(29,78,216,0.12)] px-[22px] py-[20px]">
            <p className="font-['Google_Sans:Bold',sans-serif] text-[13px] text-[#1d4ed8] uppercase tracking-[1.1px] mb-[14px]">
              ¿Por qué JERS gana aquí?
            </p>
            <div className="flex flex-col gap-[11px]">
              {reasons.map(({ Icon, text }, i) => (
                <motion.div key={i} className="flex items-start gap-[10px]"
                  initial={{ opacity: 0, y: 5 }}
                  animate={subStep >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
                  transition={{ delay: 0.38 + i * 0.07 }}>
                  <div className="shrink-0 mt-[1px] size-[20px] rounded-full bg-[rgba(29,78,216,0.08)] flex items-center justify-center">
                    <Icon size={11} color="#1d4ed8" strokeWidth={2.5} />
                  </div>
                  <p className="font-['Google_Sans:Regular',sans-serif] text-[14px] text-[#0b1422] leading-[19px] opacity-80">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="mt-[16px] pt-[14px] border-t border-[rgba(90,78,55,0.08)]">
              <p className="font-['Google_Sans:Regular',sans-serif] text-[12px] text-[#0b1422] opacity-45 leading-[17px] italic">
                "Lo barato te cuesta tiempo. JERS invierte en el crecimiento real de tu negocio."
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
