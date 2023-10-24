import { useMutation } from "react-query";
import { Keys } from "../keys"
import { updateUserAccount } from "../../services/requests/update-account"

export const useUpdateAccountMutation = () => {
  return useMutation(updateUserAccount, {
    mutationKey: Keys.UpdateAccount
  })
}