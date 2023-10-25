import { useMutation } from "react-query";
import { Keys } from "../keys";
import { createBoard } from "../../services/requests/create-board";

export const useCreateBoardMutation = () => {
  return useMutation(createBoard, {
    mutationKey: Keys.CreateBoard
  })
}