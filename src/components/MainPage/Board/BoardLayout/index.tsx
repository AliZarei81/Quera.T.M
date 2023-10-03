import { Outlet } from "react-router-dom";
import { v4 as uuid } from "uuid";
import MainPageSideBar from "../../MainPageSideBar";
import Navbar from "../Navbar";
import Header from "../Header";
import Filterstatus from "../FilterStatus";
import ChangeDate from "../../../Common/ChangeDate";
import { useState } from "react";
import Filter from "../Filter";
import FilterItem from "../Filter/FilterItem";
const BoardLayout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filterItem, setFilterItem] = useState<{ id: string }[]>([
    { id: uuid() },
  ]);
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
      <Filter
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
        onAddFilter={() => setFilterItem([...filterItem, { id: uuid() }])}
      >
        {filterItem.map((item) => (
          <FilterItem
            key={item.id}
            onRemove={() =>
              setFilterItem(filterItem.filter((ele) => ele.id !== item.id))
            }
          />
        ))}
      </Filter>
    </div>
  );
};

export default BoardLayout;
