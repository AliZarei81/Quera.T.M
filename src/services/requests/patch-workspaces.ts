import apiClients from "../api-clients";
import { EndPoints } from "../endpoints";

interface PatchWorkspaceResponse {
  id: number;
  name: string;
  color: string;
}

export const PatchWorkspaces = (
  patchworkspacesid: number
): Promise<PatchWorkspaceResponse> =>
  apiClients
    .get(`${EndPoints.PatchWorkspaces}${patchworkspacesid}/`)
    .then((res) => res.data);
