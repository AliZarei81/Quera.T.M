import React, { useState } from "react";
import Button from "../../../Common/Button";
import Link from "../../../Common/Link";
import { FiShare2 } from "react-icons/fi";
import { BsCalendar4Week } from "react-icons/bs";
import { BsKanban } from "react-icons/bs";
import { LuListChecks } from "react-icons/lu";
import ShareModal from "../../../Common/Modal/ShareModal";

const Navbar: React.FC = () => {
  const users = [
    {
      userName: "za h",
      userProfilePicture: "string",
      hasProfilePicture: false,
      isOwner: true,
      userColor: "bg-[#F27474]",
      email: "za@g.com",
    },
    {
      userName: "pe a",
      userProfilePicture: "string",
      hasProfilePicture: false,
      isOwner: false,
      userColor: "bg-[#F27474]",
      email: "za@g.com",
    },
    {
      userName: "pe a",
      userProfilePicture: "string",
      hasProfilePicture: false,
      isOwner: false,
      userColor: "bg-[#F27474]",
      email: "za@g.com",
    },
    {
      userName: "pe a",
      userProfilePicture: "string",
      hasProfilePicture: false,
      isOwner: false,
      userColor: "bg-[#F27474]",
      email: "za@g.com",
    },
  ];
  const [activeLink, setActiveLink] = React.useState<string | null>(null);
  const [shareModalIsOpen, setShareModalIsOpen] = useState(false);

  return (
    <>
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
                activeLink === "list"
                  ? "text-[rgba(32,141,142,1)]"
                  : "text-black"
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
            onClick={() => setShareModalIsOpen(true)}
          />
        </div>
      </div>
      {shareModalIsOpen && (
        <ShareModal
          privateLink="https://google.com"
          type="project"
          users={users}
        />
      )}
    </>
  );
};

export default Navbar;
