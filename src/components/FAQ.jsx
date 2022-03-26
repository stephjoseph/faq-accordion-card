import data from "./data";
import iconArrow from "../images/icon-arrow-down.svg";
import { useState } from "react";

const FAQ = () => {
  const [selected, setSelected] = useState(1);

  const toggle = (i) => {
    selected === i ? setSelected(null) : setSelected(i);
  };

  return (
    <div className="flex w-full flex-col gap-[1.875rem] xl:h-[24.063rem] xl:w-[21.875rem] xl:gap-[2.688rem]">
      <h2 className="self-center text-[2rem] font-bold leading-10 tracking-normal text-[#1E1F36] xl:self-start">
        FAQ
      </h2>
      <div className="w-full">
        {data.map((item, i) => (
          <div
            className="flex cursor-pointer flex-col gap-0 border-y-[0.5px] border-solid border-[#E8E8EA]"
            key={item.id}
          >
            <div
              className="flex items-center justify-between py-4"
              onClick={() => toggle(i)}
            >
              <h3 className="text-[0.813rem] font-normal leading-4 tracking-normal text-[#4B4C5F]">
                {item.question}
              </h3>
              <div
                className={`${
                  selected === i ? "rotate-180" : ""
                } transition-[transform] duration-300 ease-in`}
              >
                <img src={iconArrow} alt="" />
              </div>
            </div>
            <p className={`${selected === i ? "answer show" : "answer"}`}>
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
