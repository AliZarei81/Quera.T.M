import { useQuery } from "react-query"
import { getWorkspaces } from "../../services/requests/get-workspaces"
import { Keys } from "../keys";
import { GetWorkspacesResponse } from "../../types/response/getworkspaces.response.dto";

export const useGetWorkspaces = () => {
  return useQuery<any, any, GetWorkspacesResponse[]>(
    Keys.GetWorkspaces,
    getWorkspaces
  );
}