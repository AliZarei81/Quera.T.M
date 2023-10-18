import React, { useState } from "react";
import { Column as ColumnType, Task } from "./TaskBoard";
import { TaskItem } from "./TaskItem";
import { PiPlusSquareBold } from "react-icons/pi";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "../../../Common/Button";
import BoardColumnMore from "../../BoardColumnMore";

interface ColumnProps {
  column: ColumnType;
  handleAddTask: () => void;
}

export const Column: React.FC<ColumnProps> = ({ column, handleAddTask }) => {
  const [tasks, setTasks] = useState<Task[]>(column.tasks);

  const addTask = (title: string, description: string) => {
    const newTask: Task = {
      id: tasks.length + 1,
      title,
      description,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className=" flex flex-col items-center space-y-4 bg-gray-200 p-4 rounded gap-s">
      <h2 className=" group flex justify-between items-center text-2xl font-bold w-[250px] h-[44px] border-t-2 border-brand-primary shadow-md rounded-2xl pr-s">
        {column.title}

        <div className="group-hover:visible invisible flex flex-row gap-xs pl-xs">
          <BoardColumnMore />
          <Button
            title=""
            disabled={false}
            type="button"
            icon={<AiOutlinePlus />}
            onClick={handleAddTask}
            className="font-iran-yekan flex justify-center "
          />
        </div>
      </h2>

      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}

      <Button
        title="ساختن تسک جدید"
        disabled={false}
        type="button"
        icon={<PiPlusSquareBold />}
        onClick={handleAddTask}
        className="font-iran-yekan flex justify-center text-brand-primary border-2 px-4 p-[8px , 12px , 8px , 12px] rounded-lg w-[250px] h-[40px] hover:bg-[#dedede] "
      ></Button>
    </div>
  );
};

export default Column;
