import apiClients from "../api-clients";

export interface ForgotUserPassworRequest {
  email: string;
}

export interface ForgotUserPassworResponse {
  email: string;
}

export interface ForgotUserPassworErrorResponse {
  detail?: string[];
  email?: string[];
}

export const forgotUserPassword = (data: ForgotUserPassworRequest): Promise<ForgotUserPassworResponse> => {
  return apiClients.post("/accounts/reset-password/", data).then((res) => res.data);
}