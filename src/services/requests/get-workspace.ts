import apiClients from "../api-clients";

interface GetWorkspaceResponse {
  id: number;
  name: string;
  color: string;
}

export const getWorkspace = (
  workspaceid: number
): Promise<GetWorkspaceResponse> =>
  apiClients
    .get(`/workspaces/${workspaceid}/`)
    .then((res) => res.data);
