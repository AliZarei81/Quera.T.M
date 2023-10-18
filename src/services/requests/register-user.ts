import {
  useMutation,
  useQueryClient
} from 'react-query';
import { useApi } from "../../hooks/useApi";

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

const registerUser = (body: UserRegisterRequest) => {
  const { data, isLoading, error } = useApi<UserRegisterResponse>("/accounts/", { method: "POST", data: body });

  const queryClient = useQueryClient()


  // Mutations
  // const mutation = useMutation(postTodo, {
  //   onSuccess: () => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries('todos')
  //   },
  // })

}