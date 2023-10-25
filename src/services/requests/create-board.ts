import apiClients from "../api-clients";


interface CreateBoardRequest {
  workspaceid: number;
  projectid: number;
  name: string,
  order: number,
  is_archive: boolean,
  color: string
}

interface CreateBoardResponse {
  id: number;
  name: string;
  order: number;
  tasks: string;
  tasks_count: string;
  is_archive: boolean;
  color: string;
}

export const createBoard = (data: CreateBoardRequest): Promise<CreateBoardResponse> => {
  const { workspaceid, projectid, ...request } = data;
  return apiClients.post(`/workspaces/${workspaceid}/projects/${projectid}/boards/`, request).then((res) => res.data);
}