function Text() {
  return (
    <div className="absolute h-[19.188px] left-0 opacity-85 top-0 w-[1138.219px]" data-name="Text">
      <p className="absolute font-['Google_Sans:Medium',sans-serif] leading-[19.2px] left-0 not-italic text-[#1d4ed8] text-[16px] top-0 tracking-[1.28px] uppercase whitespace-nowrap">02 / Oportunidad</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[42.234px] left-0 top-[25.58px] w-[1138.219px]" data-name="Heading 2">
      <p className="absolute font-['Google_Sans:Bold',sans-serif] leading-[42.24px] left-0 not-italic text-[#0b1422] text-[38.4px] top-[-1px] whitespace-nowrap">El mercado necesita las tres cosas</p>
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-[#1d4ed8] h-[2px] left-0 top-[77.3px] w-[44.797px]" data-name="Container" />;
}

function M() {
  return (
    <div className="absolute h-[79.297px] left-[108.39px] top-[81.3px] w-[1138.219px]" data-name="m">
      <Text />
      <Heading />
      <Container1 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[57.094px] left-[108.39px] opacity-55 top-[176.59px] w-[604.438px]" data-name="Paragraph">
      <p className="absolute font-['Google_Sans:Regular',sans-serif] leading-[28.56px] left-0 not-italic text-[20px] text-black top-[-1px] w-[575px]">Las pymes no encuentran una solución que combine calidad, velocidad y precio accesible a la vez.</p>
    </div>
  );
}

function Container2() {
  return <div className="absolute h-[327.344px] left-[108.39px] top-[233.69px] w-[1138.219px]" data-name="Container" />;
}

function Text1() {
  return <div className="absolute h-[56.313px] left-0 top-0 w-[276.484px]" data-name="Text" />;
}

function Text2() {
  return <div className="absolute h-[18.375px] left-0 opacity-50 top-[60.78px] w-[276.484px]" data-name="Text" />;
}

function Container3() {
  return (
    <div className="absolute h-[88.344px] left-0 top-[22.39px] w-[276.484px]" data-name="Container">
      <Text1 />
      <Text2 />
    </div>
  );
}

function Text3() {
  return <div className="absolute h-[56.313px] left-0 top-0 w-[215.047px]" data-name="Text" />;
}

function Text4() {
  return <div className="absolute h-[18.375px] left-0 opacity-50 top-[60.78px] w-[215.047px]" data-name="Text" />;
}

function Container4() {
  return (
    <div className="absolute h-[88.344px] left-[344.77px] top-[22.39px] w-[215.047px]" data-name="Container">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Text5() {
  return <div className="absolute h-[56.313px] left-0 top-0 w-[184.328px]" data-name="Text" />;
}

function Text6() {
  return <div className="absolute h-[18.375px] left-0 opacity-50 top-[60.78px] w-[184.328px]" data-name="Text" />;
}

function Container5() {
  return (
    <div className="absolute h-[88.344px] left-[628.09px] top-[22.39px] w-[184.328px]" data-name="Container">
      <Text5 />
      <Text6 />
    </div>
  );
}

function H() {
  return (
    <div className="absolute border-[rgba(90,78,55,0.1)] border-solid border-t h-[126px] left-[108px] top-[443.59px] w-[1139px]" data-name="h">
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container6() {
  return <div className="absolute bg-[#1d4ed8] h-[2px] left-[736px] opacity-50 top-[567.59px] w-[32px]" data-name="Container" />;
}

function Container7() {
  return <div className="absolute bg-[#0b1422] h-[2px] left-[453px] opacity-50 top-[566.59px] w-[32px]" data-name="Container" />;
}

function Container8() {
  return <div className="absolute bg-[#1d4ed8] h-[2px] left-[108px] top-[565.59px] w-[32px]" data-name="Container" />;
}

function Group() {
  return (
    <div className="absolute contents left-[108px] top-[467.98px]">
      <p className="absolute font-['Google_Sans:Medium',sans-serif] leading-[56.32px] left-[108px] not-italic text-[#1d4ed8] text-[45px] top-[467.98px] whitespace-nowrap">Velocidad</p>
      <p className="absolute font-['Google_Sans:Regular',sans-serif] leading-[18.368px] left-[108px] not-italic text-[20px] text-black top-[527.77px] w-[276.484px]">entregas en días, no meses</p>
      <p className="absolute font-['Google_Sans:Medium',sans-serif] leading-[56.32px] left-[452.77px] not-italic text-[#0b1422] text-[45px] top-[467.98px] whitespace-nowrap">Calidad</p>
      <p className="absolute font-['Google_Sans:Regular',sans-serif] leading-[18.368px] left-[452.77px] not-italic text-[20px] text-black top-[527.77px] w-[215.047px]">UX real, no plantillas</p>
      <p className="absolute font-['Google_Sans:Medium',sans-serif] leading-[56.32px] left-[736.09px] not-italic text-[#0b1422] text-[45px] top-[467.98px] whitespace-nowrap">Precio</p>
      <p className="absolute font-['Google_Sans:Regular',sans-serif] leading-[18.368px] left-[736px] not-italic text-[20px] text-black top-[527.59px] w-[214px]">accesible para pymes</p>
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[108px] top-[443.59px]">
      <H />
      <Group />
    </div>
  );
}

function V() {
  return (
    <div className="h-[726.953px] relative shrink-0 w-full" data-name="v">
      <M />
      <Paragraph />
      <Container2 />
      <Group1 />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute h-[16.797px] left-[1267.17px] opacity-40 top-[9.22px] w-[33.641px]" data-name="Text">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16.8px] left-0 not-italic text-[#0b1422] text-[11.2px] top-0 whitespace-nowrap">03/14</p>
    </div>
  );
}

function Container11() {
  return <div className="bg-[#1d4ed8] h-[2px] rounded-[1px] shrink-0 w-full" data-name="Container" />;
}

function Container10() {
  return (
    <div className="absolute bg-[rgba(90,78,55,0.1)] content-stretch flex flex-col h-[2px] items-start left-[54.19px] pr-[940.5px] rounded-[1px] top-[16.61px] w-[1196.984px]" data-name="Container">
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
    <div className="bg-[#fcfaf5] relative size-full" data-name="3">
      <Container />
    </div>
  );
}