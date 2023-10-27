import { patchWorkspaces } from "./../../services/requests/patch-workspaces";
import { useMutation } from "react-query";
import { Keys } from "../keys";
import { patchBoard } from "../../services/requests/edit-board";

export const usePatchBoardMutation = () => {
  return useMutation(patchBoard, {
    mutationKey: Keys.PatchBoard,
  }
  );
};
