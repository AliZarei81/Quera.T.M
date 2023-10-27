import { patchWorkspaces } from "./../../services/requests/patch-workspaces";
import { useMutation } from "react-query";
import { Keys } from "../keys";
import { patchProject } from "../../services/requests/edit-project";

export const usePatchProjectMutation = () => {
  return useMutation(patchProject, {
    mutationKey: Keys.PatchProject,
  }
  );
};
