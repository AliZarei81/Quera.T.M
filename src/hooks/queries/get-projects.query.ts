import { useQuery } from "react-query";
import { Keys } from "../keys";
import { getProjects } from "../../services/requests/get-projects";

export const useGetProjects = (workspaceid: number) => {
  return useQuery(
    [Keys.GetProjects, workspaceid],
    () => getProjects(workspaceid)
  );
}