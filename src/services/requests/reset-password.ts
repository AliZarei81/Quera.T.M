import apiClients from "../api-clients";

export interface ResetUserPassworRequest {
  token: string,
  password: string,
  password1: string
}

export interface ResetUserPassworResponse {
  token: string;
}

// export interface ResetUserPassworErrorResponse {
//   detail?: string[];
//   email?: string[];
// }

export const resetUserPassword = (data: ResetUserPassworRequest): Promise<ResetUserPassworResponse> => {
  return apiClients.patch("/accounts/reset-password/set-password/", data).then((res) => res.data);
}