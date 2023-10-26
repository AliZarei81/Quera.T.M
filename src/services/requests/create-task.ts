import apiClients from "../api-clients";


interface CreateTaskRequest {
  workspaceid: number;
  projectid: number;
  boardid: number;
  name: string;
  description: string;
  priority: number;
  attachment: File;
  thumbnail: File;
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
  const formData = new FormData();
  formData.append("thumbnail", request.thumbnail);
  formData.append("attachment", request.attachment);
  formData.append("name", request.name);
  formData.append("description", request.description);
  formData.append("order", request.order.toString());
  formData.append("priority", request.priority.toString());
  return apiClients.post(`/workspaces/${workspaceid}/projects/${projectid}/boards/${boardid}/tasks/`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then((res) => res.data);
}