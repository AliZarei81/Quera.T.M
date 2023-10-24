import apiClients from "../api-clients";

interface CreateProjectRequest {
  workspaceid: number;
  name: string;
}

interface CreateProjectResponse {
  id: number;
  name: string;
}

export const createProject = (data: CreateProjectRequest): Promise<CreateProjectResponse> => {
  const { workspaceid, ...request } = data;
  return apiClients.post(`/workspaces/${workspaceid}/projects/`, request).then((res) => res.data);
}