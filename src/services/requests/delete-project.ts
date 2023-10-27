import apiClients from "../api-clients";
interface DeleteWorkspsceRequest {
  workspaceid: number;
  projectid: number;
}
export const deleteProject = ({ workspaceid, projectid }: DeleteWorkspsceRequest) =>
  apiClients.delete(`/workspaces/${workspaceid}/projects/${projectid}/`).then((res) => res.data);
