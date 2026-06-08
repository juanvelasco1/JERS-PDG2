import svgPaths from "../../imports/svg-iddc7l101j";

interface LogoProps {
  size?: "small" | "large";
}

export default function Logo({ size = "small" }: LogoProps) {
  const scale = size === "small" ? 0.70 : 1;
  const width = 23 * scale;
  const height = 46 * scale;

  return (
    <div
      className="relative"
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      {/* First shape */}
      <div
        className="absolute"
        style={{
          height: `${19.059 * scale}px`,
          left: 0,
          top: `${11.61 * scale}px`,
          width: `${14.938 * scale}px`,
        }}
      >
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9378 19.0585">
          <path d={svgPaths.p28166200} fill="#2563EB" />
        </svg>
      </div>

      {/* Second shape */}
      <div
        className="absolute"
        style={{
          height: `${30.391 * scale}px`,
          left: `${0.52 * scale}px`,
          top: `${8 * scale}px`,
          width: `${22.149 * scale}px`,
        }}
      >
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.1491 30.3906">
          <path d={svgPaths.p2bdc8800} fill="#2563EB" />
        </svg>
      </div>
    </div>
  );
}
