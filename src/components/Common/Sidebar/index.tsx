import React, { Children } from "react";

interface ISideBarProps {
  children: React.ReactNode;
}

const SideBar: React.FC<ISideBarProps> = ({ children }) => {
  return (
    <div className="w-1/5 h-screen border-l border-gray-primary flex flex-col">
      <header className="self-center font-bold text-body-xl bg-gradient-to-r from-[#118c80] to-[#4ab7d8]  bg-clip-text [-webkit-text-fill-color:transparent] ">
        کوئرا تسک منیجر
      </header>
      <div>{children}</div>
    </div>
  );
};

export default SideBar;
