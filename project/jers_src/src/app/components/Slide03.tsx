import Logo from "./Logo";

export default function Slide03() {
  const testimonials = [
    {
      quote: "La plataforma agiliza la gestión del Brief, eliminando reuniones innecesarias para un inicio de proyecto directo. Valoramos la simplicidad y el respaldo humano opcional.",
      author: "Socio",
      company: "Kilele Colombian Joy",
      status: "Cliente activo",
      statusColor: "#059669",
      tags: [
        { label: "Agilidad", type: "pro" },
        { label: "Simplificación", type: "pro" },
      ],
    },
    {
      quote: "La experiencia con IA es intuitiva y moderna. Recomendamos profundizar en el contexto del negocio para ofrecer asesorías más personalizadas.",
      author: "Fundador",
      company: "CertiOrange",
      status: "En análisis",
      statusColor: "#d4a017",
      tags: [
        { label: "Abordar clientes y modelo de negocio", type: "suggestion" },
      ],
    },
    {
      quote: "El proceso de cotización es cómodo y evita la fatiga de escritura. La IA debe evolucionar para aportar hallazgos nuevos en lugar de repetir datos.",
      author: "Socio",
      company: "La Tienda de Maquillaje",
      status: "Por concretar",
      statusColor: "#d4a017",
      tags: [
        { label: "Eliminación de fricción manual", type: "positive" },
        { label: "Mayor razonamiento de la IA", type: "improvement" },
      ],
    },
  ];

  return (
    <div className="bg-[#fcfaf5] relative size-full px-[108px] pt-[81.3px]">
      {/* Logo */}
      <div className="absolute right-[24px] top-[24px] opacity-30">
        <Logo size="small" />
      </div>

      {/* Header */}
      <div className="relative">
        <p className="font-['Google_Sans:Medium',sans-serif] leading-[19.2px] opacity-85 text-[#1d4ed8] text-[16px] tracking-[1.28px] uppercase whitespace-nowrap">
          03 / Validación
        </p>
        <h2 className="font-['Google_Sans:Bold',sans-serif] leading-[42.24px] mt-[25.58px] text-[#0b1422] text-[38.4px] whitespace-nowrap">
          Testimonios
        </h2>
        <div className="bg-[#1d4ed8] h-[2px] mt-[5px] w-[44.797px]" />
      </div>

      {/* Testimonials - 3 columns */}
      <div className="mt-[48px] flex gap-[32px]">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex-1">
            {/* Status badge */}
            <div className="mb-[16px]">
              <span
                className="font-['Google_Sans:Medium',sans-serif] px-[12px] py-[6px] rounded-full text-[13px] inline-block"
                style={{
                  backgroundColor: `${testimonial.statusColor}15`,
                  color: testimonial.statusColor,
                }}
              >
                {testimonial.status}
              </span>
            </div>

            {/* Company name - highlighted */}
            <h3 className="font-['Google_Sans:Bold',sans-serif] leading-[28px] text-[22px] text-[#1d4ed8] mb-[12px]">
              {testimonial.company}
            </h3>

            {/* Quote */}
            <p className="font-['Google_Sans:Regular',sans-serif] leading-[26px] text-[20px] text-[#0b1422] opacity-75 italic mb-[16px]">
              "{testimonial.quote}"
            </p>

            {/* Author */}
            <p className="font-['Google_Sans:Medium',sans-serif] leading-[22px] text-[14px] text-[#0b1422] opacity-60 mb-[12px]">
              — {testimonial.author}
            </p>

            {/* Tags */}
            <div className="flex flex-col gap-[6px]">
              {testimonial.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="font-['Google_Sans:Regular',sans-serif] text-[13px] text-[#0b1422] opacity-60"
                >
                  {tag.type === "pro" && "✓ "}
                  {tag.type === "suggestion" && "→ "}
                  {tag.type === "positive" && "✓ "}
                  {tag.type === "improvement" && "→ "}
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
