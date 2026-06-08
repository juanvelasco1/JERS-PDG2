function Text() {
  return (
    <div className="absolute h-[19.188px] left-0 opacity-85 top-0 w-[1138.219px]" data-name="Text">
      <p className="absolute font-['Google_Sans:Medium',sans-serif] leading-[19.2px] left-0 not-italic text-[#1d4ed8] text-[16px] top-0 tracking-[1.28px] uppercase whitespace-nowrap">08 / Validación</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[42.234px] left-0 top-[25.58px] w-[1138.219px]" data-name="Heading 2">
      <p className="absolute font-['Google_Sans:Bold',sans-serif] leading-[42.24px] left-0 not-italic text-[#0b1422] text-[38.4px] top-[-1px] whitespace-nowrap">Qué validamos</p>
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
    <div className="h-[28.547px] opacity-55 relative shrink-0 w-[604.438px]" data-name="Paragraph">
      <p className="absolute font-['Google_Sans:Regular',sans-serif] leading-[28.56px] left-0 not-italic text-[20px] text-black top-[-1px] whitespace-nowrap">Métricas que demuestran valor antes de escalar.</p>
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

function Container2() {
  return <div className="absolute h-[355.891px] left-[108.39px] top-[146.14px] w-[1138.219px]" data-name="Container" />;
}

function Text1() {
  return (
    <div className="absolute h-[56.313px] left-0 top-0 w-[184.328px]" data-name="Text">
      <p className="absolute font-['Google_Sans:SemiBold',sans-serif] leading-[56.32px] left-0 not-italic text-[#1d4ed8] text-[45px] top-px whitespace-nowrap">Tiempo</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[18.375px] items-start left-0 opacity-50 top-[60.78px] w-[184.328px]" data-name="Text">
      <p className="font-['Google_Sans:Regular',sans-serif] leading-[18.368px] not-italic relative shrink-0 text-[20px] text-black w-[202px]">reducción de entrega</p>
    </div>
  );
}

function Container4() {
  return <div className="absolute bg-[#1d4ed8] h-[2px] left-0 top-[86.34px] w-[32px]" data-name="Container" />;
}

function Container3() {
  return (
    <div className="absolute h-[88.344px] left-0 top-[22.39px] w-[184.328px]" data-name="Container">
      <Text1 />
      <Text2 />
      <Container4 />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[56.313px] left-0 top-0 w-[245.766px]" data-name="Text">
      <p className="absolute font-['Google_Sans:SemiBold',sans-serif] leading-[56.32px] left-0 not-italic text-[#0b1422] text-[45px] top-px whitespace-nowrap">Claridad</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute content-stretch flex h-[18.375px] items-start left-0 opacity-50 top-[60.78px] w-[245.766px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Google_Sans:Regular',sans-serif] leading-[18.368px] min-h-px min-w-px not-italic relative text-[20px] text-black">propuesta sin ambigüedad</p>
    </div>
  );
}

function Container6() {
  return <div className="absolute bg-[#0b1422] h-[2px] left-0 top-[86.34px] w-[32px]" data-name="Container" />;
}

function Container5() {
  return (
    <div className="absolute h-[88.344px] left-[252.61px] top-[22.39px] w-[245.766px]" data-name="Container">
      <Text3 />
      <Text4 />
      <Container6 />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[56.313px] left-0 top-0 w-[215.047px]" data-name="Text">
      <p className="absolute font-['Google_Sans:SemiBold',sans-serif] leading-[56.32px] left-0 not-italic text-[#0b1422] text-[45px] top-px whitespace-nowrap">Interés</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex h-[18.375px] items-start left-0 opacity-50 top-[60.78px] w-[215.047px]" data-name="Text">
      <p className="font-['Google_Sans:Regular',sans-serif] leading-[18.368px] not-italic relative shrink-0 text-[20px] text-black w-[235px]">disposición real a pagar</p>
    </div>
  );
}

function Container8() {
  return <div className="absolute bg-[#1d4ed8] h-[2px] left-0 opacity-50 top-[86.34px] w-[32px]" data-name="Container" />;
}

function Container7() {
  return (
    <div className="absolute h-[88.344px] left-[566.66px] top-[22.39px] w-[215.047px]" data-name="Container">
      <Text5 />
      <Text6 />
      <Container8 />
    </div>
  );
}

function H() {
  return (
    <div className="absolute border-[rgba(90,78,55,0.1)] border-solid border-t h-[111.734px] left-[108.39px] top-[443.03px] w-[1138.219px]" data-name="h">
      <Container3 />
      <Container5 />
      <Container7 />
    </div>
  );
}

function V() {
  return (
    <div className="bg-[#fcfaf5] h-[726.953px] relative shrink-0 w-full" data-name="v">
      <Frame />
      <Container2 />
      <H />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute h-[16.797px] left-[1267.17px] opacity-40 top-[9.22px] w-[33.641px]" data-name="Text">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16.8px] left-0 not-italic text-[#0b1422] text-[11.2px] top-0 whitespace-nowrap">09/14</p>
    </div>
  );
}

function Container11() {
  return <div className="bg-[#1d4ed8] h-[2px] rounded-[1px] shrink-0 w-full" data-name="Container" />;
}

function Container10() {
  return (
    <div className="absolute bg-[rgba(90,78,55,0.1)] content-stretch flex flex-col h-[2px] items-start left-[54.19px] pr-[427.5px] rounded-[1px] top-[16.61px] w-[1196.984px]" data-name="Container">
      <Container11 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[35.234px] relative shrink-0 w-full" data-name="Container">
      <Text7 />
      <Container10 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[#fcfaf5] content-stretch flex flex-col h-[762.188px] items-start left-0 top-[59.41px] w-[1355px]" data-name="Container">
      <V />
      <Container9 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fcfaf5] relative size-full" data-name="9">
      <Container />
    </div>
  );
}