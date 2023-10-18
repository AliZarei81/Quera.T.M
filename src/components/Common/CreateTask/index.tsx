import { ChangeEvent, useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { BsCalendar2Week, BsTags } from "react-icons/bs";
import SimpleDropDown from "../SimpleDropDown";
import FileUpload from "../FileUpload";
import Flag from "../Flag";
import Input from "../Input";
import Calendar from "../Calendar";
import Button from "../Button";

interface ICreateTaskProps {
  isOpen: boolean;
  handleClose: () => void;
}

const CreateTask: React.FC<ICreateTaskProps> = ({
  isOpen,
  handleClose,
}): JSX.Element => {
  const taskColor = "black";
  const [taskTitle, setTaskTitle] = useState("");
  const [selectedProject, setSelectedProject] = useState<string>(""); // State for the selected project
  const projects = ["Project 1", "Project 2", "Project 3"]; // Replace with your project list
  const [description, setDescription] = useState("");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isTagOpen, setIsTagOpen] = useState(false);

  const handleTaskTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  };

  const handleProjectChange = (selectedProject: string) => {
    setSelectedProject(selectedProject);
  };
  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const handleCalendarIconClick = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleTagIconClick = () => {
    setIsTagOpen(!isCalendarOpen);
  };
  ///CreateTask
  const handleCreate = () => {};
  return (
    <div
      className={`w-full h-full fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center ${
        isOpen ? "block" : "hidden"
      } `}
      id="wrapper"
      // onClick={handleClose}
    >
      <div className="w-[1153px] relative left-xl bg-white shadow-lg rounded rounded-[20px]]">
        <div
          className={`w-[1153px] relative transition-colors flex flex-col p-l gap-xl ${
            isCalendarOpen ? "blur-md pointer-events-none" : ""
          }`}
        >
          <div className="flex justify-between">
            <div className="flex gap-[13px] items-center text-center justify-start">
              <div
                className={`w-[16px] h-[16px] text-[24px] justify-center  rounded-sm bg-${taskColor}`}
              ></div>
              <Input
                type="text"
                value={taskTitle}
                placeholder="عنوان تسک"
                onChange={handleTaskTitle}
                className="text-[24px]"
              />
            </div>
            <div className="cursor-pointer" onClick={handleClose}>
              <MdClose className="text-[32px] text-gray-primary " />
            </div>
          </div>
          <div className="flex items-center gap-xs">
            <p>در</p>
            <SimpleDropDown
              options={projects}
              selectedOption={selectedProject}
              style="w-[170px] "
              placeholder="پروژه اول"
              onSelect={handleProjectChange}
            />
            <p>برای</p>
            <div className="w-[34px] h-[34px] rounded-full border border-dashed border-gray-primary flex justify-center items-center text-gray-primary">
              <AiOutlineUserAdd />
            </div>
          </div>
          <div className="w-full h-[191px]">
            <textarea
              placeholder="توضیحاتی برای این تسک بنویسید"
              className="border border-gray-secondary p-[20px] rounded-[12px] w-full h-[191px]"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
          <div>
            <FileUpload
              filetypes=".jpg, .jpeg, .png, .pdf"
              label="افزودن پیوست"
            />
            <FileUpload filetypes=".jpg, .jpeg, .png" label="افزودن کاور" />
          </div>
          <div className="flex justify-between">
            <div className="flex gap-m">
              <div className="cursor-pointer w-[50px] h-[50px] rounded-full border border-dashed border-gray-primary flex justify-center items-center text-gray-primary">
                <Flag />
              </div>
              <div
                onClick={handleCalendarIconClick}
                className=" cursor-pointer w-[50px] h-[50px] rounded-full border border-dashed border-gray-primary flex justify-center items-center text-gray-primary"
              >
                <BsCalendar2Week className="text-[30px] text-[#BDC0C6]" />
              </div>
              <div
                onClick={handleTagIconClick}
                className="relative cursor-pointer w-[50px] h-[50px] rounded-full border border-dashed border-gray-primary flex justify-center items-center text-gray-primary"
              >
                <BsTags className="text-[30px] text-[#BDC0C6]" />
                {/* <CammonDropdown type="select" /> */}
              </div>
            </div>
            <div>
              <Button
                className="bg-brand-primary flex justify-center text-white px-[7px] py-[4px] rounded-[4px]"
                onClick={handleCreate}
                title="ساختن تسک"
              />
            </div>
          </div>
        </div>
        {isCalendarOpen && (
          <Calendar onClose={() => setIsCalendarOpen(false)} />
        )}
      </div>
    </div>
  );
};

export default CreateTask;
