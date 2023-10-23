import apiClients from "../api-clients";
import { EndPoints } from "../endpoints";

interface GetWorkspaceResponse {
  id: number;
  name: string;
  color: string;
}


export const getWorkspaces = (): Promise<GetWorkspaceResponse[]> =>
  apiClients.get(EndPoints.GetWorkspaces).then(res => res.data)