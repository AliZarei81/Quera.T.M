import apiClients from "../api-clients";
import { EndPoints } from "../endpoints";

export interface GetAssigneesResponse {
  user: User;
}

interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  thumbnail: string;
}

export const getAssignees = (workspaceid: number, projectid: number , boardid: number, taskid:number): Promise<GetAssigneesResponse[]> =>
  apiClients.get(`${EndPoints.GetWorkspaces}/${workspaceid}${EndPoints.GetProjects}/${projectid}${EndPoints.GetBoards}/${boardid}${EndPoints.GetTasks}/${taskid}${EndPoints.GetAssignee}`).then(res => res.data)