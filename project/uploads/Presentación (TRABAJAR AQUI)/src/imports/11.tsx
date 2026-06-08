function Text() {
  return (
    <div className="absolute h-[19.188px] left-0 opacity-85 top-0 w-[1138.219px]" data-name="Text">
      <p className="absolute font-['Google_Sans:Medium',sans-serif] leading-[19.2px] left-0 not-italic text-[#1d4ed8] text-[16px] top-0 tracking-[1.28px] uppercase whitespace-nowrap">10 / Modelo de negocio</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[42.234px] left-0 top-[25.58px] w-[1138.219px]" data-name="Heading 2">
      <p className="absolute font-['Google_Sans:Bold',sans-serif] leading-[42.24px] left-0 not-italic text-[#0b1422] text-[38.4px] top-[-1px] whitespace-nowrap">Fuentes de ingreso</p>
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-[#1d4ed8] h-[2px] left-0 top-[77.3px] w-[44.797px]" data-name="Container" />;
}

function M() {
  return (
    <div className="h-[79.297px] relative shrink-0 w-full" data-name="m">
      <Text />
      <Heading />
      <Container1 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[57.094px] opacity-55 relative shrink-0 w-[604.438px]" data-name="Paragraph">
      <p className="absolute font-['Google_Sans:Regular',sans-serif] leading-[28.56px] left-0 not-italic text-[20px] text-black top-[-1px] w-[605px]">Tres líneas de ingreso complementarias y escalables desde el primer mes.</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[108.39px] top-[81.3px] w-[1138.219px]">
      <M />
      <Paragraph />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[56.313px] left-0 top-0 w-[276.484px]" data-name="Text">
      <p className="absolute font-['Google_Sans:SemiBold',sans-serif] leading-[56.32px] left-0 not-italic text-[#1d4ed8] text-[45px] top-px whitespace-nowrap">Proyectos</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[18.375px] items-start left-0 opacity-50 top-[60.78px] w-[276.484px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Google_Sans:Regular',sans-serif] leading-[18.368px] min-h-px min-w-px not-italic relative text-[20px] text-black">web a medida</p>
    </div>
  );
}

function Container3() {
  return <div className="absolute bg-[#1d4ed8] h-[2px] left-0 top-[86.34px] w-[32px]" data-name="Container" />;
}

function Container2() {
  return (
    <div className="absolute h-[88.344px] left-0 top-[22.39px] w-[276.484px]" data-name="Container">
      <Text1 />
      <Text2 />
      <Container3 />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[56.313px] left-0 top-0 w-[245.766px]" data-name="Text">
      <p className="absolute font-['Google_Sans:SemiBold',sans-serif] leading-[56.32px] left-0 not-italic text-[#0b1422] text-[45px] top-px whitespace-nowrap">Retainer</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute content-stretch flex h-[18.375px] items-start left-0 opacity-50 top-[60.78px] w-[245.766px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Google_Sans:Regular',sans-serif] leading-[18.368px] min-h-px min-w-px not-italic relative text-[20px] text-black">mantenimiento mensual</p>
    </div>
  );
}

function Container5() {
  return <div className="absolute bg-[#0b1422] h-[2px] left-0 top-[86.34px] w-[32px]" data-name="Container" />;
}

function Container4() {
  return (
    <div className="absolute h-[88.344px] left-[344.77px] top-[22.39px] w-[245.766px]" data-name="Container">
      <Text3 />
      <Text4 />
      <Container5 />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[56.313px] left-0 top-0 w-[184.328px]" data-name="Text">
      <p className="absolute font-['Google_Sans:SemiBold',sans-serif] leading-[56.32px] left-0 not-italic text-[#0b1422] text-[45px] top-px whitespace-nowrap">Escala</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex h-[18.375px] items-start left-0 opacity-50 top-[60.78px] w-[184.328px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Google_Sans:Regular',sans-serif] leading-[18.368px] min-h-px min-w-px not-italic relative text-[20px] text-black">sistema replicable</p>
    </div>
  );
}

function Container7() {
  return <div className="absolute bg-[#1d4ed8] h-[2px] left-0 opacity-50 top-[86.34px] w-[32px]" data-name="Container" />;
}

function Container6() {
  return (
    <div className="absolute h-[88.344px] left-[658.81px] top-[22.39px] w-[184.328px]" data-name="Container">
      <Text5 />
      <Text6 />
      <Container7 />
    </div>
  );
}

function H() {
  return (
    <div className="absolute border-[rgba(90,78,55,0.1)] border-solid border-t h-[111.734px] left-[108.39px] top-[443.03px] w-[1138.219px]" data-name="h">
      <Container2 />
      <Container4 />
      <Container6 />
    </div>
  );
}

function V() {
  return (
    <div className="h-[726.953px] relative shrink-0 w-full" data-name="v">
      <Frame />
      <H />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute h-[16.797px] left-[1267.17px] opacity-40 top-[9.22px] w-[33.641px]" data-name="Text">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16.8px] left-0 not-italic text-[#0b1422] text-[11.2px] top-0 whitespace-nowrap">10/14</p>
    </div>
  );
}

function Container10() {
  return <div className="bg-[#1d4ed8] h-[2px] rounded-[1px] shrink-0 w-full" data-name="Container" />;
}

function Container9() {
  return (
    <div className="absolute bg-[rgba(90,78,55,0.1)] content-stretch flex flex-col h-[2px] items-start left-[54.19px] pr-[342px] rounded-[1px] top-[16.61px] w-[1196.984px]" data-name="Container">
      <Container10 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[35.234px] relative shrink-0 w-full" data-name="Container">
      <Text7 />
      <Container9 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[#fcfaf5] content-stretch flex flex-col h-[762.188px] items-start left-0 top-[59.41px] w-[1355px]" data-name="Container">
      <V />
      <Container8 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fcfaf5] relative size-full" data-name="11">
      <Container />
    </div>
  );
}