import apiClients from "../api-clients";

export interface ChangeUserPassworRequest {
  old_password: string;
  new_password: string;
  new_password1: string;
}

export interface ChangeUserPassworResponse {
  old_password: string;
  new_password: string;
  new_password1: string;
}

export interface ChangeUserPassworErrorResponse {
  detail?: string[];
  new_password?: string[];
  non_field_errors?: string[];
}

export const changeUserPassword = (data: ChangeUserPassworRequest): Promise<ChangeUserPassworResponse> => {
  return apiClients.put("/accounts/change-password/", data).then((res) => res.data);
}