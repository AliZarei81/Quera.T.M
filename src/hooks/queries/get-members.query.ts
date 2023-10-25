import { useQuery } from "react-query";
import { Keys } from "../keys";
import {
  GetMembersResponse,
  getMembers,
} from "../../services/requests/get-members";

export const useGetMembers = (workspaceid: number) => {
  return useQuery<any, any, GetMembersResponse>(
    [Keys.GetMembers, workspaceid],
    () => getMembers(workspaceid)
  );
};
