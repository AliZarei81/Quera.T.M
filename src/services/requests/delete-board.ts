import apiClients from "../api-clients";
interface DeleteBoardRequest {
  workspaceid: number;
  projectid: number;
  boardid: number;
}
export const deleteboard = ({ workspaceid, projectid, boardid }: DeleteBoardRequest) =>
  apiClients.delete(`/workspaces/${workspaceid}/projects/${projectid}/boards/${boardid}/`).then((res) => res.data);
