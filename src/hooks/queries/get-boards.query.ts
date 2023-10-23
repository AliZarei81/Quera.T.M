import { useQuery } from "react-query";
import { Keys } from "../keys";
import { GetBoardsResponse, getBoards } from "../../services/requests/get-boards";

export const useGetBoards = (workspaceid: number, projectid: number) => {
  return useQuery<any, any, GetBoardsResponse[]>(
    [Keys.GetBoards, workspaceid, projectid],
    () => getBoards(workspaceid, projectid)
  );
}