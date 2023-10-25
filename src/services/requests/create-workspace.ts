import apiClients from "../api-clients";

interface CreateWorkspaceRequest {
  name: string;
  color: string
}

interface CreateWorkspaceResponse {
  id: number;
  name: string;
  color: string;
}

export const createWorkspace = (data: CreateWorkspaceRequest): Promise<CreateWorkspaceResponse[]> =>
  apiClients.post("/workspaces/", data).then((res) => res.data);
