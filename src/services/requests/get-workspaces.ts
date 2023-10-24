import apiClients from "../api-clients";
import { EndPoints } from "../endpoints";

export interface GetWorkspaceResponse {
  id: number;
  name: string;
  color: string;
}


export const getWorkspaces = (): Promise<GetWorkspaceResponse[]> =>
  apiClients.get("/workspaces").then(res => res.data)