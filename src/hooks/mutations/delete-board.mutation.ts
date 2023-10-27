import { useMutation } from "react-query";
import { Keys } from "../keys";
import { deleteboard } from "../../services/requests/delete-board";

export const useDeleteBoardMutation = () => {
  return useMutation(deleteboard, { mutationKey: Keys.DeleteBoard });
};
