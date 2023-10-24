import { useMutation } from "react-query";
import { Keys } from "../keys";
import { resetUserPassword } from "../../services/requests/reset-password";

export const useResetPasswordMutation = () => {
  return useMutation(resetUserPassword, {
    mutationKey: Keys.ResetPassword
  })
}