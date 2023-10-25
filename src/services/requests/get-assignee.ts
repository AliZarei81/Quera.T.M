import apiClients from "../api-clients";

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

export const getAssignee = (workspaceid: number, projectid: number, boardid: number, taskid: number, assigneeid: number): Promise<GetAssigneeResponse[]> =>
  apiClients.get(`/workspaces/${workspaceid}/projects/${projectid}/boards/${boardid}/tasks/${taskid}/assignee/${assigneeid}/`).then(res => res.data)