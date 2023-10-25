import { useQuery } from "react-query";
import { Keys } from "../keys";
import { GetTasksResponse, getTasks } from "../../services/requests/get-tasks";

export const useGetTasks = (workspaceid: number, projectid: number, boardid: number) => {
  return useQuery<any, any, GetTasksResponse[]>(
    [Keys.GetTasks, workspaceid, projectid, boardid],
    () => getTasks(workspaceid, projectid, boardid)
  );
}