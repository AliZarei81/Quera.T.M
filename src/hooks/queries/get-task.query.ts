import { useQuery } from "react-query";
import { Keys } from "../keys";
import { GetTaskResponse, getTask } from "../../services/requests/get-task";

export const useGetTask = (workspaceid: number, projectid: number, boardid: number, taskid:number) => {
  return useQuery<any, any, GetTaskResponse[]>(
    [Keys.GetTasks, workspaceid, projectid, boardid, taskid],
    () => getTask(workspaceid, projectid, boardid, taskid)
  );
}