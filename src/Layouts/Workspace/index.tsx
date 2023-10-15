import { Outlet } from "react-router-dom";
import Dropdown from "../../components/Workspace/DropDown";

const WorkspaceLayout = () => {
  return (
    <div className="flex">
      <Dropdown />
      <Outlet />
    </div>
  );
};

export default WorkspaceLayout;
