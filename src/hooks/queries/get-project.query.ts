import { useQuery } from "react-query";
import { Keys } from "../keys";
import { getProject } from "../../services/requests/get-project";

export const useGetProject = (workspaceid: number, projectid: number) => {
  return useQuery(
    [Keys.GetProject, workspaceid, projectid],
    () => getProject(workspaceid, projectid)
  );
}