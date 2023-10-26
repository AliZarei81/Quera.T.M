import React, { useState } from "react";
import jalaliMoment from "jalali-moment";
import { Task } from "./TaskBoard";
import { BsFlag } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { MdDone } from "react-icons/md";
import Button from "../../../Common/Button";
import { locale } from "moment";
interface TaskItemProps {
  task: Task;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const [isClicked, setIsClicked] = useState(false);
  const priorityOptions = [
    { color: "#FA5252", text: "فوری", priority: 1 },
    { color: "#FAB005", text: "بالا", priority: 2 },
    { color: "#15AABF", text: "متوسط", priority: 3 },
    { color: "#82C91E", text: "پایین", priority: 4 },
    { color: "#C1C1C1", text: "حذف اولویت", priority: 5 },
  ];
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div
      className="bg-white p-4 rounded-2xl shadow-lg  p-s gap-s w-[250px] "
      onClick={handleClick}
    >
      {task.image && (
        <div className="w-[218px] h-[134px]">
          <img
            src={"https://quera.iran.liara.run/" + task.image}
            alt="thumbnail"
            className="rounded-[4px] bg-cover w-[218px] h-[134px]"
          />
        </div>
      )}
      <div className="mt-l  w-[185px] ">
        <h3 className=" text-[16px] text-gray-primary font-normal pb-xs ">
          {task.title}
        </h3>
        <p className="font-iran-yekan  text-[16px] font-normal">
          {task.description}
        </p>
      </div>
      <div className="w-[133px] pt-[12px] flex justify-start items-center gap-xs">
        <BsFlag
          color={
            priorityOptions.find((item) => item.priority === task.priority)
              ?.color
          }
          size={20}
        />
        <p className="font-iran-yekan">
          {new Date(task.deadline).toLocaleDateString("fa")}
        </p>
      </div>
      <div className="w-[91px] flex justify-start items-center gap-xs pt-s">
        <p className="font-iran-yekan w-[70px] p-[3px] text-blue-primary bg-cyan-secondary rounded-[14px] flex items-center justify-center">
          درس
        </p>
        <p className="font-iran-yekan w-[70px] p-[3px] text-grape-primary bg-grape-secondary rounded-[14px] flex items-center justify-center">
          پروژه
        </p>
      </div>
      {isClicked && (
        <div className="mt-s pt-s w-[218px] border-t-[1px] border-gray-primary flex justify-between items-center">
          <MdDone />
          <Button
            title=""
            disabled={false}
            type="button"
            icon={<BsThreeDots />}
            className="font-iran-yekan flex justify-end"
          ></Button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
