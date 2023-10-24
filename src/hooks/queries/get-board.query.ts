import { useQuery } from "react-query";
import { Keys } from "../keys";
import { GetBoardResponse, getBoard } from "../../services/requests/get-board";

export const useGetBoard = (workspaceid: number, projectid: number,  boardid: number) => {
  return useQuery<any, any, GetBoardResponse[]>(
    [Keys.GetBoards, workspaceid, projectid, boardid],
    () => getBoard(workspaceid, projectid, boardid )
  );
}