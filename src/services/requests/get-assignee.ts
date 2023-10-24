import apiClients from "../api-clients";
import { EndPoints } from "../endpoints";

export interface GetAssigneeResponse {
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

export const getAssignee = (workspaceid: number, projectid: number , boardid: number, taskid:number, assigneeid: number): Promise<GetAssigneeResponse[]> =>
  apiClients.get(`${EndPoints.GetWorkspaces}/${workspaceid}${EndPoints.GetProjects}/${projectid}${EndPoints.GetBoards}/${boardid}${EndPoints.GetTasks}/${taskid}${EndPoints.GetAssignee}/ ${assigneeid}`).then(res => res.data)