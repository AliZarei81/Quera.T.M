import ListViewDropDown from "../ListViewDropDown";
import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { LuPlusSquare } from "react-icons/lu";
import Button from "../../../Common/Button";
import CreateTask from "../../../Common/CreateTask";
import { useQuery } from "react-query";
import { Keys } from "../../../../hooks/keys";
import { GetBoardsResponse } from "../../../../services/requests/get-boards";
import { useParams } from "react-router-dom";

interface iListView {
  projectName: string;
}

const ListView: React.FC<iListView> = ({ projectName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newTaskModal, setNewTaskModal] = useState(false);
  const { workspaceid, projectid } = useParams();
  const workspaceidNumber = workspaceid ? Number(workspaceid) : 0;
  const projectidNumber = projectid ? Number(projectid) : 0;
  const { data: boards } = useQuery<GetBoardsResponse[]>({
    queryKey: [Keys.GetBoards, workspaceidNumber, projectidNumber],
  });

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        onClick={handleDropdownClick}
        className="flex w-[109px] h-[39px] items-center gap-s"
      >
        <IoIosArrowDropdown className="w-[24px] h-[24px]"></IoIosArrowDropdown>
        <div>{projectName}</div>
      </div>
      {isOpen && (
        <div className="flex-col justify-between mr-[23px] w-[1011px]">
          {boards?.map((board) => (
            <ListViewDropDown title={board.name} color={board.color} />
          ))}
        </div>
      )}
      <Button
        title="تسک جدید"
        icon={<LuPlusSquare className="text-white" size={24} />}
        onClick={() => setNewTaskModal(true)}
        className="absolute bottom-l left-xl text-body-s text-white bg-brand-primary rounded-md py-s px-m"
      />
      <CreateTask
        workspaceid={workspaceidNumber}
        projectid={projectidNumber}
        boardid={1}
        isOpen={newTaskModal}
        handleClose={() => setNewTaskModal(false)}
      />
    </>
  );
};

export default ListView;
