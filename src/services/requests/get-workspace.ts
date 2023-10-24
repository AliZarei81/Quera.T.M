import apiClients from "../api-clients";
import { EndPoints } from "../endpoints";

interface GetWorkspaceResponse {
  id: number;
  name: string;
  color: string;
}

export const getWorkspace = (
  workspaceid: number
): Promise<GetWorkspaceResponse> =>
  apiClients
    .get(`${EndPoints.GetWorkspaces}${workspaceid}/`)
    .then((res) => res.data);
