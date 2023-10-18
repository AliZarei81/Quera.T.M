import { v4 as uuid } from "uuid";
import { useState } from "react";
import Header from "../../../../components/Workspace/Board/Header";
import Filter from "../../../../components/Workspace/Board/Filter";
import FilterItem from "../../../../components/Workspace/Board/Filter/FilterItem";
import Filterstatus from "../../../../components/Workspace/Board/FilterStatus";
import TaskBoard from "../../../../components/Workspace/Board/TaskManeger/TaskBoard";

const BoardView = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filterItem, setFilterItem] = useState<{ id: string }[]>([
    { id: uuid() },
  ]);

  return (
    <>
      <Header>
        <Filterstatus setVisible={() => setIsVisible(true)} />
      </Header>
      <TaskBoard />
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
    </>
  );
};

export default BoardView;
