import React from "react";

const SideBar: React.FC<{}> = () => {
  return (
    <div className="w-[340px] h-[923px] m-0 left-[1100px] border-l border-gray-400">
      <header className="w-full h-[55px] flex justify-center top-[40px] left-[5px] font-iran-yekan font-bold text-[32px] leading-[55px] bg-gradient-to-r from-[#118c80] to-[#4ab7d8]  bg-clip-text [-webkit-text-fill-color:transparent] ">
        کوئرا تسک منیجر
      </header>
      <div className="w-[274px] h-[496px] gap-4 relative ">
        {/* drop down */}
      </div>
      <div className="w-[276px] h-[89px] gap-4 absolute bottom-[32px] right-[32px]">
        {/* <div>  'profile'  </div> */}

        {/* <div className='flex'> leave icon and dark mode switch </div> */}
      </div>
    </div>
  );
};

export default SideBar;
