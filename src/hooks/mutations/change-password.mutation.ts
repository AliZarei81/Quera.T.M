import { useMutation } from "react-query";
import { Keys } from "../keys";
import { changeUserPassword } from "../../services/requests/change-password";

export const useChangePasswordMutation = () => {
  return useMutation(changeUserPassword, {
    mutationKey: Keys.ChangePassword
  })
}