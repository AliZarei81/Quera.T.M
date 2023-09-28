import React from 'react';
import ListIcon from "../Icon/List";
import ColumnIcon from "../Icon/Column";
import CalenderIcon from "../Icon/Calender";
import ShareIcon from "../Icon/Share";

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = React.useState<string | null>(null);

  return (
    <div className="font-iran-yekan flex items-center justify-between py-[10px] border-b-2 border-gray-primary w-[1034px]">
      <div className="flex items-center justify-evenly self-center w-[511px] ">
        <h3 className="text-[20px] font-extrabold pl-[10px]">
          پروژه اول
        </h3>
        <div className={`flex items-center justify-center self-center gap-[5px] px-[20px]  border-l-2 border-r-2 border-gray-primary text-[16px] font-medium cursor-pointer hover:text-[rgba(32,141,142,1)] hover:font-extrabold   ${activeLink === 'list' ? 'before: opacity-100 border-b-2 border-[rgba(32,141,142,1)]' : ''}`}
             onClick={() => setActiveLink('list')}>
          <ListIcon className="hover:text-[rgba(32,141,142,1)]"></ListIcon>
          <a className="text-black no-underline" href="#">
            نمایش لیستی
          </a>
        </div>
        <div className={`flex items-center justify-center self-center gap-[5px] px-[20px]  border-l-2 border-gray-primary text-[16px] font-medium cursor-pointer hover:text-[rgba(32,141,142,1)] hover:font-extrabold ${activeLink === 'column' ? 'border-b-2 border-[rgba(32,141,142,1)]' : ''}`}
             onClick={() => setActiveLink('column')}>
          <ColumnIcon className="hover:text-[rgba(32,141,142,1)]"></ColumnIcon>
          <a className="text-black no-underline" href="#">
            نمایش ستونی
          </a>
        </div>
        <div className={`flex items-center justify-center self-center gap-[5px] px-[20px] border-l-2 border-gray-primary text-[16px] font-medium cursor-pointer hover:text-[rgba(32,141,142,1)] hover:font-extrabold ${activeLink === 'calendar' ? 'border-b-2 border-[rgba(32,141,142,1)] ' : ''}`}
             onClick={() => setActiveLink('calendar')}>
          <CalenderIcon className="hover:text-[rgba(32,141,142,1)]"></CalenderIcon>
          <a className="text-black no-underline" href="#">
            تقویم
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center gap-[3px]">
        <ShareIcon></ShareIcon>
        <button className="p-2 text-black bg-white rounded-full border-none cursor-pointer font-medium text-[16px] ">
          اشتراک‌گذاری
        </button>
      </div>
    </div>
  );
};

export default Navbar;


