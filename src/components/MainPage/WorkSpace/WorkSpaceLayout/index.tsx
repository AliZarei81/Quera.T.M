import { Outlet } from "react-router-dom";
import MainPageSideBar from "../../MainPageSideBar";
const WorkSpaceLayout = () => {
  return (
    <div className="flex">
      <MainPageSideBar />
      <Outlet />
    </div>
  );
};

export default WorkSpaceLayout;
