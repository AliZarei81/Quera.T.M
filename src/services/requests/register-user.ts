import apiClients from "../api-clients";
import { EndPoints } from "../endpoints";

export interface UserRegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface UserRegisterResponse {
  id: number;
  username: string;
  email: string;
}

export interface UserRegisterErrorResponse {
  username?: string[];
  email?: string[];
  password?: string[];
}

export const registerUser = (data: UserRegisterRequest): Promise<UserRegisterResponse> =>
  apiClients.post(EndPoints.Register, data).then((res) => res.data);