import { useMutation } from "react-query"
import { registerUser } from "../../services/requests/register-user"
import { Keys } from "../keys"

export const useRegisterMutation = () => {
  return useMutation(registerUser, {
    mutationKey: Keys.Register
  })
}