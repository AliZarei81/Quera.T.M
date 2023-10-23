import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { TbUserEdit, TbUserCheck } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import Button from "../../Common/Button";
import SideBar from "../../Common/Sidebar";
import { Link } from "react-router-dom";

const ProfileSideBar = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  return (
    <SideBar>
      <div className="flex flex-col items-start mt-[60px] mr-l w-full gap-m ">
        <Link to="/workspace" className="w-2/5 h-[43px]">
          <Button
            title="بازگشت"
            disabled={false}
            className="bg-brand-primary justify-center text-white  text-body-l rounded-[8px]"
            icon={<BsArrowRight />}
          />
        </Link>
        <div
          className={`text-black w-11/12 pr-xs h-[43px] text-[20px] ${
            activeButtonIndex === 0 &&
            "bg-brand-secondary font-bold rounded-[4px]"
          }`}
        >
          <Link to="/profile">
            <Button
              title="اطلاعات فردی"
              disabled={false}
              onClick={() => setActiveButtonIndex(0)}
              icon={<TbUserEdit />}
            />
          </Link>
        </div>
        <div
          className={`text-black w-11/12 pr-xs h-[43px] text-[20px] ${
            activeButtonIndex === 1 &&
            "bg-brand-secondary font-bold rounded-[4px]"
          }`}
        >
          <Link to="/profile/account">
            <Button
              title="اطلاعات حساب"
              disabled={false}
              onClick={() => setActiveButtonIndex(1)}
              icon={<TbUserCheck />}
            />
          </Link>
        </div>
        <div
          className={`text-black w-11/12 pr-xs h-[43px] text-[20px] ${
            activeButtonIndex === 2 &&
            "bg-brand-secondary font-bold rounded-[4px]"
          }`}
        >
          <Link to="/profile/setting">
            <Button
              title="تنظیمات"
              disabled={false}
              onClick={() => setActiveButtonIndex(2)}
              icon={<CiSettings />}
            />
          </Link>
        </div>
      </div>
    </SideBar>
  );
};

export default ProfileSideBar;
