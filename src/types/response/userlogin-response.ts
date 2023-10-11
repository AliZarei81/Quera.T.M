export interface UserLoginResponse {
  refresh: string;
  access: string;
  user_id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number?: string;
  thumbnail: string;
}