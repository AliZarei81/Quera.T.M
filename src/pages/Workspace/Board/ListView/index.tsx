import { v4 as uuid } from "uuid";
import { useState } from "react";
import Header from "../../../../components/Workspace/Board/Header";
import Filter from "../../../../components/Workspace/Board/Filter";
import FilterItem from "../../../../components/Workspace/Board/Filter/FilterItem";
import Filterstatus from "../../../../components/Workspace/Board/FilterStatus";
import ListView from "../../../../components/Workspace/Board/ListView";
import { useQuery } from "react-query";
import { Keys } from "../../../../hooks/keys";
import { GetProjectResponse } from "../../../../services/requests/get-project";
import { useParams } from "react-router-dom";

const ListViewPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filterItem, setFilterItem] = useState<{ id: string }[]>([
    { id: uuid() },
  ]);
  const { workspaceid, projectid } = useParams();
  const workspaceidNumber = workspaceid ? Number(workspaceid) : 0;
  const projectidNumber = projectid ? Number(projectid) : 0;
  const { data: project } = useQuery<GetProjectResponse>({
    queryKey: [Keys.GetProject, workspaceidNumber, projectidNumber],
  });
  return (
    <>
      <Header>
        <Filterstatus setVisible={() => setIsVisible(true)} />
      </Header>
      <ListView projectName={project?.name!} />
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

export default ListViewPage;
