function Text() {
  return (
    <div className="absolute h-[19.188px] left-0 opacity-85 top-0 w-[1138.219px]" data-name="Text">
      <p className="absolute font-['Google_Sans:Medium',sans-serif] leading-[19.2px] left-0 not-italic text-[#1d4ed8] text-[16px] top-0 tracking-[1.28px] uppercase whitespace-nowrap">13 / CRONOGRAMA</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[42.234px] left-0 top-[25.58px] w-[1138.219px]" data-name="Heading 2">
      <p className="absolute font-['Google_Sans:Bold',sans-serif] leading-[42.24px] left-0 not-italic text-[#0b1422] text-[38.4px] top-[-1px] whitespace-nowrap">Backlog según sprints</p>
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
      <p className="absolute font-['Google_Sans:Regular',sans-serif] leading-[28.56px] left-0 not-italic text-[20px] text-black top-[-1px] w-[555px]">En JERS organizamos las actividades de tal manera que podamos cumplir con nuestros objetivos al final del semestre.</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[10px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #1D4ED8)" id="Ellipse 3" r="5" />
        </svg>
      </div>
      <p className="font-['Google_Sans:Regular',sans-serif] leading-[28.56px] not-italic relative shrink-0 text-[15px] text-[rgba(0,0,0,0.8)] w-[157px]">Propuesta</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[10px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #1D4ED8)" id="Ellipse 3" r="5" />
        </svg>
      </div>
      <p className="font-['Google_Sans:Regular',sans-serif] leading-[28.56px] not-italic relative shrink-0 text-[15px] text-[rgba(0,0,0,0.8)] w-[157px]">Propuesta</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[10px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #1D4ED8)" id="Ellipse 3" r="5" />
        </svg>
      </div>
      <p className="font-['Google_Sans:Regular',sans-serif] leading-[28.56px] not-italic relative shrink-0 text-[15px] text-[rgba(0,0,0,0.8)] w-[157px]">Propuesta</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[10px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #1D4ED8)" id="Ellipse 3" r="5" />
        </svg>
      </div>
      <p className="font-['Google_Sans:Regular',sans-serif] leading-[28.56px] not-italic relative shrink-0 text-[15px] text-[rgba(0,0,0,0.8)] w-[157px]">Propuesta</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[10px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #FCFAF5)" id="Ellipse 3" r="4.5" stroke="var(--stroke-0, #1D4ED8)" />
        </svg>
      </div>
      <p className="font-['Google_Sans:Regular',sans-serif] leading-[28.56px] not-italic relative shrink-0 text-[15px] text-[rgba(0,0,0,0.8)] w-[157px]">Propuesta</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] items-start left-[133px] top-[366.59px] w-[185px]">
      <Frame />
      <Frame1 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[133px] top-[366.59px]">
      <div className="absolute h-[167px] left-[138px] top-[376.59px] w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 167">
            <path d="M0.5 167V0" id="Vector 14" opacity="0.3" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <Frame2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[10px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #1D4ED8)" id="Ellipse 3" r="5" />
        </svg>
      </div>
      <p className="font-['Google_Sans:Regular',sans-serif] leading-[28.56px] not-italic relative shrink-0 text-[15px] text-[rgba(0,0,0,0.8)] w-[157px]">Propuesta</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[10px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #1D4ED8)" id="Ellipse 3" r="5" />
        </svg>
      </div>
      <p className="font-['Google_Sans:Regular',sans-serif] leading-[28.56px] not-italic relative shrink-0 text-[15px] text-[rgba(0,0,0,0.8)] w-[157px]">Propuesta</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[10px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #1D4ED8)" id="Ellipse 3" r="5" />
        </svg>
      </div>
      <p className="font-['Google_Sans:Regular',sans-serif] leading-[28.56px] not-italic relative shrink-0 text-[15px] text-[rgba(0,0,0,0.8)] w-[157px]">Propuesta</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[10px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #1D4ED8)" id="Ellipse 3" r="5" />
        </svg>
      </div>
      <p className="font-['Google_Sans:Regular',sans-serif] leading-[28.56px] not-italic relative shrink-0 text-[15px] text-[rgba(0,0,0,0.8)] w-[157px]">Propuesta</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[10px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #FCFAF5)" id="Ellipse 3" r="4.5" stroke="var(--stroke-0, #1D4ED8)" />
        </svg>
      </div>
      <p className="font-['Google_Sans:Regular',sans-serif] leading-[28.56px] not-italic relative shrink-0 text-[15px] text-[rgba(0,0,0,0.8)] w-[157px]">Propuesta</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] items-start left-[557px] top-[366.59px] w-[185px]">
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[557px] top-[366.59px]">
      <div className="absolute h-[167px] left-[562px] top-[376.59px] w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 167">
            <path d="M0.5 167V0" id="Vector 14" opacity="0.3" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <Frame6 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[10px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #1D4ED8)" id="Ellipse 3" r="5" />
        </svg>
      </div>
      <p className="font-['Google_Sans:Regular',sans-serif] leading-[28.56px] not-italic relative shrink-0 text-[15px] text-[rgba(0,0,0,0.8)] w-[157px]">Propuesta</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[10px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #1D4ED8)" id="Ellipse 3" r="5" />
        </svg>
      </div>
      <p className="font-['Google_Sans:Regular',sans-serif] leading-[28.56px] not-italic relative shrink-0 text-[15px] text-[rgba(0,0,0,0.8)] w-[157px]">Propuesta</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[10px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #1D4ED8)" id="Ellipse 3" r="5" />
        </svg>
      </div>
      <p className="font-['Google_Sans:Regular',sans-serif] leading-[28.56px] not-italic relative shrink-0 text-[15px] text-[rgba(0,0,0,0.8)] w-[157px]">Propuesta</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[10px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #1D4ED8)" id="Ellipse 3" r="5" />
        </svg>
      </div>
      <p className="font-['Google_Sans:Regular',sans-serif] leading-[28.56px] not-italic relative shrink-0 text-[15px] text-[rgba(0,0,0,0.8)] w-[157px]">Propuesta</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[10px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #FCFAF5)" id="Ellipse 3" r="4.5" stroke="var(--stroke-0, #1D4ED8)" />
        </svg>
      </div>
      <p className="font-['Google_Sans:Regular',sans-serif] leading-[28.56px] not-italic relative shrink-0 text-[15px] text-[rgba(0,0,0,0.8)] w-[157px]">Propuesta</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] items-start left-[984px] top-[366.59px] w-[185px]">
      <Frame13 />
      <Frame14 />
      <Frame15 />
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[984px] top-[366.59px]">
      <div className="absolute h-[167px] left-[989px] top-[376.59px] w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 167">
            <path d="M0.5 167V0" id="Vector 14" opacity="0.3" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <Frame12 />
    </div>
  );
}

function V() {
  return (
    <div className="h-[726.953px] relative shrink-0 w-full" data-name="v">
      <M />
      <Paragraph />
      <div className="absolute border-[#1e1e1e] border-l border-solid h-[418px] left-[107px] opacity-30 top-[279.59px] w-[380px]" />
      <div className="absolute border-[#1e1e1e] border-l border-solid h-[418px] left-[534px] opacity-30 top-[279.59px] w-[380px]" />
      <div className="absolute border-[#1e1e1e] border-l border-solid h-[418px] left-[961px] opacity-30 top-[279.59px] w-[380px]" />
      <Group />
      <Group1 />
      <Group2 />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[16.797px] left-[1267.17px] opacity-40 top-[9.22px] w-[33.641px]" data-name="Text">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16.8px] left-0 not-italic text-[#0b1422] text-[11.2px] top-0 whitespace-nowrap">13/14</p>
    </div>
  );
}

function Container4() {
  return <div className="bg-[#1d4ed8] h-[2px] rounded-[1px] shrink-0 w-full" data-name="Container" />;
}

function Container3() {
  return (
    <div className="absolute bg-[rgba(90,78,55,0.1)] content-stretch flex flex-col h-[2px] items-start left-[54.19px] pr-[85.5px] rounded-[1px] top-[16.61px] w-[1196.984px]" data-name="Container">
      <Container4 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[35.234px] relative shrink-0 w-full" data-name="Container">
      <Text1 />
      <Container3 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[#fcfaf5] content-stretch flex flex-col h-[762.188px] items-start left-0 top-[59.41px] w-[1355px]" data-name="Container">
      <V />
      <Container2 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fcfaf5] relative size-full" data-name="14">
      <Container />
      <p className="absolute font-['Google_Sans:Bold',sans-serif] leading-[0] left-[123px] not-italic text-[#0b1422] text-[38.4px] top-[359px] whitespace-nowrap">
        <span className="leading-[42.24px]">{`Sprint `}</span>
        <span className="leading-[42.24px] text-[#1d4ed8]">1</span>
      </p>
      <p className="absolute font-['Google_Sans:Bold',sans-serif] leading-[42.24px] left-[551px] not-italic text-[#0b1422] text-[38.4px] top-[359px] whitespace-nowrap">Sprint 2</p>
      <p className="absolute font-['Google_Sans:Bold',sans-serif] leading-[42.24px] left-[979px] not-italic text-[#0b1422] text-[38.4px] top-[359px] whitespace-nowrap">Sprint 3</p>
    </div>
  );
}