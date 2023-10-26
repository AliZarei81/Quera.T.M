import { useMutation } from "react-query";
import { Keys } from "../keys";
import { subscriptions } from "../../services/requests/subscriptions";

export const useSubscriptionsMutation = () => {
  return useMutation(subscriptions, {
    mutationKey: Keys.Subscriptions
  })
}