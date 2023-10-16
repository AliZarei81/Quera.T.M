import { useEffect, useState } from "react";
import Button from "../../Common/Button";
import { PiPlusSquareBold } from "react-icons/pi";
import apiClients from "../../../services/api-clients";
import { GetWorkspacesResponse } from "../../../types/response/getworkspaces.response.dto";
import CreateNewProject from "../../Common/Modal/CreateNewPoject";

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
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);

  useEffect(() => {
    getWorkspaceWithProjects().then((data) => {
      if (data) {
        setWorkspaces(data);
      }
    });
  }, []);

  return (
    <>
      <div className="h-screen w-full my-xl mr-xl">
        <div className="h-screen flex flex-col justify-stretch gap-m">
          {workspaces.map((workspace) => {
            return (
              <div className="flex flex-col gap-m" key={workspace.id}>
                <h1 className="text-heading-s font-extrabold text-gray-darker justify-self-start">
                  {workspace.name}
                </h1>
                <div className="flex gap-l">
                  <Button
                    title="ساختن پروژه جدید"
                    icon={<PiPlusSquareBold size={24} />}
                    className="w-2/12 px-xs py-m text-body-s text-red-primary border-red-primary border-2 rounded-2xl justify-center"
                    onClick={() => setIsVisible(true)}
                  />
                  {workspace.projects.length > 0 &&
                    workspace.projects.map((project) => {
                      return (
                        <Button
                          key={project.id}
                          title={project.name}
                          className={`w-2/12 justify-center text-body-m font-extrabold shadow-[0px_3px_4px_0px_rgba(0, 0, 0, 0.20)] text-white rounded-2xl bg-[${workspace.color}] `}
                        />
                      );
                    })}
                </div>
                <hr className="text-gray-secondary" />
              </div>
            );
          })}
        </div>
      </div>
      <CreateNewProject
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
        handleSubmit={() => console.log("test")}
      />
    </>
  );
};

export default Main;
