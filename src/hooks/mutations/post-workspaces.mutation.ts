import { PostWorkspaces } from "./../../services/requests/post-workspaces";
import { useMutation } from "react-query";
import { Keys } from "../keys";

export const usePostWorkspacesMutation = () => {
  return useMutation(PostWorkspaces, {
    mutationKey: Keys.PostWorkspaces,
  });
};
