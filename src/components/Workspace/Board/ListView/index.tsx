import ListViewDropDown from "../ListViewDropDown";
import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { LuPlusSquare } from "react-icons/lu";
import Button from "../../../Common/Button";
import NewTask from "../../../Common/Modal/NewTask";
import CreateTask from "../../../Common/CreateTask";

interface iListView {
  project: string;
}

const ListView: React.FC<iListView> = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newTaskModal, setNewTaskModal] = useState(false);

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
        <div>{project}</div>
      </div>
      {isOpen && (
        <div className="flex-col justify-between mr-[23px] w-[1011px]">
          <ListViewDropDown
            title="Pending"
            color="bg-light-pink"
          ></ListViewDropDown>
          <ListViewDropDown
            title="in Progress"
            color="bg-orange-primary"
          ></ListViewDropDown>
          <ListViewDropDown
            title="Done"
            color="bg-green-primary"
          ></ListViewDropDown>
        </div>
      )}
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
    </>
  );
};

export default ListView;
