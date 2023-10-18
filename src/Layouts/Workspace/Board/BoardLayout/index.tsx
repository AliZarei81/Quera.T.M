import { Outlet } from "react-router-dom";
import Navbar from "../../../../components/Workspace/Board/Navbar";
const BoardLayout = () => {
  return (
    <div className="flex w-full">
      <div className="flex flex-grow flex-col mx-xl gap-m">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default BoardLayout;
