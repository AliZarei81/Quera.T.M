import apiClients from "../api-clients";

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
  apiClients.get<GetBoardsResponse[]>(`/workspaces/${workspaceid}/projects/${projectid}/boards/`).then(res => res.data.sort((a, b) => a.id - b.id))