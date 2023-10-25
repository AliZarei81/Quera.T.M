import apiClients from "../api-clients";

export interface GetBoardResponse {
  id: number;
  name: string;
  order: number;
  tasks: string;
  tasks_count: string;
  is_archive: boolean;
  color: string;
}


export const getBoard = (workspaceid: number, projectid: number, boardid: number): Promise<GetBoardResponse> =>
  apiClients.get<GetBoardResponse>(`/workspaces/${workspaceid}/projects/${projectid}/boards/${boardid}/`).then(res => res.data)