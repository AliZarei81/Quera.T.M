import { useMutation } from "react-query";
import { Keys } from "../keys";
import { forgotUserPassword } from "../../services/requests/forgot-password";

export const useForgotPasswordMutation = () => {
  return useMutation(forgotUserPassword, {
    mutationKey: Keys.ForgotPassword
  })
}