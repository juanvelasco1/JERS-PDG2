import { motion } from "motion/react";
import Logo from "./Logo";

export default function Slide18({ subStep = 0 }: { subStep?: number }) {
  const drafts = [
    {
      tasks: [
        { label: "Idea de negocio", completed: true },
        { label: "Modelo de negocio", completed: true },
        { label: "MVP", completed: true },
        { label: "Objetivos", completed: true },
      ],
    },
    {
      tasks: [
        { label: "Plan de mercadeo", completed: true },
        { label: "Ejecución del plan de mercadeo", completed: true },
        { label: "Prototipo terminado", completed: true },
        { label: "Pruebas de prototipo y ajustes según resultado", completed: true },
      ],
    },
    {
      tasks: [
        { label: "Estructura organizacional y talento humano", completed: false },
        { label: "Resultado de producto y uso por adoptadores tempranos", completed: false },
        { label: "Seguimiento de KPIs y planes de acción", completed: false },
        { label: "Proyección futura adaptada", completed: false },
      ],
    },
  ];

  // Which draft is "active" / emphasized
  // subStep 0 → Draft 1 active, subStep 1 → Draft 2, subStep 2 → Draft 3
  const activeDraft = subStep;

  return (
    <div className="bg-[#fcfaf5] relative size-full px-[108px] pt-[81.3px]">
      {/* Logo */}
      <div className="absolute right-[24px] top-[24px] opacity-30">
        <Logo size="small" />
      </div>

      {/* Header */}
      <div className="relative">
        <p className="font-['Google_Sans:Medium',sans-serif] leading-[19.2px] opacity-85 text-[#1d4ed8] text-[16px] tracking-[1.28px] uppercase whitespace-nowrap">
          18 / CRONOGRAMA
        </p>
        <h2 className="font-['Google_Sans:Bold',sans-serif] leading-[42.24px] mt-[25.58px] text-[#0b1422] text-[38.4px] whitespace-nowrap">
          Backlog según Drafts
        </h2>
        <div className="absolute bg-[#1d4ed8] h-[2px] mt-[5px] w-[44.797px]" />
      </div>

      {/* Description */}
      <p className="font-['Google_Sans:Regular',sans-serif] leading-[28.56px] mt-[40px] opacity-55 text-[20px] text-black w-[555px]">
        En JERS organizamos las actividades de tal manera que podamos cumplir
        con nuestros objetivos al final del semestre.
      </p>

      {/* Drafts grid */}
      <div className="mt-[48px] flex">
        {drafts.map((draft, draftIdx) => {
          const isActive = activeDraft === draftIdx;
          const isPast = draftIdx < activeDraft;

          // Line height based on number of tasks
          const lineH = (draft.tasks.length - 1) * 43 + 4;

          return (
            <motion.div
              key={draftIdx}
              className="relative"
              style={{
                width: 380,
                paddingLeft: 24,
                borderLeft: "1px solid rgba(30,30,30,0.15)",
              }}
              animate={{
                opacity: isActive ? 1 : isPast ? 0.35 : 0.35,
              }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Draft title */}
              <p className="font-['Google_Sans:Bold',sans-serif] leading-[42.24px] text-[36px] whitespace-nowrap">
                <span
                  style={{
                    color: isActive ? "#0b1422" : "#0b1422",
                  }}
                >
                  Draft{" "}
                </span>
                <motion.span
                  animate={{
                    color: isActive ? "#1d4ed8" : "#0b1422",
                  }}
                  transition={{ duration: 0.35 }}
                >
                  {draftIdx + 1}
                </motion.span>
              </p>

              {/* Tasks with vertical line */}
              <div className="mt-[20px] relative pl-[18px]">
                {/* Vertical connector line */}
                <div
                  className="absolute left-[4px] top-[5px]"
                  style={{ height: lineH }}
                >
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox={`0 0 1 ${lineH}`}
                  >
                    <line
                      x1="0.5"
                      y1="0"
                      x2="0.5"
                      y2={lineH}
                      stroke="black"
                      opacity="0.18"
                      strokeDasharray="3 3"
                    />
                  </svg>
                </div>

                {/* Task items */}
                <div className="flex flex-col gap-[14px]">
                  {draft.tasks.map((task, taskIdx) => (
                    <motion.div
                      key={taskIdx}
                      className="flex items-center gap-[14px] relative"
                      animate={
                        isActive
                          ? { opacity: 1, x: 0 }
                          : { opacity: 1, x: 0 }
                      }
                      transition={{
                        duration: 0.3,
                        delay: isActive ? taskIdx * 0.06 : 0,
                      }}
                    >
                      {/* Dot */}
                      <div className="relative shrink-0 size-[10px] -ml-[18px]">
                        <svg
                          className="block size-full"
                          fill="none"
                          viewBox="0 0 10 10"
                        >
                          {task.completed ? (
                            <circle cx="5" cy="5" r="5" fill="#1D4ED8" />
                          ) : (
                            <circle
                              cx="5"
                              cy="5"
                              r="4"
                              fill="#FCFAF5"
                              stroke="#1D4ED8"
                              strokeWidth="1"
                            />
                          )}
                        </svg>
                      </div>

                      {/* Label */}
                      <p
                        className="font-['Google_Sans:Regular',sans-serif] leading-[20px] text-[15px]"
                        style={{
                          color: task.completed
                            ? "rgba(0,0,0,0.8)"
                            : "rgba(0,0,0,0.45)",
                        }}
                      >
                        {task.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
