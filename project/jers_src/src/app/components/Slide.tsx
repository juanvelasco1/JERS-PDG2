import React from "react";

export interface BulletItem {
  text?: string;
  stat?: string;
  sub?: string;
  accent?: boolean;
}

export interface SlideContent {
  label?: string;
  headline: string;
  description?: string;
  bullets: BulletItem[];
  isTitle?: boolean;
  type?: "default" | "graph" | "team";
  graphData?: GraphData;
  teamData?: TeamData;
}

interface GraphData {
  xLabel: string;
  yLabel: string;
  points: { name: string; x: number; y: number; highlight?: boolean }[];
}

interface TeamData {
  members: { name: string; role: string }[];
}

interface SlideProps {
  slide: SlideContent;
}

/* ── Shared header: label on top, headline below ── */
function SlideHeader({
  label,
  headline,
}: {
  label?: string;
  headline: string;
}) {
  return (
    <div className="shrink-0">
      {label && (
        <span
          style={{
            fontSize: "clamp(0.55rem, 1vw, 0.8rem)",
            color: "#1d4ed8",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            opacity: 0.85,
            display: "block",
            marginBottom: "clamp(0.2rem, 0.5vw, 0.4rem)",
          }}
        >
          {label}
        </span>
      )}
      <h2
        style={{
          fontSize: "clamp(1.3rem, 3vw, 2.4rem)",
          lineHeight: 1.1,
          color: "#0b1422",
          fontWeight: 600,
        }}
      >
        {headline}
      </h2>
      {/* Blue accent underline */}
      <div
        style={{
          width: "clamp(1.6rem, 3.5vw, 2.8rem)",
          height: "2px",
          backgroundColor: "#1d4ed8",
          marginTop: "clamp(0.35rem, 0.7vw, 0.6rem)",
        }}
      />
    </div>
  );
}

/* ── Accent colors for stat underlines ── */
const accentColors = ["#1d4ed8", "#d4a017", "#1d4ed8", "#d4a017"];

