import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { BsFlag } from "react-icons/bs";
import { BsFlagFill } from "react-icons/bs";
import { BsTextParagraph } from "react-icons/bs";
import { GetTasksResponse } from "../../../../services/requests/get-tasks";
import { Keys } from "../../../../hooks/keys";
import { useQuery } from "react-query";

const items: string[] = ["اعضا", "ددلاین", "الویت", "توضیحات"];

interface iListViewDropDown {
  workspaceid: number;
  projectid: number;
  boardid: number;
  boardColor: string;
  boardTitle: string;
}

const ListViewDropDown: React.FC<iListViewDropDown> = ({
  workspaceid,
  projectid,
  boardid,
  boardColor,
  boardTitle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };
  const { data: tasks } = useQuery<GetTasksResponse[]>({
    queryKey: [Keys.GetTasks, workspaceid, projectid, boardid],
  });
  const priorityOptions = [
    { color: "#FA5252", text: "فوری", priority: 1 },
    { color: "#FAB005", text: "بالا", priority: 2 },
    { color: "#15AABF", text: "متوسط", priority: 3 },
    { color: "#82C91E", text: "پایین", priority: 4 },
    { color: "#C1C1C1", text: "حذف اولویت", priority: 5 },
  ];

  return (
    <div className="flex-col font-iran-yekan w-[1011px]">
      <div className="flex w-[100%] h-[36px] justify-between items-center">
        <div
          onClick={handleDropdownClick}
          className="flex items-center gap-[5px]"
        >
          <IoIosArrowDropdown className="w-[20px] h-[20px]">
            {" "}
          </IoIosArrowDropdown>
          <div
            style={{ backgroundColor: boardColor }}
            className={` text-white w-[100%] h-[100%] pl-[6px] pr-[6px] pt-[4px] pb-[4px] rounded-[4px] justify-start items-start gap-[10px] inline-flex`}
          >
            <div>{boardTitle}</div>
          </div>
          <div className="flex text-[12px] gap-[2px]">
            {tasks?.length}
            <div> تسک </div>
          </div>
        </div>
        <div className="w-[473px] h-[100%] inline-flex justify-between items-center gap-[70px] ">
          {items.map((item, index) => (
            <div className="w-[70px] h-[28px] pl-[10px] pr-[10px] justify-center items-center flex gap-[10px] text-right text-[16px] font-normal capitalize">
              {item}
            </div>
          ))}
        </div>
      </div>

      {isOpen &&
        tasks?.map((task, index) => (
          <div
            key={index}
            className="w-[986px] h-[51px] flex items-center  justify-between text-[12px] mr-[25px] rounded-[4px] "
          >
            <div className="flex items-center text-right font-normal gap-[7px]">
              <div
                style={{ backgroundColor: boardColor }}
                className="w-s h-s rounded-[3px]"
              ></div>
              <div>{task.name}</div>
            </div>

            <div className="w-[473px] h-[100%] inline-flex justify-between items-center gap-[70px] text-right font-normal capitalize ">
              <div className="w-[70px] h-[28px] pl-[10px] pr-[10px] justify-center items-center flex gap-[10px] ">
                {task.members}
              </div>
              <div className="w-[70px]  h-[28px] pl-[10px] pr-[10px] justify-center items-center flex gap-[10px] ">
                {task.deadline}
              </div>
              <div className="w-[70px]  h-[28px] pl-[10px] pr-[10px] justify-center items-center flex gap-[10px] ">
                <BsFlag
                  color={
                    priorityOptions.find(
                      (item) => item.priority === task.priority
                    )?.color
                  }
                  size={20}
                />
              </div>
              <div className="w-[70px]  h-[28px] pl-[10px] pr-[10px] justify-center items-center flex gap-[10px] ">
                {" "}
                <BsTextParagraph></BsTextParagraph>{" "}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ListViewDropDown;
