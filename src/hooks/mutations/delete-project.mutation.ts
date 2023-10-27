import { useMutation } from "react-query";
import { Keys } from "../keys";
import { deleteProject } from "../../services/requests/delete-project";

export const useDeleteProjectMutation = () => {
  return useMutation(deleteProject, { mutationKey: Keys.DeleteWorkspsce });
};
