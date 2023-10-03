import React from "react";
import Button from "../Button";
import Link from "../Link";
import { FiShare2 } from "react-icons/fi";
import { BsCalendar4Week } from "react-icons/bs";
import { BsKanban } from "react-icons/bs";
import { LuListChecks } from "react-icons/lu";

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = React.useState<string | null>(null);

  return (
    <div className="w-full flex items-center justify-between py-[10px] border-b-2 border-gray-primary">
      <div className="flex items-center justify-evenly self-center">
        <h3 className="text-[20px] font-extrabold pl-[10px]">پروژه اول</h3>
        <div
          className={`flex items-center justify-center self-center gap-[5px] px-[20px]  border-l-2 border-r-2 border-gray-primary text-[16px] font-medium cursor-pointer relative`}
          onClick={() => setActiveLink("list")}
        >
          {activeLink === "list" && (
            <div className="absolute bottom-[-18px] left-0 w-full border-b-2 border-[rgba(32,141,142,1)] "></div>
          )}
          <Link
            title="نمایش لیستی"
            className={`no-underline gap-[5px] h-[16px] ${
              activeLink === "list" ? "text-[rgba(32,141,142,1)]" : "text-black"
            } hover:text-[rgba(32,141,142,1)]`}
            href="#"
            icon={<LuListChecks />}
          ></Link>
        </div>
        <div
          className={`flex items-center justify-center self-center gap-[5px] px-[20px]  border-l-2  border-gray-primary text-[16px] font-medium cursor-pointer relative`}
          onClick={() => setActiveLink("column")}
        >
          {activeLink === "column" && (
            <div className="absolute bottom-[-18px] left-0 w-full border-b-2 border-[rgba(32,141,142,1)]"></div>
          )}
          <Link
            title="نمایش ستونی"
            className={`no-underline gap-[5px] h-[16px] ${
              activeLink === "column"
                ? "text-[rgba(32,141,142,1)]"
                : "text-black"
            } hover:text-[rgba(32,141,142,1)]`}
            href="#"
            icon={<BsKanban />}
          ></Link>
        </div>
        <div
          className={`flex items-center justify-center self-center px-[20px] border-l-2 border-gray-primary text-[16px] font-medium cursor-pointer relative`}
          onClick={() => setActiveLink("calendar")}
        >
          {activeLink === "calendar" && (
            <div className="absolute bottom-[-18px] left-0 w-full border-b-2 border-[rgba(32,141,142,1)]"></div>
          )}
          <Link
            title="تقویم"
            className={`no-underline gap-[5px] h-[16px] ${
              activeLink === "calendar"
                ? "text-[rgba(32,141,142,1)]"
                : "text-black"
            } hover:text-[rgba(32,141,142,1)]`}
            href="#"
            icon={<BsCalendar4Week />}
          ></Link>
        </div>
      </div>

      <div className="flex items-center justify-center gap-[5px]">
        <Button
          type="button"
          className="p-2 text-black bg-white rounded-full border-none cursor-pointer font-medium text-[16px] "
          title="اشتراک‌ گذاری"
          disabled={false}
          icon={<FiShare2 />}
        />
      </div>
    </div>
  );
};

export default Navbar;
