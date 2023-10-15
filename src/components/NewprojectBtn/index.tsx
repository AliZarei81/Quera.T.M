import React, { useState } from "react";
import Button from "../Button";
import Link from "../Link";
import { PiPlusSquareBold } from "react-icons/pi";

interface Project {
  title: string;
  url: string;
}

type ProjectsState = Project[];

const NewprojectBtn: React.FC<{}> = () => {
  const [projects, setProjects] = useState<ProjectsState>([]);

  const handleClick = () => {
    const title = prompt("Enter the title for the link:");
    if (title) {
      setProjects(prevProjects => [
        ...prevProjects,
        { title, url: "" },
      ]);
    }
  };

  return (
    <div className="flex flex-row gap-[32px]">
      <div className="w-[200px] h-[80px] pt-[55px]">
        <Button
          title="ساختن پروژه جدید"
          onClick={handleClick}
          disabled={false}
          icon={<PiPlusSquareBold />}
          className=" cursor-pointer w-[200px] h-[80px] px-[10px] py-[26px] flex justify-center rounded-[16px] border-2 border-red-primary gap-[10px] font-iran-yekan text-red-primary"
        />
      </div>

      {projects.map((project, index) => (
        <div className="w-[200px] h-[80px] pt-[55px]" key={index}>
          <Link href={project.url} className="font-iran-yekan text-white text-[16px] font-extrabold w-[200px] h-[80px] bg-gradient-to-r from-[#40C05780] to-[#40C057] shadow-lg rounded-[16px]" title={project.title} />
        </div>
      ))}
    </div>
  );
};

export default NewprojectBtn;