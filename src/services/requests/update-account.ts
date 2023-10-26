import apiClients from "../api-clients";

export interface UpdateUserAccountRequest {
  id: number;
  username?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  thumbnail?: File;
}

export interface UpdateUserAccountResponse {
  id: number;
  username: string;
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
  const formData = new FormData();
  if (request.thumbnail) formData.append("thumbnail", request.thumbnail)
  if (request.email) formData.append("email", request.email)
  if (request.username) formData.append("username", request.username)
  if (request.first_name) formData.append("first_name", request.first_name)
  if (request.last_name) formData.append("last_name", request.last_name)
  if (request.phone_number) formData.append("phone_number", request.phone_number)
  return apiClients.patch(`/accounts/${id}/`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then((res) => res.data);
}