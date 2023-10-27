import apiClients from "../api-clients";

interface PatchProjectRequest {
  workspaceid: number;
  projectid: number;
  name?: string;
}

interface PatchProjectResponse {
  id: number;
  name: string;
}

export const patchProject = (
  data: PatchProjectRequest
): Promise<PatchProjectResponse> => {
  const { workspaceid, projectid, ...request } = data;
  return apiClients
    .patch(`/workspaces/${workspaceid}/projects/${projectid}/`, request)
    .then((res) => res.data);
}
