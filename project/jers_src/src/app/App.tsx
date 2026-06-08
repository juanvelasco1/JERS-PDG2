import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Slide00 from "./components/Slide00";
import Slide01 from "./components/Slide01";
import Slide02 from "./components/Slide02";
import Slide03 from "./components/Slide03";
import Slide04 from "./components/Slide04";
import Slide05 from "./components/Slide05";
import Slide06 from "./components/Slide06";
import Slide07 from "./components/Slide07";
import Slide08 from "./components/Slide08";
import Slide09 from "./components/Slide09";
import Slide10 from "./components/Slide10";
import Slide11 from "./components/Slide11";
import Slide12 from "./components/Slide12";
import Slide13 from "./components/Slide13";
import Slide14 from "./components/Slide14";
import Slide15 from "./components/Slide15";
import Slide16 from "./components/Slide16";
import Slide17 from "./components/Slide17";
import Slide18 from "./components/Slide18";
import Slide19 from "./components/Slide19";
import SlideConfigurator from "./components/SlideConfigurator";

const allSlides = [
  Slide00, Slide01, Slide02, Slide03, Slide04,
  Slide05, Slide06, Slide07, Slide08, Slide09,
  Slide10, Slide11, Slide12, Slide13, Slide14,
  Slide15, Slide16, Slide17, Slide18, Slide19,
];

const slideTitles = [
  "Portada",                                    // Slide00
  "De la necesidad a la validación",            // Slide01
  "Experimentos de validación",                 // Slide02
  "Testimonios",                                // Slide03
  "Lo que ofrecemos",                           // Slide04
  "Recorrido del cliente",                      // Slide05
  "Landing page en acción",                     // Slide06
  "Canales y ejecución 90 días",                // Slide07
  "Presupuesto y métricas de control",          // Slide08
  "Precio vs Calidad",                          // Slide09
  "Precio vs Velocidad",                        // Slide10
  "MVP: Diagnóstico + Landing",                 // Slide11
  "Plan de ejecución",                          // Slide12
  "Qué validamos",                              // Slide13
  "Indicadores de validación",                  // Slide14
  "Fuentes de ingreso",                         // Slide15
  "Proyección 5 años",                          // Slide16
  "Hacia dónde vamos",                          // Slide17
  "Backlog según Drafts",                       // Slide18
  "Cierre",                                     // Slide19
];

interface SlideConfig {
  index: number;
  title: string;
  visible: boolean;
}

// Design canvas — the fixed pixel size all slides were authored at
const DESIGN_W = 1366;
const DESIGN_H = 768;
const NAV_H = 34;
const CANVAS_H = DESIGN_H + NAV_H; // 802 — total canvas including nav bar

// Sub-step config: how many internal phases each slide has (default = 1)
const SLIDE_SUB_STEPS: Record<number, number> = {
  5: 10,  // Journey Map (Recorrido del cliente): 10 steps
  9: 2,   // Precio vs Calidad: competitors → JERS highlight
  10: 2,  // Precio vs Velocidad: competitors → JERS highlight
  16: 2,  // Proyección: all scenarios → focus Normal
  18: 3,  // Cronograma: draft1 → draft2 → draft3
  19: 2,  // Cierre: quote → features
};

function getMaxSubSteps(slideIndex: number): number {
  return SLIDE_SUB_STEPS[slideIndex] ?? 1;
}

function useContentScale(ref: React.RefObject<HTMLDivElement | null>) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const { width, height } = el.getBoundingClientRect();
      if (width === 0 || height === 0) return;
      setScale(Math.min(width / DESIGN_W, height / CANVAS_H));
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [ref]);

  return scale;
}

