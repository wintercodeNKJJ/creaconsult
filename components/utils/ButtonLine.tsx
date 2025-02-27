import React from "react";

interface ButtonLinesProps {
  text: string;
}

const ButtonLine = ({ text }: ButtonLinesProps) => {
  return (
    <div className=" z-[1] pt-[40px] pb-[15px] pl-[15px] flex relative ">
      <div className=" relative">
        <a
          className=" border-[#ffffffab] duration-300 hover:bg-[--primary-transparent] bg-[#dcc5b700] tracking-[0.5px] uppercase border-[1px] border-solid py-[10px] px-[40px] leading-[24px] cursor-pointer rounded-none no-underline inline-block"
          href=""
        >
          {text}
        </a>
        <div className=" absolute h-[18px] w-[1px] bg-[#dcc5b7] top-[-18px] right-0 bottom-auto left-auto"></div>
        <div className=" absolute h-[20px] w-[1px] bg-[#dcc5b7] top-[-20px] right-auto bottom-auto left-0"></div>
        <div className=" absolute h-[15px] w-[1px] bg-[#dcc5b7] top-auto right-0 bottom-[-15px] left-auto"></div>
        <div className=" absolute h-[25px] w-[1px] bg-[#dcc5b7] top-auto right-auto bottom-[-25px] left-0"></div>

        <div className=" absolute w-[15px] h-[1px] bg-[#dcc5b7] top-auto right-[-15] bottom-0 left-auto"></div>
        <div className=" absolute w-[23px] h-[1px] bg-[#dcc5b7] top-0 right-[-23] bottom-auto left-auto"></div>
        <div className=" absolute w-[15px] h-[1px] bg-[#dcc5b7] top-auto right-auto bottom-0 left-[-15px]"></div>
        <div className=" absolute w-[15px] h-[1px] bg-[#dcc5b7] top-0 right-auto bottom-auto left-[-15px]"></div>
      </div>
    </div>
  );
};

export default ButtonLine;
