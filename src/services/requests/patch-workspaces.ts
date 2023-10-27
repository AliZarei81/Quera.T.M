import apiClients from "../api-clients";

interface PatchWorkspaceRequest {
  workspaceid: number;
  name?: string;
  color?: string;
}

interface PatchWorkspaceResponse {
  id: number;
  name: string;
  color: string;
}

export const patchWorkspaces = (
  data: PatchWorkspaceRequest
): Promise<PatchWorkspaceResponse> => {
  const { workspaceid, ...request } = data;
  return apiClients
    .patch(`/workspaces/${workspaceid}/`, request)
    .then((res) => res.data);
}
