import mobileIllustration from "../images/illustration-woman-online-mobile.svg";
import mobilePattern from "../images/bg-pattern-mobile.svg";
import FAQ from "./FAQ";
const Main = () => {
  return (
    <main className="mx-auto mb-[5.313rem] mt-10 flex w-[20.438rem] max-w-[26.75rem] flex-col items-center ">
      <div className="relative z-10 h-[11.25rem] w-[14.813rem]">
        <img className="" src={mobileIllustration} alt="" />
      </div>
      <div className="-mt-[4.5rem] flex h-[535px] w-full flex-col items-center gap-[1.75rem] rounded-[23px] bg-white px-6  pb-12 shadow-[0px_50px_50px_-20px_rgba(53,18,122,0.4972)]">
        <div className="-mt-10 h-[9.063rem] w-[15rem]">
          <img src={mobilePattern} alt="" />
        </div>
        <FAQ />
      </div>
    </main>
  );
};

export default Main;
