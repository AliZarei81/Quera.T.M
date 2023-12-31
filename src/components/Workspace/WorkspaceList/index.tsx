import React, { useState } from "react";
import toast from "react-hot-toast";
import { PiPlusSquareBold } from "react-icons/pi";
import Button from "../../Common/Button";
import { useGetProjects } from "../../../hooks/queries/get-projects.query";
import WorkspaceItem from "../WorkspaceItem";
import CreateNewProject from "../../Common/Modal/CreateNewPoject";
import { useCreateProjectMutation } from "../../../hooks/mutations/create-project.mutation";
import { useQueryClient } from "react-query";
import { Keys } from "../../../hooks/keys";
import { Link } from "react-router-dom";

interface IWorkspaceListProps {
  id: number;
  name: string;
  color: string;
}

const WorkspaceList: React.FC<IWorkspaceListProps> = ({
  id,
  name,
  color,
}): React.JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const { data: projects } = useGetProjects(id);
  return (
    <>
      <div className="flex flex-col gap-m">
        <h1 className="text-heading-s font-extrabold text-gray-darker justify-self-start">
          {name}
        </h1>
        <div className="flex gap-l">
          <Button
            title="ساختن پروژه جدید"
            icon={<PiPlusSquareBold size={24} />}
            className="w-[200px] px-xs py-m text-body-s text-red-primary border-red-primary border-2 rounded-2xl justify-center"
            onClick={() => setIsVisible(true)}
          />
          {projects?.map((project) => (
            <WorkspaceItem
              key={project.id}
              to={`/workspace/${id}/project/${project.id}`}
              name={project.name}
              workspaceColor={color}
            />
          ))}
        </div>
        <hr className="text-gray-secondary" />
      </div>
      <CreateNewProject
        workspaceid={id}
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
      />
    </>
  );
};

export default WorkspaceList;
