import { useMutation } from "react-query";
import { Keys } from "../keys";
import { addWorkspaceMembers } from "../../services/requests/add-workspace-member";

export const useAddWorkspaceMemberMutation = () => {
  return useMutation(addWorkspaceMembers, {
    mutationKey: Keys.AddWorkspaceMember
  })
}