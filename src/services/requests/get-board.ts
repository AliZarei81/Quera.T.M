import apiClients from "../api-clients";
import { EndPoints } from "../endpoints";

export interface GetBoardResponse {
  id: number;
  name: string;
  order: number;
  tasks: string;
  tasks_count: string;
  is_archive: boolean;
  color: string;
}


export const getBoard = (workspaceid: number, projectid: number , boardid: number): Promise<GetBoardResponse[]> =>
  apiClients.get(`${EndPoints.GetWorkspaces}/${workspaceid}${EndPoints.GetProjects}/${projectid}${EndPoints.GetBoards}/${boardid}`).then(res => res.data)