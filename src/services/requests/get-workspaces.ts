import apiClients from "../api-clients";

export interface GetWorkspaceResponse {
  id: number;
  name: string;
  color: string;
}


export const getWorkspaces = (): Promise<GetWorkspaceResponse[]> =>
  apiClients.get<GetWorkspaceResponse[]>("/workspaces/").then(res => res.data.sort((a, b) => a.id - b.id))