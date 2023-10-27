import apiClients from "../api-clients";

interface PatchBoardRequest {
  workspaceid: number;
  projectid: number;
  boardid: number;
  name?: string;
}

interface PatchBoardResponse {
  id: number;
  name: string;
  color: string;
}

export const patchBoard = (
  data: PatchBoardRequest
): Promise<PatchBoardResponse> => {
  const { workspaceid, projectid, boardid, ...request } = data;
  return apiClients
    .patch(`/workspaces/${workspaceid}/projects/${projectid}/boards/${boardid}/`, request)
    .then((res) => res.data);
}
