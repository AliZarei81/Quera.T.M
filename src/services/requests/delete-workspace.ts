import apiClients from "../api-clients";
interface DeleteWorkspsceRequest {
  workspaceid: number;
}
export const deleteWorkspace = ({ workspaceid }: DeleteWorkspsceRequest) =>
  apiClients.delete(`/workspaces/${workspaceid}/`).then((res) => res.data);
