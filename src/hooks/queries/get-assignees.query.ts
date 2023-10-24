import { useQuery } from "react-query";
import { Keys } from "../keys";
import { getAssignees } from "../../services/requests/get-assignees";
import { GetAssigneesResponse } from "../../services/requests/get-assignees";

export const useGetAssignees = (workspaceid: number, projectid: number, boardid: number, taskid:number) => {
  return useQuery<any, any,  GetAssigneesResponse[]>(
    [Keys.GetAssignees, workspaceid, projectid, boardid, taskid],
    () => getAssignees(workspaceid, projectid, boardid, taskid)
  );
}