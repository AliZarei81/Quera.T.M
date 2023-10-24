import { useMutation } from "react-query";
import { Keys } from "../keys";
import { createProject } from "../../services/requests/create-project";

export const useCreateProjectMutation = () => {
  return useMutation(createProject, {
    mutationKey: Keys.CreateProject
  })
}