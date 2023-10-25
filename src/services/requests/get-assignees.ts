import apiClients from "../api-clients";

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

export const getAssignees = (workspaceid: number, projectid: number, boardid: number, taskid: number): Promise<GetAssigneesResponse[]> =>
  apiClients.get(`/workspaces/${workspaceid}/projects/${projectid}/boards/${boardid}/tasks/${taskid}/assignee/`).then(res => res.data)