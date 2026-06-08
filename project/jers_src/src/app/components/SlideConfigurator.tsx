import { useState, useRef, useEffect } from "react";
import { X, GripVertical, Eye, EyeOff } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SlideConfig {
  index: number;
  title: string;
  visible: boolean;
}

interface SlideConfiguratorProps {
  isOpen: boolean;
  onClose: () => void;
  slides: SlideConfig[];
  onReorder: (newOrder: SlideConfig[]) => void;
}

export default function SlideConfigurator({
  isOpen,
  onClose,
  slides,
  onReorder,
}: SlideConfiguratorProps) {
  const [localSlides, setLocalSlides] = useState<SlideConfig[]>(slides);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const dragItemRef = useRef<number | null>(null);
  const dragOverItemRef = useRef<number | null>(null);

  useEffect(() => {
    setLocalSlides(slides);
  }, [slides]);

  const handleDragStart = (index: number) => {
    dragItemRef.current = index;
    setDraggedIndex(index);
  };

  const handleDragEnter = (index: number) => {
    dragOverItemRef.current = index;
  };

  const handleDragEnd = () => {
    if (dragItemRef.current !== null && dragOverItemRef.current !== null) {
      const newSlides = [...localSlides];
      const draggedItem = newSlides[dragItemRef.current];
      newSlides.splice(dragItemRef.current, 1);
      newSlides.splice(dragOverItemRef.current, 0, draggedItem);
      setLocalSlides(newSlides);
      onReorder(newSlides);
    }
    dragItemRef.current = null;
    dragOverItemRef.current = null;
    setDraggedIndex(null);
  };

  const toggleVisibility = (index: number) => {
    const newSlides = localSlides.map((slide, i) =>
      i === index ? { ...slide, visible: !slide.visible } : slide
    );
    setLocalSlides(newSlides);
    onReorder(newSlides);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{ backgroundColor: "rgba(11, 20, 34, 0.6)" }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative bg-[#fcfaf5] rounded-lg shadow-xl w-[600px] max-h-[80vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-[32px] py-[24px] border-b border-[rgba(90,78,55,0.1)]">
            <h3 className="font-['Google_Sans:Bold',sans-serif] text-[24px] text-[#0b1422]">
              Configurar presentación
            </h3>
            <button
              onClick={onClose}
              className="p-[8px] hover:bg-[rgba(29,78,216,0.1)] rounded-lg transition-colors"
              aria-label="Cerrar"
            >
              <X size={24} color="#0b1422" />
            </button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[calc(80vh-88px)] px-[32px] py-[24px]">
            <p className="font-['Google_Sans:Regular',sans-serif] text-[16px] text-black opacity-55 mb-[16px]">
              Arrastra para reordenar, haz clic en el ojo para mostrar/ocultar diapositivas
            </p>
            <div className="space-y-[8px]">
              {localSlides.map((slide, index) => (
                <div
                  key={`${slide.index}-${index}`}
                  draggable
                  onDragStart={() => handleDragStart(index)}
                  onDragEnter={() => handleDragEnter(index)}
                  onDragEnd={handleDragEnd}
                  onDragOver={(e) => e.preventDefault()}
                  className={`flex items-center gap-[12px] p-[16px] bg-white rounded-lg border border-[rgba(90,78,55,0.1)] cursor-move transition-all ${
                    draggedIndex === index ? "opacity-50" : "opacity-100"
                  } hover:border-[#1d4ed8] hover:shadow-sm`}
                >
                  <GripVertical size={20} color="#0b1422" opacity={0.4} />
                  <div className="flex-1">
                    <p className="font-['Google_Sans:Medium',sans-serif] text-[18px] text-[#0b1422]">
                      {slide.title}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleVisibility(index)}
                    className="p-[8px] hover:bg-[rgba(29,78,216,0.1)] rounded-lg transition-colors"
                    aria-label={slide.visible ? "Ocultar" : "Mostrar"}
                  >
                    {slide.visible ? (
                      <Eye size={20} color="#1d4ed8" />
                    ) : (
                      <EyeOff size={20} color="#0b1422" opacity={0.3} />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
