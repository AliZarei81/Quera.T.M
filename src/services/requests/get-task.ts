import apiClients from "../api-clients";
import { EndPoints } from "../endpoints";

export interface GetTaskResponse {
    id: number;
    name: string;
    description: string;
    deadline: string;
    priority: number;
    attachment: string;
    thumbnail: string;
    order: number;
    members: string;
    created_at: string;
}



export const getTask = (workspaceid: number, projectid: number , boardid: number, taskid:number): Promise<GetTaskResponse[]> =>
  apiClients.get(`${EndPoints.GetWorkspaces}/${workspaceid}${EndPoints.GetProjects}/${projectid}${EndPoints.GetBoards}/${boardid}${EndPoints.GetTasks}/${taskid}`).then(res => res.data)