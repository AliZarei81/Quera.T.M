import { Outlet } from "react-router-dom";

const WorkspaceLayout = () => {
  return (
    <div className="flex">
      <Outlet />
    </div>
  );
};

export default WorkspaceLayout;
