import { useMutation } from "react-query";
import { Keys } from "../keys";
import { createTask } from "../../services/requests/create-task";

export const useCreateTaskMutation = () => {
  return useMutation(createTask, {
    mutationKey: Keys.CreateTask
  })
}