import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../../Common/Button";
import { PiPlusSquareBold } from "react-icons/pi";
import apiClients from "../../../services/api-clients";
import { GetWorkspacesResponse } from "../../../types/response/getworkspaces.response.dto";
import CreateNewProject from "../../Common/Modal/CreateNewPoject";
import { AddProjectRequest } from "../../../types/request/addproject.request.dto";
import { AddProjectReponse } from "../../../types/response/addproject.response.dto";
import { useGetWorkspaces } from "../../../hooks/queries/get-workspaces.query";

interface Project {
  id: number;
  name: string;
}

interface Workspace {
  id: number;
  name: string;
  color: string;
  projects: Project[];
}

const getWorkspaceWithProjects = async (): Promise<Workspace[] | undefined> => {
  try {
    const res = await apiClients.get<GetWorkspacesResponse[]>("/workspaces/");
    const workspaces: Workspace[] = [];
    for (let index = 0; index < res.data.length; index++) {
      const workspace = res.data[index];
      const response = await apiClients.get<GetWorkspacesResponse[]>(
        `/workspaces/${workspace.id}/projects/`
      );
      workspaces.push({
        id: workspace.id,
        name: workspace.name,
        color: workspace.color,
        projects: response.data,
      });
    }
    return workspaces;
  } catch (err) {
    console.log(err);
  }
};

const Main: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const data = useOutletContext<GetWorkspacesResponse[]>();
  console.log("data", data);

  // const [project, setProject] = useState("");
  // const [workspaceID, setWorkspaceID] = useState<number>(-1);
  // const [workspaces, setWorkspaces] = useState<Workspace[]>([]);

  // useEffect(() => {
  //   getWorkspaceWithProjects().then((data) => {
  //     if (data) {
  //       setWorkspaces(data);
  //     }
  //   });
  // }, []);

  // const addNewProject = async () => {
  //   const createdProject = await addProjectToAWorkspace(workspaceID, project);
  //   if (createdProject) {
  //     setWorkspaces((prevWorkspaces) => {
  //       return prevWorkspaces.map((workspace) => {
  //         if (workspace.id === workspaceID) {
  //           return {
  //             ...workspace,
  //             projects: [...workspace.projects, createdProject],
  //           };
  //         }
  //         return workspace;
  //       });
  //     });
  //     setWorkspaceID(-1);
  //     setProject("");
  //     setIsVisible(false);
  //   }
  // };

  return (
    <>
      <div className="h-screen w-full my-xl mr-xl">
        <div className="h-screen flex flex-col justify-stretch gap-m scroll-auto">
          {data?.map((workspace) => {
            return (
              <div className="flex flex-col gap-m" key={workspace.id}>
                <h1 className="text-heading-s font-extrabold text-gray-darker justify-self-start">
                  {workspace.name}
                </h1>
                <div className="flex gap-l">
                  {/* <Button
                    title="ساختن پروژه جدید"
                    icon={<PiPlusSquareBold size={24} />}
                    className="w-[200px] px-xs py-m text-body-s text-red-primary border-red-primary border-2 rounded-2xl justify-center"
                    onClick={() => {
                      setWorkspaceID(workspace.id);
                      setIsVisible(true);
                    }}
                  />
                  {workspace.projects.length > 0 &&
                    workspace.projects.map((project) => {
                      return (
                        <Button
                          key={project.id}
                          title={project.name}
                          className={`w-[200px] justify-center text-body-m font-extrabold shadow-[0px_3px_4px_0px_rgba(0, 0, 0, 0.20)] text-white rounded-2xl`}
                          bgColor={workspace.color}
                        />
                      );
                    })} */}
                </div>
                <hr className="text-gray-secondary" />
              </div>
            );
          })}
        </div>
      </div>
      {/* <CreateNewProject
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
        project={project}
        handleProjectNameChange={(event) => {
          setProject(event.target.value);
        }}
        handleSubmit={addNewProject}
      /> */}
    </>
  );
};

export default Main;
