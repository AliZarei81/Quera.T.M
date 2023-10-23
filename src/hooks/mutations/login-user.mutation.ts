import { useMutation } from "react-query"
import { Keys } from "../keys"
import { loginUser } from "../../services/requests/login-user"

export const useLoginMutation = () => {
  return useMutation(loginUser, {
    mutationKey: Keys.Login
  })
}