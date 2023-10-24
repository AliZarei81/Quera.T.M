import apiClients from "../api-clients";

export interface GetProjectsResponse {
  id: number;
  name: string;
}


export const getProjects = (workspaceid: number): Promise<GetProjectsResponse[]> =>
  apiClients.get(`/workspaces/${workspaceid}/projects/`).then(res => res.data)