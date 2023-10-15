import ListViewDropDown from "../ListViewDropDown";
import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

interface iListView {
  project: string;
}

const ListView: React.FC<iListView> = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

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
    </>
  );
};

export default ListView;
