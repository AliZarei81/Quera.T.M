import { Outlet } from "react-router-dom";
import MainPageSideBar from "../../MainPageSideBar";
import Navbar from "../../../Common/Navbar";
import Header from "../../../Common/Header";
import Filterstatus from "../../../Common/FilterStatus";
import ChangeDate from "../../../Common/ChangeDate";
const BoardLayout = () => {
  const show = false;
  return (
    <div className="flex">
      <MainPageSideBar />
      <div className="flex flex-grow flex-col mx-xl gap-m">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default BoardLayout;
