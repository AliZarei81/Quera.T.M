import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { TbUserEdit, TbUserCheck } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import Button from "../../Common/Button";
import SideBar from "../../Common/Sidebar";

const ProfileSideBar = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  return (
    <SideBar>
      <div className="flex flex-col items-start mt-[60px] mr-l w-full gap-m ">
        <Button
          title="بازگشت"
          disabled={false}
          className="bg-brand-primary justify-center text-white w-2/5 h-[43px] text-[20px] rounded-[8px]"
          icon={<BsArrowRight />}
        />
        <div
          className={`text-black w-11/12 pr-xs h-[43px] text-[20px] ${
            activeButtonIndex === 0 &&
            "bg-brand-secondary font-bold rounded-[4px]"
          }`}
        >
          <Button
            title="اطلاعات فردی"
            disabled={false}
            onClick={() => setActiveButtonIndex(0)}
            icon={<TbUserEdit />}
          />
        </div>
        <div
          className={`text-black w-11/12 pr-xs h-[43px] text-[20px] ${
            activeButtonIndex === 1 &&
            "bg-brand-secondary font-bold rounded-[4px]"
          }`}
        >
          <Button
            title="اطلاعات حساب"
            disabled={false}
            onClick={() => setActiveButtonIndex(1)}
            icon={<TbUserCheck />}
          />
        </div>
        <div
          className={`text-black w-11/12 pr-xs h-[43px] text-[20px] ${
            activeButtonIndex === 2 &&
            "bg-brand-secondary font-bold rounded-[4px]"
          }`}
        >
          <Button
            title="تنظیمات"
            disabled={false}
            onClick={() => setActiveButtonIndex(2)}
            icon={<CiSettings />}
          />
        </div>
      </div>
    </SideBar>
  );
};

export default ProfileSideBar;
