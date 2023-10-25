import { useQuery } from "react-query";
import { Keys } from "../keys";
import { getWorkspace } from "../../services/requests/get-workspace";
import { GetWorkspaceResponse } from "../../services/requests/get-workspaces";

export const useGetWorkspace = (workspaceid: number) => {
  return useQuery<any, any, GetWorkspaceResponse>(
    [Keys.GetWorkspace, workspaceid],
    () => getWorkspace(workspaceid)
  );
};
