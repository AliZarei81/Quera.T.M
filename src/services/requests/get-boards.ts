import apiClients from "../api-clients";
import { EndPoints } from "../endpoints";

export interface GetBoardsResponse {
  id: number;
  name: string;
  order: number;
  tasks: string;
  tasks_count: string;
  is_archive: boolean;
  color: string;
}


export const getBoards = (workspaceid: number, projectid: number): Promise<GetBoardsResponse[]> =>
 apiClients.get(`${EndPoints.GetWorkspaces}/${workspaceid}${EndPoints.GetProjects}/${projectid}${EndPoints.GetBoards}`).then(res => res.data)