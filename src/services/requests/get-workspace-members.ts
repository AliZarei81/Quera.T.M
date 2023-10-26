import apiClients from "../api-clients";

export interface GetWorkspaceMembersResponse {
  user: User;
  is_super_access: boolean;
}

interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  thumbnail: string;
}

export const getWorkspaceMembers = (
  workspaceid: number
): Promise<GetWorkspaceMembersResponse[]> =>
  apiClients
    .get<GetWorkspaceMembersResponse[]>(`/workspaces/${workspaceid}/members/`)
    .then((res) => res.data);
