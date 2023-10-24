import { Outlet } from "react-router-dom";
import MainPageSideBar from "../../components/Workspace/MainPageSideBar";

const WorkspaceLayout = () => {
  return (
    <div className="flex relative">
      <MainPageSideBar />
      <Outlet />
    </div>
  );
};

export default WorkspaceLayout;
