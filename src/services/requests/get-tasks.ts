import apiClients from "../api-clients";
import { EndPoints } from "../endpoints";

export interface GetTasksResponse {
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



export const getTasks = (workspaceid: number, projectid: number , boardid: number): Promise<GetTasksResponse[]> =>
  apiClients.get(`${EndPoints.GetWorkspaces}/${workspaceid}${EndPoints.GetProjects}/${projectid}${EndPoints.GetBoards}/${boardid}${EndPoints.GetTasks}`).then(res => res.data)