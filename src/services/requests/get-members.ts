import apiClients from "../api-clients";
import { EndPoints } from "../endpoints";

export interface GetMembersResponse {
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
export const getMembers = (
  workspaceid: number
): Promise<GetMembersResponse[]> =>
  apiClients
    .get(`${EndPoints.GetWorkspaces}${workspaceid}/${EndPoints.GetMembers}`)
    .then((res) => res.data);
