import apiClients from "../api-clients";

interface PatchWorkspaceResponse {
  id: number;
  name: string;
  color: string;
}

export const PatchWorkspaces = (
  patchworkspacesid: number
): Promise<PatchWorkspaceResponse> =>
  apiClients
    .patch(`/workspaces/${patchworkspacesid}/`)
    .then((res) => res.data);
