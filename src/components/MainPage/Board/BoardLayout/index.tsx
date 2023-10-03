import { Outlet } from "react-router-dom";
import MainPageSideBar from "../../MainPageSideBar";
import Navbar from "../Navbar";
import Header from "../Header";
import Filterstatus from "../FilterStatus";
import ChangeDate from "../../../Common/ChangeDate";
import { useState } from "react";
import Filter from "../Filter";
const BoardLayout = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="flex">
      <MainPageSideBar />
      <div className="flex flex-grow flex-col mx-xl gap-m">
        <Navbar />
        <Header>
          <Filterstatus setVisible={() => setIsVisible(true)} />
        </Header>
        <Outlet />
      </div>
      <Filter isVisible={isVisible} onClose={() => setIsVisible(false)} />
    </div>
  );
};

export default BoardLayout;