/* ── Shared stat/keyword row ── */
function BulletsRow({ bullets }: { bullets: BulletItem[] }) {
  const hasStats = bullets.some((b) => b.stat);
  return (
    <div
      className="flex gap-[6%] flex-wrap"
      style={{
        borderTop: "1px solid #5a4e371a",
        paddingTop: "clamp(0.8rem, 1.8vw, 1.4rem)",
      }}
    >
      {bullets.map((b, i) => {
        const bigWord = b.stat ?? b.text ?? "";
        const isAccent = b.accent ?? false;
        const lineColor = isAccent
          ? "#1d4ed8"
          : accentColors[i % accentColors.length];

        return (
          <div key={i} className="flex flex-col">
            <span
              style={{
                fontSize: hasStats
                  ? "clamp(1.8rem, 4vw, 3.2rem)"
                  : "clamp(1.05rem, 2.3vw, 1.85rem)",
                fontWeight: 700,
                color: isAccent ? "#1d4ed8" : "#0b1422",
                lineHeight: 1.1,
              }}
            >
              {bigWord}
            </span>
            {b.sub && (
              <span
                style={{
                  fontSize: "clamp(0.55rem, 1.05vw, 0.82rem)",
                  color: "#0b1422",
                  opacity: 0.5,
                  marginTop: "clamp(0.15rem, 0.35vw, 0.28rem)",
                  lineHeight: 1.4,
                }}
              >
                {b.sub}
              </span>
            )}
            <div
              style={{
                width: "clamp(1.2rem, 2.5vw, 2rem)",
                height: "2px",
                backgroundColor: lineColor,
                marginTop: "clamp(0.3rem, 0.55vw, 0.45rem)",
                opacity: isAccent ? 1 : 0.5,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

/* ── Title slide ── */
function TitleSlide({ slide }: SlideProps) {
  return (
    <div className="flex flex-col h-full px-[8%] pt-[6%] pb-[4%]">
      {/* Headline centered */}
      <div className="flex-1 flex flex-col justify-center">
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            lineHeight: 1.1,
            color: "#0b1422",
            fontWeight: 600,
          }}
        >
          {slide.headline}
        </h1>
        <div
          style={{
            width: "clamp(1.6rem, 3.5vw, 2.8rem)",
            height: "2px",
            backgroundColor: "#1d4ed8",
            marginTop: "clamp(0.4rem, 0.8vw, 0.7rem)",
            marginBottom: "clamp(0.7rem, 1.5vw, 1.2rem)",
          }}
        />
        <p
          style={{
            fontSize: "clamp(0.85rem, 1.8vw, 1.3rem)",
            color: "#0b1422",
            opacity: 0.5,
            lineHeight: 1.6,
          }}
        >
          Diseño rapido, impacto real
        </p>
      </div>

      {/* Bullets at bottom (for closing slide) */}
      {slide.bullets.length > 0 && <BulletsRow bullets={slide.bullets} />}
    </div>
  );
}

/* ── Default slide ── */
function DefaultSlide({ slide }: SlideProps) {
  return (
    <div className="flex flex-col h-full px-[8%] pt-[6%] pb-[4%]">
      {/* Header + description grouped at top */}
      <SlideHeader label={slide.label} headline={slide.headline} />
      {slide.description && (
        <p
          style={{
            fontSize: "clamp(0.7rem, 1.4vw, 1.05rem)",
            color: "#0b1422",
            opacity: 0.55,
            lineHeight: 1.7,
            marginTop: "clamp(0.6rem, 1.2vw, 1rem)",
            maxWidth: "60ch",
          }}
        >
          {slide.description}
        </p>
      )}

      {/* Flexible gap — shrinks so stats sit close to description */}
      <div style={{ flex: "1 1 0", minHeight: "clamp(1rem, 3vh, 2rem)" }} />

      {/* Stats / keywords anchored at bottom */}
      {slide.bullets.length > 0 && <BulletsRow bullets={slide.bullets} />}
    </div>
  );
}

/* ── Graph slide ── */
function GraphSlide({ slide }: SlideProps) {
  const graph = slide.graphData!;

  return (
    <div className="flex flex-col h-full px-[8%] pt-[6%] pb-[4%]">
      <SlideHeader label={slide.label} headline={slide.headline} />

      {slide.description && (
        <p
          style={{
            fontSize: "clamp(0.7rem, 1.4vw, 1.05rem)",
            color: "#0b1422",
            opacity: 0.55,
            lineHeight: 1.7,
            marginTop: "clamp(0.6rem, 1.2vw, 1rem)",
          }}
        >
          {slide.description}
        </p>
      )}

      <div
        className="relative flex-1"
        style={{
          marginTop: "clamp(0.8rem, 2vw, 1.6rem)",
          minHeight: "clamp(8rem, 28vh, 18rem)",
        }}
      >
        {/* Y axis */}
        <div
          className="absolute left-0 top-0"
          style={{
            bottom: "2rem",
            width: "1px",
            backgroundColor: "#5a4e3733",
          }}
        />
        {/* X axis */}
        <div
          className="absolute left-0 right-0"
          style={{
            bottom: "2rem",
            height: "1px",
            backgroundColor: "#5a4e3733",
          }}
        />
        {/* Y label */}
        <span
          className="absolute"
          style={{
            left: "0",
            top: "calc(50% - 1rem)",
            transform: "rotate(-90deg) translateX(-50%)",
            transformOrigin: "left center",
            fontSize: "clamp(0.5rem, 0.9vw, 0.7rem)",
            color: "#0b1422",
            opacity: 0.4,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          {graph.yLabel}
        </span>
        {/* X label */}
        <span
          className="absolute"
          style={{
            bottom: "0.3rem",
            right: "0",
            fontSize: "clamp(0.5rem, 0.9vw, 0.7rem)",
            color: "#0b1422",
            opacity: 0.4,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          {graph.xLabel}
        </span>
        {/* Data points */}
        {graph.points.map((pt, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${pt.x}%`,
              bottom: `calc(2rem + (100% - 2rem) * ${pt.y / 100})`,
              transform: "translate(-50%, 0)",
            }}
          >
            <div
              style={{
                width: "clamp(6px, 0.6vw, 9px)",
                height: "clamp(6px, 0.6vw, 9px)",
                borderRadius: "50%",
                backgroundColor: pt.highlight ? "#1d4ed8" : "#0b142266",
                marginBottom: "clamp(3px, 0.4vw, 5px)",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <span
              style={{
                fontSize: "clamp(0.55rem, 1vw, 0.8rem)",
                color: pt.highlight ? "#1d4ed8" : "#0b1422",
                opacity: pt.highlight ? 1 : 0.6,
                fontWeight: pt.highlight ? 600 : 400,
                whiteSpace: "nowrap",
                display: "block",
                textAlign: "center",
              }}
            >
              {pt.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Team slide ── */
function TeamSlide({ slide }: SlideProps) {
  const team = slide.teamData!;

  return (
    <div className="flex flex-col h-full px-[8%] pt-[6%] pb-[4%]">
      {/* Header + description at top */}
      <SlideHeader label={slide.label} headline={slide.headline} />
      {slide.description && (
        <p
          style={{
            fontSize: "clamp(0.7rem, 1.4vw, 1.05rem)",
            color: "#0b1422",
            opacity: 0.55,
            lineHeight: 1.7,
            marginTop: "clamp(0.6rem, 1.2vw, 1rem)",
            maxWidth: "60ch",
          }}
        >
          {slide.description}
        </p>
      )}

      <div style={{ flex: "1 1 0", minHeight: "clamp(1rem, 3vh, 2rem)" }} />

      {/* Team members anchored at bottom */}
      <div
        className="grid grid-cols-2 gap-[6%]"
        style={{
          borderTop: "1px solid #5a4e371a",
          paddingTop: "clamp(0.8rem, 2vw, 1.5rem)",
        }}
      >
        {team.members.map((m, i) => (
          <div key={i} className="flex items-start gap-[8%]">
            <div
              className="shrink-0"
              style={{
                width: "clamp(2.5rem, 5vw, 4.5rem)",
                height: "clamp(2.5rem, 5vw, 4.5rem)",
                borderRadius: "50%",
                border: "1px solid #5a4e372e",
              }}
            />
            <div>
              <p
                style={{
                  fontSize: "clamp(0.85rem, 1.8vw, 1.3rem)",
                  color: "#0b1422",
                  fontWeight: 600,
                  lineHeight: 1.3,
                  marginBottom: "clamp(0.15rem, 0.4vw, 0.3rem)",
                }}
              >
                {m.name}
              </p>
              <p
                style={{
                  fontSize: "clamp(0.65rem, 1.2vw, 0.9rem)",
                  color: "#0b1422",
                  opacity: 0.55,
                  lineHeight: 1.5,
                }}
              >
                {m.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Slide({ slide }: SlideProps) {
  if (slide.type === "graph" && slide.graphData) return <GraphSlide slide={slide} />;
  if (slide.type === "team" && slide.teamData) return <TeamSlide slide={slide} />;
  if (slide.isTitle) return <TitleSlide slide={slide} />;
  return <DefaultSlide slide={slide} />;
}