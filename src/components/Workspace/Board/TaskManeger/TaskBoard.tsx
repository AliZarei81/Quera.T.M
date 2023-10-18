import React, { ChangeEvent, useState } from "react";
import Column from "./Column";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "../../../Common/Button";
import { LuPlusSquare } from "react-icons/lu";
import CreateTask from "../../../Common/CreateTask";
import CreateNewBoard from "../../../Common/Modal/CreateNewBoard";
import { title } from "process";

export interface Task {
  id: number;
  title: string;
  description: string;
  image?: string;
}

export interface Column {
  id: number;
  title: string;
  tasks: Task[];
}

export const TaskBoard: React.FC = () => {
  const [newTaskModal, setNewTaskModal] = useState(false);
  const [columns, setColumns] = useState<Column[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [board, setBoard] = useState("");

  const addColumn = () => {
    const newColumn: Column = {
      id: columns.length + 1,
      title: board,
      tasks: [],
    };
    setColumns([...columns, newColumn]);
    setBoard("");
    setIsVisible(false);
  };

  return (
    <>
      <div className="flex flex-row items-start space-y-4 ">
        <div className="flex-shrink-0 items-center w-[250px] h-[44px] shadow-md rounded-2xl pr-s mx-s">
          <Button
            title="ساختن برد جدید"
            onClick={() => setIsVisible(true)}
            disabled={false}
            type="button"
            icon={<AiOutlinePlus />}
            className=" font-iran-yekan text-2xl font-medium w-[250px] h-[44px]"
          ></Button>
        </div>

        <div className="flex space-x-4 gap-x-m">
          {columns.map((column) => (
            <Column
              key={column.id}
              column={column}
              handleAddTask={() => setNewTaskModal(true)}
            />
          ))}
        </div>
      </div>
      <Button
        title="تسک جدید"
        icon={<LuPlusSquare className="text-white" size={24} />}
        onClick={() => setNewTaskModal(true)}
        className="absolute bottom-l left-xl text-body-s text-white bg-brand-primary rounded-md py-s px-m"
      />
      <CreateTask
        isOpen={newTaskModal}
        handleClose={() => setNewTaskModal(false)}
      />
      <CreateNewBoard
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
        board={board}
        handleBoardNameChange={(event) => {
          setBoard(event.target.value);
        }}
        handleSubmit={addColumn}
      />
    </>
  );
};
export default TaskBoard;
