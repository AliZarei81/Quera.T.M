import React, { useState } from "react";
import Column from "./Column";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "../../../Common/Button";
import { LuPlusSquare } from "react-icons/lu";
import CreateTask from "../../../Common/CreateTask";
import CreateNewBoard from "../../../Common/Modal/CreateNewBoard";
import { useGetBoards } from "../../../../hooks/queries/get-boards.query";
import { useParams } from "react-router-dom";

export interface Task {
  id: number;
  title: string;
  description: string;
  image?: string;
  priority: number;
  deadline: string;
}

export interface Column {
  title: string;
  color: string;
}

export const TaskBoard: React.FC = () => {
  const [newTaskModal, setNewTaskModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { workspaceid, projectid } = useParams();
  const workspaceidNumber = workspaceid ? Number(workspaceid) : 0;
  const projectidNumber = projectid ? Number(projectid) : 0;
  const { data: boards } = useGetBoards(workspaceidNumber, projectidNumber);
  const [boardID, setBoardID] = useState(0);

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
          {boards?.map((board) => (
            <Column
              workspaceid={workspaceidNumber}
              projectid={projectidNumber}
              boardid={board.id}
              key={board.id}
              column={{
                title: board.name,
                color: board.color,
              }}
              handleAddTask={() => {
                setBoardID(board.id);
                setNewTaskModal(true);
              }}
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
        workspaceid={workspaceidNumber}
        projectid={projectidNumber}
        boardid={boardID}
        isOpen={newTaskModal}
        handleClose={() => setNewTaskModal(false)}
      />
      <CreateNewBoard
        projectid={projectidNumber}
        workspaceid={workspaceidNumber}
        order={boardID}
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
      />
    </>
  );
};
export default TaskBoard;
