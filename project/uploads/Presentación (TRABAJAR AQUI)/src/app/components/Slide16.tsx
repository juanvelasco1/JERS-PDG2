import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";

const scenarios = [
  {
    id: "pessimist",
    title: "Pesimista",
    rate: "2 proy / mes",
    avgProject: "$ 2.870.000",
    color: "#0b1422",
    accent: false,
    years: [
      { label: "Año 1", projects: "12", revenue: "$ 39.1M" },
      { label: "Año 2", projects: "25", revenue: "$ 85.3M" },
      { label: "Año 3", projects: "33", revenue: "$ 118.6M" },
      { label: "Año 5", projects: "44", revenue: "$ 171.9M" },
    ],
  },
  {
    id: "normal",
    title: "Normal",
    rate: "4 proy / mes",
    avgProject: "$ 2.975.000",
    color: "#1d4ed8",
    accent: true,
    years: [
      { label: "Año 1", projects: "20", revenue: "$ 70.7M" },
      { label: "Año 2", projects: "39", revenue: "$ 227.3M" },
      { label: "Año 3", projects: "55", revenue: "$ 222.4M" },
      { label: "Año 5", projects: "79", revenue: "$ 357.9M" },
    ],
  },
  {
    id: "optimist",
    title: "Esperanzador",
    rate: "6+ proy / mes",
    avgProject: "$ 3.255.000",
    color: "#0b1422",
    accent: false,
    years: [
      { label: "Año 1", projects: "28", revenue: "$ 110.6M" },
      { label: "Año 2", projects: "53", revenue: "$ 227.3M" },
      { label: "Año 3", projects: "72", revenue: "$ 334.8M" },
      { label: "Año 5", projects: "109", revenue: "$ 574.5M" },
    ],
  },
];

