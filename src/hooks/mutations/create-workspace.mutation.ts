import { useMutation } from "react-query";
import { Keys } from "../keys";
import { createWorkspace } from "../../services/requests/create-workspace";

export const useCreateWorkspaceMutation = () => {
  return useMutation(createWorkspace, {
    mutationKey: Keys.PostWorkspaces,
  });
};
