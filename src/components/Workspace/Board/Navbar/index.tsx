import React, { useState } from "react";
import Button from "../../../Common/Button";
import { FiShare2 } from "react-icons/fi";
import { BsCalendar4Week } from "react-icons/bs";
import { BsKanban } from "react-icons/bs";
import { LuListChecks } from "react-icons/lu";
import ShareModal from "../../../Common/Modal/ShareModal";
import { Link, useLocation } from "react-router-dom";

interface INavbarProps {
  heading: string;
  workspaceid: number;
  projectid: number;
}

const Navbar: React.FC<INavbarProps> = ({
  workspaceid,
  projectid,
  heading,
}): React.JSX.Element => {
  const location = useLocation();
  const [activeLink, setActiveLink] = React.useState<string | null>(
    location.pathname
  );
  const [shareModalIsOpen, setShareModalIsOpen] = useState<boolean>(false);

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

  return (
    <>
      <div className="w-full flex items-center justify-between py-[10px] border-b-2 border-gray-primary">
        <div className="flex items-center justify-evenly self-center">
          <h3 className="text-[20px] font-extrabold pl-[10px]">{heading}</h3>
          <div
            className={`flex items-center justify-center self-center gap-[5px] px-[20px]  border-l-2 border-r-2 border-gray-primary text-[16px] font-medium cursor-pointer relative`}
            onClick={() => setActiveLink("list")}
          >
            {activeLink?.includes("list") && (
              <div className="absolute bottom-[-18px] left-0 w-full border-b-2 border-[rgba(32,141,142,1)] "></div>
            )}
            <Link to={`/workspace/${workspaceid}/project/${projectid}/list`}>
              <Button
                title="نمایش لیستی"
                className={`no-underline gap-[5px] h-[16px] ${
                  activeLink === "list"
                    ? "text-[rgba(32,141,142,1)]"
                    : "text-black"
                } hover:text-[rgba(32,141,142,1)]`}
                icon={<LuListChecks />}
              />
            </Link>
          </div>
          <div
            className={`flex items-center justify-center self-center gap-[5px] px-[20px]  border-l-2  border-gray-primary text-[16px] font-medium cursor-pointer relative`}
            onClick={() => setActiveLink("")}
          >
            {!activeLink?.includes("list") &&
              !activeLink?.includes("calendar") && (
                <div className="absolute bottom-[-18px] left-0 w-full border-b-2 border-[rgba(32,141,142,1)]"></div>
              )}
            <Link to={`/workspace/${workspaceid}/project/${projectid}`}>
              <Button
                title="نمایش ستونی"
                className={`no-underline gap-[5px] h-[16px] ${
                  activeLink === "column"
                    ? "text-[rgba(32,141,142,1)]"
                    : "text-black"
                } hover:text-[rgba(32,141,142,1)]`}
                icon={<BsKanban />}
              />
            </Link>
          </div>
          <div
            className={`flex items-center justify-center self-center px-[20px] border-l-2 border-gray-primary text-[16px] font-medium cursor-pointer relative`}
            onClick={() => setActiveLink("calendar")}
          >
            {activeLink?.includes("calendar") && (
              <div className="absolute bottom-[-18px] left-0 w-full border-b-2 border-[rgba(32,141,142,1)]"></div>
            )}
            <Link
              to={`/workspace/${workspaceid}/project/${projectid}/calendar`}
            >
              <Button
                title="تقویم"
                className={`no-underline gap-[5px] h-[16px] ${
                  activeLink === "calendar"
                    ? "text-[rgba(32,141,142,1)]"
                    : "text-black"
                } hover:text-[rgba(32,141,142,1)]`}
                icon={<BsCalendar4Week />}
              />
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center gap-[5px]">
          <Button
            type="button"
            className="p-2 text-black bg-white rounded-full border-none cursor-pointer font-medium text-[16px] "
            title="اشتراک‌ گذاری"
            disabled={false}
            onClick={() => setShareModalIsOpen(true)}
            icon={<FiShare2 />}
          />
        </div>
      </div>
      {/* <ShareModal
        isVisible={shareModalIsOpen}
        onClose={() => setShareModalIsOpen(false)}
        privateLink="https://google.com"
        type="project"
        users={users}
      /> */}
    </>
  );
};

export default Navbar;