export default function Slide16({ subStep = 0 }: { subStep?: number }) {
  const phase = subStep >= 1 ? "focus" : "all";
  const normal = scenarios[1];

  return (
    <div className="bg-[#fcfaf5] relative size-full px-[108px] pt-[81.3px]">
      {/* Logo */}
      <div className="absolute right-[24px] top-[24px] opacity-30">
        <Logo size="small" />
      </div>
      {/* Header */}
      <div className="relative">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-['Google_Sans:Medium',sans-serif] leading-[19.2px] text-[#1d4ed8] text-[16px] tracking-[1.28px] uppercase whitespace-nowrap"
        >
          16 / Proyecciones
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-['Google_Sans:Bold',sans-serif] leading-[42.24px] mt-[25.58px] text-[#0b1422] text-[38.4px] whitespace-nowrap"
        >
          Proyección 5 años
        </motion.h2>
        <div className="bg-[#1d4ed8] h-[2px] mt-[5px] w-[44.797px]" />
      </div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="font-['Google_Sans:Regular',sans-serif] leading-[28.56px] mt-[75px] text-[20px] text-black w-[534px]"
      >
        Base: 2 proyectos/mes en año 1. Escala con sistema de metodología replicable.
      </motion.p>

      {/* Content area */}
      <div className="mt-[48px] relative h-[390px]">
        <AnimatePresence mode="wait">
          {phase === "all" ? (
            /* ── PHASE 1: All three scenarios ── */
            <motion.div
              key="all-scenarios"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex gap-0"
            >
              {scenarios.map((sc, idx) => (
                <motion.div
                  key={sc.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.15 + idx * 0.15 }}
                  className="w-[380px] relative"
                >
                  {/* Left border */}
                  <div
                    className="absolute left-0 top-0 w-px h-full"
                    style={{
                      backgroundColor: sc.accent ? "#1d4ed8" : "#1e1e1e",
                      opacity: 0.3,
                    }}
                  />

                  <div className="pl-[16px] pt-[16px]">
                    {/* Title */}
                    <p
                      className="font-['Google_Sans:SemiBold',sans-serif] leading-[48px] text-[38px] whitespace-nowrap"
                      style={{ color: sc.color }}
                    >
                      {sc.title}
                    </p>
                    <p className="font-['Google_Sans:Regular',sans-serif] leading-[18.368px] mt-[4px] opacity-50 text-[18px] text-black">
                      {sc.rate}
                    </p>
                    <div
                      className="h-[2px] mt-[8px] w-[32px]"
                      style={{
                        backgroundColor: sc.accent ? "#1d4ed8" : "#0b1422",
                        opacity: sc.accent ? 1 : 0.4,
                      }}
                    />

                    {/* Avg project value */}
                    <p className="font-['Google_Sans:Regular',sans-serif] leading-[18px] mt-[20px] text-[14px] text-black opacity-60">
                      Valor promedio proyecto
                    </p>
                    <p className="font-['Google_Sans:Regular',sans-serif] leading-[18px] mt-[2px] opacity-50 text-[17px] text-black">
                      {sc.avgProject} COP
                    </p>

                    {/* Year rows */}
                    <div className="mt-[18px] flex flex-col gap-[10px]">
                      {sc.years.map((yr) => (
                        <div key={yr.label} className="flex items-baseline gap-[8px]">
                          <p className="font-['Google_Sans:Medium',sans-serif] text-[13px] text-black opacity-70 w-[42px]">
                            {yr.label}
                          </p>
                          <p className="font-['Google_Sans:Regular',sans-serif] text-[13px] text-black opacity-40 w-[56px]">
                            {yr.projects} proy
                          </p>
                          <p
                            className="font-['Google_Sans:Medium',sans-serif] text-[16px]"
                            style={{
                              color: sc.accent ? "#1d4ed8" : "#0b1422",
                              opacity: sc.accent ? 1 : 0.6,
                            }}
                          >
                            {yr.revenue}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* ── PHASE 2: Focus on Normal ── */
            <motion.div
              key="focus-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              {/* Centered Normal scenario */}
              <div className="flex h-full">
                {/* Left: title + info */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="w-[440px] pt-[16px]"
                >
                  <p className="font-['Google_Sans:SemiBold',sans-serif] leading-[56px] text-[#1d4ed8] whitespace-nowrap text-[38px]">
                    Escenario Normal
                  </p>
                  <p className="font-['Google_Sans:Regular',sans-serif] leading-[22px] mt-[6px] opacity-50 text-[20px] text-black">
                    4 proyectos / mes
                  </p>
                  <div className="bg-[#1d4ed8] h-[2px] mt-[10px] w-[44px]" />

                  <p className="font-['Google_Sans:Regular',sans-serif] leading-[20px] mt-[28px] text-[15px] text-black opacity-60">
                    Valor promedio proyecto
                  </p>
                  <p className="font-['Google_Sans:Medium',sans-serif] leading-[24px] mt-[2px] text-[20px] text-[#1d4ed8]">
                    $ 2.975.000 COP
                  </p>

                  {/* Range indicator */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="mt-[32px] pt-[16px]"
                    style={{ borderTop: "1px solid rgba(90,78,55,0.1)" }}
                  >
                    <p className="font-['Google_Sans:Regular',sans-serif] text-[13px] text-black opacity-40 tracking-[0.8px] uppercase">
                      Rango año 5
                    </p>
                    <div className="flex items-baseline gap-[12px] mt-[6px]">
                      <span className="font-['Google_Sans:Regular',sans-serif] text-[15px] text-black opacity-40">
                        $ 171.9M
                      </span>
                      <div className="flex-1 h-[2px] bg-[#1d4ed8] opacity-20 relative">
                        <div className="absolute left-1/2 -translate-x-1/2 -top-[3px] size-[8px] rounded-full bg-[#1d4ed8]" />
                      </div>
                      <span className="font-['Google_Sans:Regular',sans-serif] text-[15px] text-black opacity-40">
                        $ 574.5M
                      </span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Right: year cards */}
                <div className="flex-1 pl-[60px] pt-[16px] flex flex-col gap-[12px]">
                  {normal.years.map((yr, idx) => (
                    <motion.div
                      key={yr.label}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.15 + idx * 0.1 }}
                      className="flex items-center gap-[20px] py-[14px]"
                      style={{
                        borderLeft: "2px solid",
                        borderColor:
                          idx === 3 ? "#1d4ed8" : "rgba(29,78,216,0.2)",
                        paddingLeft: "20px",
                      }}
                    >
                      <p className="font-['Google_Sans:Medium',sans-serif] text-[16px] text-black opacity-60 w-[52px]">
                        {yr.label}
                      </p>
                      <div>
                        <p
                          className="font-['Google_Sans:SemiBold',sans-serif] leading-[36px] text-[30px]"
                          style={{
                            color: idx === 3 ? "#1d4ed8" : "#0b1422",
                          }}
                        >
                          {yr.revenue}
                        </p>
                        <p className="font-['Google_Sans:Regular',sans-serif] text-[14px] text-black opacity-40 mt-[2px]">
                          {yr.projects} proyectos
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
