import apiClients from "../api-clients";

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



export const getTask = (workspaceid: number, projectid: number, boardid: number, taskid: number): Promise<GetTaskResponse[]> =>
  apiClients.get(`/workspaces/${workspaceid}/projects/${projectid}/boards/${boardid}/tasks/${taskid}`).then(res => res.data)