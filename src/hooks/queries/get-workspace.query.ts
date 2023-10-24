import { useQuery } from "react-query";
import { Keys } from "../keys";
import { getWorkspace } from "../../services/requests/get-workspace";
import { GetWorkspacesResponse } from "../../types/response/getworkspaces.response.dto";

export const useGetWorkspace = (workspaceid: number) => {
  return useQuery<any, any, GetWorkspacesResponse>(
    [Keys.GetWorkspace, workspaceid],
    () => getWorkspace(workspaceid)
  );
};
