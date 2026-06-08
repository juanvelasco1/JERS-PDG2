import { motion } from "motion/react";
import { Globe, ClipboardList, FileText, Upload, Sparkles, Calendar, Code, CheckCircle, Rocket, RefreshCw } from "lucide-react";
import Logo from "./Logo";

const journeySteps = [
  {
    title: "Landing",
    desc: "Primer contacto",
    Icon: Globe,
    includes: ["Propuesta de valor clara", "Casos de éxito reales", "Demo interactivo"],
  },
  {
    title: "Diagnóstico",
    desc: "Evaluación inicial",
    Icon: ClipboardList,
    includes: ["Análisis de necesidades", "Evaluación automatizada", "Score de viabilidad"],
  },
  {
    title: "Cuestionario",
    desc: "Definición de alcance",
    Icon: FileText,
    includes: ["Objetivos del negocio", "Público y funcionalidades", "Estilo y referencias"],
  },
  {
    title: "Documentos",
    desc: "Carga de activos",
    Icon: Upload,
    includes: ["Logo e identidad visual", "Contenido y textos", "Referencias de diseño"],
  },
  {
    title: "IA Preview",
    desc: "Propuesta inteligente",
    Icon: Sparkles,
    includes: ["Mockup personalizado con IA", "Estimación de tiempo y costo", "Roadmap preliminar"],
  },
  {
    title: "Reunión",
    desc: "Alineación estratégica",
    Icon: Calendar,
    includes: ["Revisión de propuesta", "Ajuste de expectativas", "Confirmación de alcance"],
  },
  {
    title: "Desarrollo",
    desc: "Construcción ágil",
    Icon: Code,
    includes: ["Sprints semanales", "Entregas parciales", "Control de versiones"],
  },
  {
    title: "Validación",
    desc: "Revisión y ajustes",
    Icon: CheckCircle,
    includes: ["Feedback del cliente", "Correcciones iterativas", "Ciclo hasta aprobación ↺"],
    isIterative: true,
  },
  {
    title: "Entrega",
    desc: "Producto final",
    Icon: Rocket,
    includes: ["Despliegue en producción", "Documentación técnica", "Capacitación al equipo"],
  },
  {
    title: "Fidelización",
    desc: "Suscripción activa",
    Icon: RefreshCw,
    includes: ["Actualizaciones periódicas", "Mejoras y nuevas funciones", "Soporte prioritario"],
    isLast: true,
  },
];

