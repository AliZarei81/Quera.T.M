import React, { ChangeEvent, useState, useEffect } from "react";
import Flag from "../../Flag";
import Input from "../../Input";
import { MdClose } from "react-icons/md";
import Button from "../../Button";

interface INewTaskProbs {
  date: string | null;
  handleTaskCreate: (content: string) => void;
  handleClose: () => void;
}

const NewTask: React.FC<INewTaskProbs> = ({
  date,
  handleTaskCreate,
  handleClose,
}):JSX.Element => {
  const [taskName, setTaskName] = useState<string>("");
  const [isOpen, setIsOpen] = useState(true);

  const handleTaskNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
  };

  const handleCreateTask = () => {
    handleTaskCreate(taskName);
    setTaskName("");
    handleClose();
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const modal = document.getElementById("new-task-modal");

      if (modal && !modal.contains(e.target as Node)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleClose]);

  return (
    <div
      className={`modal-container absolute top-1/3 left-2/5 z-10 bg-white border rounded-[8px] ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="modal-content" id="new-task-modal">
        <div className="w-[463px] h-[157px] rounded-[8px] p-[20px] border border-[#208D8E] flex flex-col gap-l">
          <div
            className="flex items-center"
          >
            <button
              className="text-[#C8C8C8] w-[24px] h-[24px] "
              onClick={() => setIsOpen(false)}
            >
              <MdClose />
            </button>
            <Input
              className="w-full h-[35px] font-medium text-[20px ]"
              type="text"
              value={taskName}
              placeholder="نام تسک را وارد کنید"
              onChange={handleTaskNameChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="w-[100px] flex items-center">
              <div className="w-[50px] flex items-center p-[6px]">
                <Flag />
              </div>
              <div className="text-brand-primary text-[20px] font-medium">
                {date}
              </div>
            </div>
            <div>
              <Button
                disabled={!taskName}
                title="ساختن تسک"
                className=" w-[125px] h-[32px] bg-brand-primary text-white text-[12px] flex justify-center rounded-[4px] px-[7px] "
                onClick={handleCreateTask}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
