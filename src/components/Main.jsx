import mobileIllustration from "../images/illustration-woman-online-mobile.svg";
import desktopIllustration from "../images/illustration-woman-online-desktop.svg";
import boxIllustration from "../images/illustration-box-desktop.svg";
import mobilePattern from "../images/bg-pattern-mobile.svg";
import desktopPattern from "../images/bg-pattern-desktop.svg";

import FAQ from "./FAQ";
const Main = () => {
  return (
    <main className="mx-auto mb-[5.313rem] mt-10 flex w-[20.438rem] max-w-[26.75rem] flex-col items-center xl:relative xl:my-[8.125rem] xl:w-[57.5rem] xl:max-w-[57.5rem] ">
      <div className="relative z-10 h-[11.25rem] w-[14.813rem] xl:hidden">
        <img src={mobileIllustration} alt="" />
      </div>
      <div className="absolute left-[-93px] top-[205px] z-20 hidden xl:block">
        <img src={boxIllustration} alt="" />
      </div>
      <div className="-mt-[4.5rem] flex w-full flex-col items-center gap-[1.75rem] rounded-[23px] bg-white px-6 pb-12 shadow-[0px_50px_50px_-20px_rgba(53,18,122,0.4972)] xl:relative xl:-mt-0 xl:h-[33.3rem] xl:flex-row xl:gap-[5.438rem] xl:overflow-hidden xl:overflow-x-hidden xl:pl-0 xl:pr-[5.938rem]  xl:pt-[4.063rem] xl:pb-[5.188rem]">
        <div className="-mt-10 h-[9.063rem] w-[15rem] xl:hidden">
          <img src={mobilePattern} alt="" />
        </div>
        <div className="z-10 -ml-[5.25rem] hidden xl:block">
          <img
            className="h-[22.438rem] w-[29.5rem]"
            src={desktopIllustration}
            alt=""
          />
        </div>
        <div className="absolute left-[-36rem] top-[-18.375rem] hidden xl:block">
          <img src={desktopPattern} alt="" />
        </div>
        <FAQ />
      </div>
    </main>
  );
};

export default Main;
