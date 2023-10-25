import apiClients from "../api-clients";

export interface GetProjectResponse {
  id: number;
  name: string;
}


export const getProject = (workspaceid: number, projectid: number): Promise<GetProjectResponse> =>
  apiClients.get<GetProjectResponse>(`/workspaces/${workspaceid}/projects/${projectid}/`).then(res => res.data)