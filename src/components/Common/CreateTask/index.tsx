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
import { useCreateTaskMutation } from "../../../hooks/mutations/creat-task.mutation";
import toast from "react-hot-toast";
import { Keys } from "../../../hooks/keys";
import { useQueryClient } from "react-query";

interface ICreateTaskProps {
  workspaceid: number;
  projectid: number;
  boardid: number;
  isOpen: boolean;
  handleClose: () => void;
}

const CreateTask: React.FC<ICreateTaskProps> = ({
  workspaceid,
  projectid,
  boardid,
  isOpen,
  handleClose,
}): JSX.Element => {
  const [taskTitle, setTaskTitle] = useState("");
  const [selectedProject, setSelectedProject] = useState<string>(""); // State for the selected project
  const projects = ["Project 1", "Project 2", "Project 3"]; // Replace with your project list
  const [description, setDescription] = useState("");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isTagOpen, setIsTagOpen] = useState(false);
  const [isFlagOpen, setIsFlagOpen] = useState(false);
  const createTaskMutation = useCreateTaskMutation();
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [attachment, setAttachment] = useState<File | null>(null);
  const queryClient = useQueryClient();
  const taskColor = "black";
  const priorityOptions = [
    { color: "#FA5252", text: "فوری", priority: 1 },
    { color: "#FAB005", text: "بالا", priority: 2 },
    { color: "#15AABF", text: "متوسط", priority: 3 },
    { color: "#82C91E", text: "پایین", priority: 4 },
    { color: "#C1C1C1", text: "حذف اولویت", priority: 5 },
  ];
  const [selectedPriority, setSelectedPriority] = useState(priorityOptions[4]);

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

  // CreateTask
  const handleCreate = () => {
    if (thumbnail && attachment) {
      const data = {
        name: taskTitle,
        description: description,
        order: 1,
        priority: selectedPriority.priority,
        workspaceid,
        projectid,
        boardid,
        thumbnail,
        attachment,
      };

      createTaskMutation.mutate(data, {
        onSuccess() {
          toast.success("تسک با موفقیت ساخته شد");
          queryClient.invalidateQueries({
            queryKey: [Keys.GetTasks, workspaceid, projectid, boardid],
          });
          handleClose();
        },
        onError() {
          toast.error("ساخت تسک با خطا مواجه شد");
          handleClose();
        },
      });
    }
  };
  return (
    <div
      className={`w-screen h-screen right-[0] fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center ${
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
              selectedFile={attachment}
              handleFileChange={(e) => {
                if (e.target.files) {
                  const file = e.target.files[0];
                  setAttachment(file);
                }
              }}
            />
            <FileUpload
              filetypes=".jpg, .jpeg, .png"
              label="افزودن کاور"
              selectedFile={thumbnail}
              handleFileChange={(e) => {
                if (e.target.files) {
                  const file = e.target.files[0];
                  setThumbnail(file);
                }
              }}
            />
          </div>
          <div className="flex justify-between">
            <div className="flex gap-m">
              <div className="cursor-pointer w-[50px] h-[50px] rounded-full border border-dashed border-gray-primary flex justify-center items-center text-gray-primary">
                <Flag
                  priorityOptions={priorityOptions}
                  isPriorityListOpen={isFlagOpen}
                  handlePriorityListOpen={() => setIsFlagOpen(!isFlagOpen)}
                  selectedPriority={selectedPriority}
                  handlePriorityChange={(index) => {
                    setSelectedPriority(priorityOptions[index]);
                    setIsFlagOpen(false);
                  }}
                />
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
