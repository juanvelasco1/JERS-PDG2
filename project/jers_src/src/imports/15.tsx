function Heading() {
  return (
    <div className="absolute h-[140.781px] left-0 top-[136.83px] w-[1138.219px]" data-name="Heading 1">
      <p className="absolute font-['Google_Sans:Bold',sans-serif] leading-[0] left-0 not-italic text-[#0b1422] text-[0px] top-0 w-[768px]">
        <span className="leading-[70.4px] text-[96px] text-[rgba(11,20,34,0.5)]">“</span>
        <span className="leading-[70.4px] text-[64px]">Construimos sistemas digitales eficientes.”</span>
      </p>
    </div>
  );
}

function Container2() {
  return <div className="absolute bg-[#1d4ed8] h-[2px] left-0 top-[288.44px] w-[44.797px]" data-name="Container" />;
}

function Paragraph() {
  return (
    <div className="absolute h-[33.266px] left-0 opacity-50 top-[309.63px] w-[1138.219px]" data-name="Paragraph">
      <p className="absolute font-['Google_Sans:Medium',sans-serif] leading-[33.28px] left-0 not-italic text-[#0b1422] text-[20.8px] top-0 whitespace-nowrap">Diseño rapido, impacto real</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1138.219px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading />
        <Container2 />
        <Paragraph />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[56.313px] left-0 top-0 w-[184.328px]" data-name="Text">
      <p className="absolute font-['Google_Sans:SemiBold',sans-serif] leading-[56.32px] left-0 not-italic text-[#0b1422] text-[45px] top-px whitespace-nowrap">Rápido</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[18.375px] items-start left-0 opacity-50 top-[60.78px] w-[184.328px]" data-name="Text">
      <p className="font-['Google_Sans:Regular',sans-serif] leading-[18.368px] not-italic relative shrink-0 text-[20px] text-black w-[185px]">menos tiempo de entrega</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[88.344px] left-0 top-[23.39px] w-[184.328px]" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Container4() {
  return <div className="absolute bg-[#1d4ed8] h-[2px] left-[-0.39px] opacity-50 top-[125.83px] w-[32px]" data-name="Container" />;
}

function Text2() {
  return (
    <div className="absolute h-[56.313px] left-0 top-0 w-[153.609px]" data-name="Text">
      <p className="absolute font-['Google_Sans:SemiBold',sans-serif] leading-[56.32px] left-0 not-italic text-[#0b1422] text-[45px] top-px whitespace-nowrap">Claro</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[18.375px] items-start left-0 opacity-50 top-[60.78px] w-[153.609px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Google_Sans:Regular',sans-serif] leading-[18.368px] min-h-px min-w-px not-italic relative text-[20px] text-black">sin ambigüedad</p>
    </div>
  );
}

function Container6() {
  return <div className="absolute bg-[#0b1422] h-[2px] left-[-2.89px] top-[101.44px] w-[32px]" data-name="Container" />;
}

function Container5() {
  return (
    <div className="absolute h-[88.344px] left-[252.61px] top-[23.39px] w-[153.609px]" data-name="Container">
      <Text2 />
      <Text3 />
      <Container6 />
    </div>
  );
}

function Container7() {
  return <div className="absolute h-[88.344px] left-[727.11px] top-[23.39px] w-[276.484px]" data-name="Container" />;
}

function Text4() {
  return (
    <div className="absolute h-[56.313px] left-[477.5px] top-[23.39px] w-[276.484px]" data-name="Text">
      <p className="absolute font-['Google_Sans:SemiBold',sans-serif] leading-[56.32px] left-0 not-italic text-[#1d4ed8] text-[45px] top-px whitespace-nowrap">Escalable</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute content-stretch flex h-[18.375px] items-start left-[477.5px] opacity-50 top-[84.17px] w-[276.484px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Google_Sans:Regular',sans-serif] leading-[18.368px] min-h-px min-w-px not-italic relative text-[20px] text-black">crece con el negocio</p>
    </div>
  );
}

function Container8() {
  return <div className="absolute bg-[#d4a017] h-[2px] left-[474.61px] opacity-50 top-[124.83px] w-[32px]" data-name="Container" />;
}

function H() {
  return (
    <div className="h-[127px] relative shrink-0 w-[1139px]" data-name="h">
      <div aria-hidden="true" className="absolute border-[rgba(90,78,55,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container3 />
        <Container4 />
        <Container5 />
        <Container7 />
        <Text4 />
        <Text5 />
        <Container8 />
      </div>
    </div>
  );
}

function F() {
  return (
    <div className="h-[726.953px] relative shrink-0 w-full" data-name="f">
      <div className="content-stretch flex flex-col items-start pb-[54.188px] pl-[108.391px] pt-[81.297px] relative size-full">
        <Container1 />
        <H />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute h-[16.797px] left-[1267.17px] opacity-40 top-[9.22px] w-[33.641px]" data-name="Text">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16.8px] left-0 not-italic text-[#0b1422] text-[11.2px] top-0 whitespace-nowrap">14/14</p>
    </div>
  );
}

function Container11() {
  return <div className="bg-[#1d4ed8] h-[2px] rounded-[1px] shrink-0 w-full" data-name="Container" />;
}

function Container10() {
  return (
    <div className="absolute bg-[rgba(90,78,55,0.1)] content-stretch flex flex-col h-[2px] items-start left-[54.19px] rounded-[1px] top-[16.61px] w-[1196.984px]" data-name="Container">
      <Container11 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[35.234px] relative shrink-0 w-full" data-name="Container">
      <Text6 />
      <Container10 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[#fcfaf5] content-stretch flex flex-col h-[762.188px] items-start left-0 top-[59.41px] w-[1355px]" data-name="Container">
      <F />
      <Container9 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fcfaf5] relative size-full" data-name="15">
      <Container />
    </div>
  );
}