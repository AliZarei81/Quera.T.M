import React, { Children } from "react";

interface ISideBarProps {
  children: React.ReactNode;
}

const SideBar: React.FC<ISideBarProps> = ({ children }) => {
  return (
    <div className="w-[340px] h-screen m-0 left-[1100px] border-l border-gray-400">
      <header className="w-full h-[55px] flex justify-center top-[40px] left-[5px] font-iran-yekan font-bold text-[32px] leading-[55px] bg-gradient-to-r from-[#118c80] to-[#4ab7d8]  bg-clip-text [-webkit-text-fill-color:transparent] ">
        کوئرا تسک منیجر
      </header>
      <div className="w-[274px] h-auto gap-4 relative ">{children}</div>
    </div>
  );
};

export default SideBar;
