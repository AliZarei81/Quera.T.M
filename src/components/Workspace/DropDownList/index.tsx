import React, { useState } from "react";
import { FaSquare } from "react-icons/fa";
import { GetProjectsResponse } from "../../../services/requests/get-projects";
import { useQuery } from "react-query";
import { Keys } from "../../../hooks/keys";
import DropDownItem from "../DropDownItem";
import Button from "../../Common/Button";
import WorkSpaceColumnMore from "../WorkSpaceColumnMore";
import CreateNewProject from "../../Common/Modal/CreateNewPoject";

interface IDropDownList {
  id: number;
  name: string;
  color: string;
}

const DropDownList: React.FC<IDropDownList> = ({
  id,
  name,
  color,
}): React.JSX.Element => {
  const { data: projects } = useQuery<GetProjectsResponse[]>({
    queryKey: [Keys.GetProjects, id],
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between gap-[8px] hover:bg-gray-secondary rounded-md px-xs py-[5px]">
        <Button
          title={name}
          icon={<FaSquare style={{ color }} />}
          onClick={() => setIsOpen(!isOpen)}
        />
        <WorkSpaceColumnMore workspaceid={id} />
      </div>
      {isOpen && (
        <div className="flex flex-col gap-s static">
          <Button
            type="button"
            disabled={false}
            className="h-[38px] mt-m w-full justify-center p-[10px] text-green-button border-[2px] border-green-button text-[16px] rounded-[6px] "
            title="ساختن پروژه جدید"
            onClick={() => setIsVisible(true)}
          />
          {projects?.map((project) => (
            <DropDownItem
              projectid={project.id}
              workspaceid={id}
              key={project.id}
              name={project.name}
              to={`/workspace/${id}/project/${project.id}`}
            />
          ))}
        </div>
      )}
      <CreateNewProject
        workspaceid={id}
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
      />
    </>
  );
};

export default DropDownList;
