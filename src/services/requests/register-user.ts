import apiClients from "../api-clients";

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
  apiClients.post("/accounts/", data).then((res) => res.data);