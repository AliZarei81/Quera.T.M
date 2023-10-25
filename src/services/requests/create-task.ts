import apiClients from "../api-clients";


interface CreateTaskRequest {
  workspaceid: number;
  projectid: number;
  boardid: number;
  name: string;
  description: string;
  priority: number;
  attachment: string;
  thumbnail: string;
  order: number;
}


interface CreateTaskResponse {
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

export const createTask = (data: CreateTaskRequest): Promise<CreateTaskResponse> => {
  const { workspaceid, projectid, boardid, ...request } = data;
  return apiClients.post(`/workspaces/${workspaceid}/projects/${projectid}/boards/${boardid}/tasks/`, request).then((res) => res.data);
}