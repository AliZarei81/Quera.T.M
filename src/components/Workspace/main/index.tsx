import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../../Common/Button";
import { PiPlusSquareBold } from "react-icons/pi";
import apiClients from "../../../services/api-clients";
import { GetWorkspaceResponse } from "../../../services/requests/get-workspaces";
import { useGetWorkspaces } from "../../../hooks/queries/get-workspaces.query";
import { useGetProjects } from "../../../hooks/queries/get-projects.query";
import WorkspaceList from "../WorkspaceList";

const Main: React.FC = () => {
  const { data: workspaces } = useGetWorkspaces();

  return (
    <div className="h-screen w-auto my-xl mr-xl">
      <div className="h-screen flex flex-col justify-stretch gap-m scroll-auto">
        {workspaces?.map((workspace) => (
          <WorkspaceList
            key={workspace.id}
            id={workspace.id}
            name={workspace.name}
            color={workspace.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
