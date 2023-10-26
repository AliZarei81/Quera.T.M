import { useMutation } from "react-query";
import { Keys } from "../keys";
import { deleteWorkspace } from "../../services/requests/delete-workspace";

export const useDeleteWorkspacesMutation = () => {
  return useMutation(deleteWorkspace, { mutationKey: Keys.DeleteWorkspsce });
};
