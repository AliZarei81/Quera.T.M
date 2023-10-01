import { TbDoorExit } from "react-icons/tb";
import Button from "../../Common/Button";
import Dropdown from "../../Common/DropDown";
import SideBar from "../../Common/Sidebar";
import Switch from "../../Common/Switch";
import User from "../../Common/User";
import { useState } from "react";

const MainPageSideBar = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <SideBar>
        <Dropdown />
        <User
          hasProfilePicture={false}
          isOwner={false}
          userName="Niloofar Mojodi"
          className="bg-indigo-secondary"
        />
        <div className="flex justify-around">
          <Button
            title="خروج"
            icon={<TbDoorExit />}
            className="text-gray-primary text-body-m"
          />
          <Switch checked={checked} onChange={() => setChecked(!checked)} />
        </div>
      </SideBar>
    </>
  );
};

export default MainPageSideBar;
