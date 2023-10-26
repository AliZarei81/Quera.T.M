import { useQuery } from "react-query";
import { Keys } from "../keys";
import {
  GetWorkspaceMembersResponse,
  getWorkspaceMembers,
} from "../../services/requests/get-workspace-members";

export const useGetWorkspaceMembers = (workspaceid: number) => {
  return useQuery<GetWorkspaceMembersResponse[]>(
    [Keys.GetWorkspaceMembers, workspaceid],
    () => getWorkspaceMembers(workspaceid)
  );
};
