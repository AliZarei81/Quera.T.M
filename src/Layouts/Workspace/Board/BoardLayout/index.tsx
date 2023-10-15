import { Outlet } from "react-router-dom";
import { v4 as uuid } from "uuid";
import MainPageSideBar from "../../../../components/Workspace/MainPageSideBar";
import ChangeDate from "../../../../components/Common/ChangeDate";
import { useState } from "react";
import Header from "../../../../components/Workspace/Board/Header";
import Filter from "../../../../components/Workspace/Board/Filter";
import FilterItem from "../../../../components/Workspace/Board/Filter/FilterItem";
import Filterstatus from "../../../../components/Workspace/Board/FilterStatus";
import Navbar from "../../../../components/Workspace/Board/Navbar";
const BoardLayout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filterItem, setFilterItem] = useState<{ id: string }[]>([
    { id: uuid() },
  ]);
  return (
    <div className="flex w-full">
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
