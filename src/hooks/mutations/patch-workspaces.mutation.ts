import { PatchWorkspaces } from "./../../services/requests/patch-workspaces";
import { useMutation } from "react-query";
import { Keys } from "../keys";
import { PatchWorkspacesResponse } from "../../types/response/patchworkspaces.response.dto";

export const usePatchWorkspacesMutation = (patcchworkspacesid: number) => {
  return useMutation<any, any, PatchWorkspacesResponse>(
    [Keys.PatchWorkspaces, patcchworkspacesid],
    () => PatchWorkspaces(patcchworkspacesid)
  );
};