export default function App() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [subStep, setSubStep] = useState(0);
  const [isConfigOpen, setIsConfigOpen] = useState(false);

  // Initialize slide configuration from localStorage or default
  const [slideConfig, setSlideConfig] = useState<SlideConfig[]>(() => {
    const stored = localStorage.getItem("slideConfig");
    if (stored) {
      try {
        const parsed: SlideConfig[] = JSON.parse(stored);

        // Validate that parsed config is compatible with current slide count
        if (parsed.length === allSlides.length) {
          // Validate all indices exist and are unique
          const indices = new Set(parsed.map(c => c.index));
          const allIndicesValid = parsed.every(c => c.index >= 0 && c.index < allSlides.length);
          const allIndicesUnique = indices.size === allSlides.length;

          if (allIndicesValid && allIndicesUnique) {
            // Restore exact configuration with current titles
            return parsed.map(config => ({
              index: config.index,
              title: slideTitles[config.index],
              visible: config.visible,
            }));
          }
        }

        console.warn("Stored slideConfig is incompatible, resetting to default");
      } catch (e) {
        console.warn("Failed to parse slideConfig from localStorage:", e);
      }
    }
    // Default: all slides visible in order
    return allSlides.map((_, index) => ({
      index,
      title: slideTitles[index],
      visible: true,
    }));
  });

  // Get visible slides based on configuration
  const slides = slideConfig
    .filter((config) => config.visible)
    .map((config) => allSlides[config.index]);

  const total = Math.max(slides.length, 1);
  const stageRef = useRef<HTMLDivElement>(null);
  const scale = useContentScale(stageRef);

  // Save config to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("slideConfig", JSON.stringify(slideConfig));
  }, [slideConfig]);

  const handleConfigReorder = (newConfig: SlideConfig[]) => {
    setSlideConfig(newConfig);
    // Reset to first slide if current becomes invalid
    const visibleCount = newConfig.filter((c) => c.visible).length;
    if (current >= visibleCount) {
      setCurrent(0);
      setSubStep(0);
    }
  };

  const goNext = useCallback(() => {
    const visibleSlides = slideConfig.filter((c) => c.visible);
    const currentConfig = visibleSlides[current];
    const maxSub = currentConfig ? getMaxSubSteps(currentConfig.index) : 1;

    if (subStep < maxSub - 1) {
      setSubStep((s) => s + 1);
      return;
    }
    setCurrent((c) => {
      if (c >= total - 1) return c;
      setDirection(1);
      setSubStep(0);
      return c + 1;
    });
  }, [total, current, subStep, slideConfig]);

  const goPrev = useCallback(() => {
    if (subStep > 0) {
      setSubStep((s) => s - 1);
      return;
    }
    setCurrent((c) => {
      if (c <= 0) return c;
      setDirection(-1);
      setSubStep(0);
      return c - 1;
    });
  }, [subStep]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  const progress = total > 1 ? (current / (total - 1)) * 100 : 0;
  const CurrentSlide = slides[current] ?? Slide00;

  // Get the original slide index for sub-step lookup
  const visibleConfigs = slideConfig.filter((c) => c.visible);
  const currentSlideConfig = visibleConfigs[current];
  const originalSlideIndex = currentSlideConfig?.index ?? 0;

  const variants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir >= 0 ? 40 : -40,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir >= 0 ? -40 : 40,
    }),
  };

  return (
    <div
      className="w-screen h-screen flex items-center justify-center overflow-hidden"
      tabIndex={0}
      style={{
        backgroundColor: "#fcfaf5",
        fontFamily: "'Google Sans', sans-serif",
        outline: "none",
      }}
    >
      {/* 16:9 stage */}
      <div
        ref={stageRef}
        className="relative"
        style={{
          width: "100vw",
          height: "100vh",
          maxWidth: "calc(100vh * 16 / 9)",
          maxHeight: "calc(100vw * 9 / 16)",
          backgroundColor: "#fcfaf5",
          overflow: "hidden",
        }}
      >
        {/* Single scaled canvas — slides + nav bar scale together */}
        <div
          className="absolute top-1/2 left-1/2"
          style={{
            width: DESIGN_W,
            height: CANVAS_H,
            transform: `translate(-50%, -50%) scale(${scale})`,
            transformOrigin: "center center",
          }}
        >
          {/* Slide area */}
          <div className="absolute inset-0" style={{ bottom: NAV_H, overflow: "hidden" }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0"
              >
                {originalSlideIndex === 0 ? (
                  <CurrentSlide subStep={subStep} onOpenConfig={() => setIsConfigOpen(true)} />
                ) : (
                  <CurrentSlide subStep={subStep} />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom navigation bar — inside canvas, scales proportionally */}
          <div
            className="absolute left-0 right-0 bottom-0 flex items-center px-[55px] py-[0px] m-[0px]"
            style={{
              height: NAV_H,
              paddingLeft: 55,
              paddingRight: 55,
              gap: 12,
            }}
          >
            <div
              className="flex-1 relative"
              style={{
                height: 2,
                backgroundColor: "#5a4e371a",
                borderRadius: 1,
              }}
            >
              <motion.div
                className="absolute top-0 left-0 h-full"
                style={{
                  backgroundColor: "#1d4ed8",
                  borderRadius: 1,
                }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              />
            </div>

            <span
              className="shrink-0"
              style={{
                fontSize: 10,
                color: "#0b1422",
                opacity: 0.4,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {String(current).padStart(2, "0")}/{String(total - 1).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      {/* Slide configurator */}
      <SlideConfigurator
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
        slides={slideConfig}
        onReorder={handleConfigReorder}
      />
    </div>
  );
}