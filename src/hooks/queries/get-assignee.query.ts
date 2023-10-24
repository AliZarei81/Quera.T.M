import { useQuery } from "react-query";
import { Keys } from "../keys";
import { GetAssigneeResponse } from "../../services/requests/get-assignee";
import { getAssignee } from "../../services/requests/get-assignee";
export const useGetAssignee = (workspaceid: number, projectid: number, boardid: number, taskid:number, assigneeid: number) => {
  return useQuery<any, any,  GetAssigneeResponse[]>(
    [Keys.GetAssignees, workspaceid, projectid, boardid, taskid, assigneeid],
    () => getAssignee(workspaceid, projectid, boardid, taskid, assigneeid)
  );
}