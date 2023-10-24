import apiClients from "../api-clients";
import { EndPoints } from "../endpoints";

interface PostWorkspaceResponse {
  id: number;
  name: string;
  color: string;
}

export const PostWorkspaces = (): Promise<PostWorkspaceResponse[]> =>
  apiClients.get(EndPoints.PostWorkspaces).then((res) => res.data);