export default function Slide05({ subStep = 0 }: { subStep?: number }) {
  const current = journeySteps[subStep];

  return (
    <div className="bg-[#fcfaf5] relative size-full px-[108px] pt-[72px]">
      {/* Logo */}
      <div className="absolute right-[24px] top-[24px] opacity-30">
        <Logo size="small" />
      </div>

      {/* Header */}
      <div className="relative">
        <p className="font-['Google_Sans:Medium',sans-serif] leading-[19.2px] opacity-85 text-[#1d4ed8] text-[16px] tracking-[1.28px] uppercase whitespace-nowrap">
          05 / Journey Map
        </p>
        <h2 className="font-['Google_Sans:Bold',sans-serif] leading-[42.24px] mt-[16px] text-[#0b1422] text-[36px] whitespace-nowrap">
          Recorrido del cliente
        </h2>
        <div className="bg-[#1d4ed8] h-[2px] mt-[5px] w-[44px]" />
      </div>

      {/* Journey flow */}
      <div className="mt-[56px] relative px-[12px]">
        {/* Connection line background */}
        <div className="absolute top-[22px] left-[44px] right-[44px] h-[2px] bg-[rgba(90,78,55,0.1)]" />

        {/* Active connection line — stops before the iterative arc zone */}
        <motion.div
          className="absolute top-[22px] left-[44px] h-[2px] bg-[#1d4ed8]"
          initial={{ width: 0 }}
          animate={{
            width: subStep === 0
              ? 0
              : `calc(${(subStep / (journeySteps.length - 1)) * 100}% - ${44 * 2}px)`,
          }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        />

        {/* Journey steps */}
        <div className="flex justify-between relative">
          {journeySteps.map((step, index) => {
            const isActive = index <= subStep;
            const isCurrent = index === subStep;
            const { Icon } = step;
            const isDevStep = index === 6;
            const isValStep = index === 7;

            return (
              <div key={index} className="flex flex-col items-center relative" style={{ width: "96px" }}>
                {/* Iterative loop arc: rendered above Validación (index 7), spans back to Desarrollo (index 6) */}
                {isValStep && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 pointer-events-none" style={{ width: "200px", height: "28px", left: "-52px" }}>
                    <svg width="200" height="28" viewBox="0 0 200 28" fill="none">
                      <motion.path
                        d="M 170 26 C 170 10 30 10 30 26"
                        stroke={subStep >= 7 ? "#d4a017" : "rgba(90,78,55,0.12)"}
                        strokeWidth="1.5"
                        strokeDasharray="4 3"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: subStep >= 7 ? 1 : 0, opacity: subStep >= 6 ? 1 : 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />
                      {subStep >= 7 && (
                        <motion.polygon
                          points="25,22 34,26 34,18"
                          fill="#d4a017"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        />
                      )}
                    </svg>
                    {subStep >= 7 && (
                      <motion.span
                        className="absolute font-['Google_Sans:Medium',sans-serif] text-[10px] text-[#d4a017] whitespace-nowrap"
                        style={{ top: "0px", left: "50%", transform: "translateX(-50%)" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        itera hasta aprobar
                      </motion.span>
                    )}
                  </div>
                )}

                <motion.div
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: isActive ? 1 : 0.22, y: 0 }}
                  transition={{ duration: 0.35, delay: isCurrent ? 0.1 : 0 }}
                >
                  {/* Icon circle */}
                  <motion.div
                    className="relative flex items-center justify-center rounded-full border-[2px]"
                    style={{
                      width: "44px",
                      height: "44px",
                      backgroundColor: isActive
                        ? step.isLast
                          ? "#d4a017"
                          : "#1d4ed8"
                        : "#fcfaf5",
                      borderColor: isActive
                        ? step.isLast
                          ? "#d4a017"
                          : "#1d4ed8"
                        : "rgba(90,78,55,0.15)",
                    }}
                    animate={{
                      scale: isCurrent ? 1.1 : 1,
                      boxShadow: isCurrent
                        ? step.isLast
                          ? "0 4px 14px rgba(212,160,23,0.3)"
                          : "0 4px 14px rgba(29,78,216,0.25)"
                        : "0 0 0 rgba(0,0,0,0)",
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    <Icon
                      size={20}
                      color={isActive ? "#fcfaf5" : "#0b1422"}
                      strokeWidth={2}
                    />
                  </motion.div>

                  {/* Title */}
                  <p
                    className="font-['Google_Sans:Medium',sans-serif] mt-[10px] text-center text-[13.5px] leading-[17px]"
                    style={{ color: isActive ? "#0b1422" : "#aaa" }}
                  >
                    {step.title}
                  </p>

                  {/* Sub-label */}
                  <p
                    className="font-['Google_Sans:Regular',sans-serif] mt-[1px] text-center text-[11px] leading-[15px]"
                    style={{ color: "#0b1422", opacity: isActive ? 0.4 : 0.18 }}
                  >
                    {step.desc}
                  </p>

                  {/* Current indicator dot */}
                  {isCurrent && (
                    <motion.div
                      className="h-[2px] mt-[8px] rounded-full w-[20px]"
                      style={{ backgroundColor: step.isLast ? "#d4a017" : "#1d4ed8" }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.25, delay: 0.15 }}
                    />
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom info card */}
      <motion.div
        key={subStep}
        className="absolute bottom-[52px] left-[108px] right-[108px]"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        <div
          className="rounded-[10px] border px-[28px] py-[18px] flex items-start gap-[32px]"
          style={{
            backgroundColor: "white",
            borderColor: current.isLast
              ? "rgba(212,160,23,0.2)"
              : "rgba(29,78,216,0.1)",
          }}
        >
          {/* Step name + number */}
          <div className="shrink-0 pt-[1px]">
            <p
              className="font-['Google_Sans:Bold',sans-serif] text-[22px] leading-[26px]"
              style={{ color: current.isLast ? "#d4a017" : "#1d4ed8" }}
            >
              {current.title}
            </p>
            <p className="font-['Google_Sans:Regular',sans-serif] text-[13px] leading-[18px] text-[#0b1422] opacity-40 mt-[2px]">
              Paso {subStep + 1} de {journeySteps.length}
            </p>
          </div>

          {/* Divider */}
          <div className="self-stretch w-[1px] bg-[rgba(90,78,55,0.1)] shrink-0" />

          {/* Includes */}
          <div className="flex gap-[24px] flex-wrap">
            {current.includes.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-[8px]"
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 + 0.1 }}
              >
                <div
                  className="rounded-full shrink-0"
                  style={{
                    width: "6px",
                    height: "6px",
                    backgroundColor: current.isLast ? "#d4a017" : "#1d4ed8",
                  }}
                />
                <span className="font-['Google_Sans:Regular',sans-serif] text-[16px] leading-[22px] text-[#0b1422] opacity-75">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
