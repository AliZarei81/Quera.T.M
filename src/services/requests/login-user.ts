import apiClients from "../api-clients";
import { EndPoints } from "../endpoints";

export interface UserLoginRequest {
  username: string;
  password: string;
}

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

export interface UserLoginErrorReponse {
  detail: string
}

export const loginUser = (data: UserLoginRequest): Promise<UserLoginResponse> =>
  apiClients.post(EndPoints.Login, data).then((res) => res.data);