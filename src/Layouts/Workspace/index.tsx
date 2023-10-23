import { Outlet } from "react-router-dom";
import MainPageSideBar from "../../components/Workspace/MainPageSideBar";
import { useGetWorkspaces } from "../../hooks/queries/get-workspaces.query";
import { useEffect, useState } from "react";
import { GetWorkspacesResponse } from "../../types/response/getworkspaces.response.dto";

const WorkspaceLayout = () => {
  // const [workspaces, setWorkspaces] = useState<GetWorkspacesResponse[]>([]);
  const { data } = useGetWorkspaces();
  // console.log(data);

  // const data = workspacesResponse.data ? workspacesResponse.data : [];
  // setWorkspaces(data);
  // console.log(data);

  return (
    <div className="flex relative">
      <MainPageSideBar />
      <Outlet context={data} />
    </div>
  );
};

export default WorkspaceLayout;
