import { TbDoorExit } from "react-icons/tb";
import Button from "../../Common/Button";
import Dropdown from "../DropDown";
import SideBar from "../../Common/Sidebar";
import Switch from "../../Common/Switch";
import User from "../../Common/User";
import { useContext, useState } from "react";
import { AppContext } from "../../../context/userStore/store";
import { LogoutUser } from "../../../context/userStore/user/user.action";
import { Link, useNavigate } from "react-router-dom";

const MainPageSideBar = () => {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  return (
    <>
      <SideBar>
        <div className="h-screen flex flex-col justify-between">
          <Dropdown />
          <div className="flex flex-col gap-s p-s">
            <Link to="/profile">
              <User
                hasProfilePicture={false}
                isOwner={false}
                userName={state.user.first_name + " " + state.user.last_name}
              />
            </Link>
            <Button
              type="button"
              disabled={false}
              title="خروج"
              icon={<TbDoorExit />}
              className="text-gray-primary text-body-m"
              onClick={() => {
                dispatch(LogoutUser());
                navigate("/");
              }}
            />
          </div>
          {/* <Switch checked={checked} onChange={() => setChecked(!checked)} /> */}
        </div>
      </SideBar>
    </>
  );
};

export default MainPageSideBar;
