import apiClients from "../api-clients";

interface UserRequest {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  thumbnail: string;
}

interface UserResponse {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  thumbnail: string;
}

export interface AddWorkspaceMembersResponse {
  user: UserResponse;
  is_super_access: boolean;
}

export interface AddWorkspaceMembersRequest {
  workspaceid: number;
  user: UserRequest;
  is_super_access: boolean;
}


export const addWorkspaceMembers = (
  data: AddWorkspaceMembersRequest
): Promise<AddWorkspaceMembersResponse> => {
  const { workspaceid, ...request } = data;
  return apiClients
    .post(`/workspaces/${workspaceid}/members/`, request)
    .then((res) => res.data);
}
