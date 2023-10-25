import { useQuery } from "react-query"
import { GetWorkspaceResponse, getWorkspaces } from "../../services/requests/get-workspaces"
import { Keys } from "../keys";

export const useGetWorkspaces = () => {
  return useQuery<any, any, GetWorkspaceResponse[]>(
    Keys.GetWorkspaces,
    getWorkspaces
  );
};
