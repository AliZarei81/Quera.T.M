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
