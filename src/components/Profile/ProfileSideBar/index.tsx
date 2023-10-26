import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { TbUserEdit, TbUserCheck } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import Button from "../../Common/Button";
import SideBar from "../../Common/Sidebar";
import { Link, useLocation } from "react-router-dom";

const ProfileSideBar = () => {
  const url = useLocation();
  const path = url.pathname.split("/");
  const lastRoute = path[path.length - 1];

  return (
    <SideBar>
      <div className="flex flex-col items-start mt-[60px] mr-l w-full gap-m ">
        <Link to="/workspace" className="w-2/5 h-[43px]">
          <Button
            title="بازگشت"
            disabled={false}
            className="w-full bg-brand-primary justify-center text-white px-s py-xs  text-body-m rounded-[8px]"
            icon={<BsArrowRight />}
          />
        </Link>
        <Link
          to="/profile"
          className="flex items-center text-black w-10/12 pr-xs h-[43px] text-[20px]"
        >
          <div
            className={`transition ease-in  duration-400  flex items-center text-black w-10/12 pr-xs h-[43px] text-[20px] ${
              lastRoute === "profile" &&
              "bg-brand-secondary font-bold rounded-[4px]"
            }`}
          >
            <Button
              title="اطلاعات فردی"
              disabled={false}
              icon={<TbUserEdit />}
            />
          </div>
        </Link>
        <Link
          to="/profile/account"
          className="flex items-center text-black w-10/12 pr-xs h-[43px] text-[20px]"
        >
          <div
            className={`transition ease-in  duration-400 flex items-center text-black w-10/12 pr-xs h-[43px] text-[20px] ${
              lastRoute === "account" &&
              "bg-brand-secondary font-bold rounded-[4px]"
            }`}
          >
            <Button
              title="اطلاعات حساب"
              disabled={false}
              icon={<TbUserCheck />}
            />
          </div>
        </Link>
        <Link
          to="/profile/setting"
          className="flex items-center text-black w-10/12 pr-xs h-[43px] text-[20px]"
        >
          <div
            className={`transition ease-in  duration-400 flex items-center text-black w-10/12 pr-xs h-[43px] text-[20px] ${
              lastRoute === "setting" &&
              "bg-brand-secondary font-bold rounded-[4px]"
            }`}
          >
            <Button title="تنظیمات" disabled={false} icon={<CiSettings />} />
          </div>
        </Link>
      </div>
    </SideBar>
  );
};

export default ProfileSideBar;
