import apiClients from "../api-clients";

export interface UpdateUserAccountRequest {
  id: number;
  username?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  thumbnail?: string;
}

export interface UpdateUserAccountResponse {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  thumbnail: string;
}

export interface UpdateUserAccountErrorResponse {
  detail: string;
}

export const updateUserAccount = (data: UpdateUserAccountRequest): Promise<UpdateUserAccountResponse> => {
  const { id, ...request } = data;
  return apiClients.patch(`/accounts/${id}/`, request).then((res) => res.data);
}