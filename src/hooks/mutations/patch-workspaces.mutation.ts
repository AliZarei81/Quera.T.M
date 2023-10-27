import { patchWorkspaces } from "./../../services/requests/patch-workspaces";
import { useMutation } from "react-query";
import { Keys } from "../keys";
import { PatchWorkspacesResponse } from "../../types/response/patchworkspaces.response.dto";

export const usePatchWorkspacesMutation = () => {
  return useMutation(patchWorkspaces, {
    mutationKey: Keys.PatchWorkspaces,
  }
  );
};
