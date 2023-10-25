import { ChangeEvent, useContext, useState } from "react";
import toast from "react-hot-toast";
import Modal from "..";
import Input from "../../Input";
import ColorPiker from "../../ColorPicker";
import { ColorResult } from "@uiw/color-convert";
import User from "../../User";
import { useCreateWorkspaceMutation } from "../../../../hooks/mutations/create-workspace.mutation";
import { AppContext } from "../../../../context/userStore/store";
import { useQueryClient } from "react-query";
import { Keys } from "../../../../hooks/keys";

interface ICreateNewWorkspaceProbs {
  isVisible: boolean;
  onClose: () => void;
}
const CreateNewWorkspace: React.FC<ICreateNewWorkspaceProbs> = ({
  isVisible,
  onClose,
}): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const createWorkspaceMutation = useCreateWorkspaceMutation();
  const { state } = useContext(AppContext);
  const queryClient = useQueryClient();
  const handlePrevPage = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };

  //page1
  const [workSpaceName, setWorkSpaceName] = useState<string>("");
  const handleProjectNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWorkSpaceName(event.target.value);
  };
  //Handle Page2
  //handle colors
  const [selectedColor, setSelectedColor] = useState("#7D828C"); // Default color
  const colors = [
    "#4C6EF5",
    "#228BE6",
    "#15AABF",
    "#12B886",
    "#208D8E",
    "#40C057",
    "#82C91E",
    "#FAB005",
    "#FD7E14",
    "#FA5252",
    "#E64980",
    "#BE4BDB",
    "#7950F2",
  ];
  const handleColorChange = (colorResult: ColorResult) => {
    // Handle the color change
    setSelectedColor(colorResult.hex);
  };

  const initials = workSpaceName
    .split(" ")
    .map((namePart) => namePart.charAt(0))
    .join(" ");
  //Handle contetn in modal's body
  const child = () => {
    switch (currentPage) {
      case 1:
        return (
          <Input
            type="text"
            id="workSpaceName"
            value={workSpaceName}
            label={{ text: "نام ورک اسپیس", for: "workSpaceName" }}
            onChange={handleProjectNameChange}
            className="w-[415px] border border-gray-primary"
          />
        );
      case 2:
        return (
          <div className=" gap-s flex flex-row-reverse justify-start">
            <div className=" gap-s flex flex-row-reverse justify-start pl-m">
              <div className="flex flex-col gap-s ">
                <h2>رنگ ورک اسپیس</h2>
                <ColorPiker
                  color={selectedColor}
                  onChange={handleColorChange} // Callback function when the color changes
                  colors={colors}
                  title="رنگ"
                />
              </div>
            </div>
            <div
              className="w-[70px] h-[70px] flex justify-center items-center text-[24px] font-extrabold rounded-[8px]"
              style={{
                backgroundColor: selectedColor,
              }}
            >
              {initials}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="text-[14px] w-full font-extrabold gap-s flex flex-col justify-start items-start border p-[16px] rounded-[8px] border-[#AAAAAA]">
            <div className=" w-full flex flex-row justify-between">
              <p>نام ورک اسپیس</p>
              <p>{workSpaceName}</p>
            </div>
            <div className=" w-full flex flex-row justify-between">
              <p>رنگ ورک اسپیس</p>
              <div
                style={{ backgroundColor: selectedColor }}
                className="w-[15px] h-[15px] rounded-[2px]"
              ></div>
            </div>
            <div className=" w-full flex flex-row justify-between items-start">
              <p>اعضا</p>
              <User
                hasProfilePicture={false}
                userProfilePicture={""}
                isOwner={false}
                userName={state.user.first_name + " " + state.user.last_name}
                userNameShow={false}
              />
            </div>
          </div>
        );
    }
  };
  const handleButtonTitle = (): string => {
    if (currentPage === 3) return "ساختن ورک اسپیس";
    return "ادامه";
  };

  const handleCreate = () => {
    createWorkspaceMutation.mutate(
      { name: workSpaceName, color: selectedColor },
      {
        onSuccess() {
          toast.success("ورک اسپیس با موفقیت ساخته شد");
          queryClient.invalidateQueries({ queryKey: [Keys.GetWorkspaces] });
          setSelectedColor("#7D828C");
          setWorkSpaceName("");
          setCurrentPage(1);
          onClose();
        },
        onError() {
          toast.error("ساخت ورک اسپیس با خطا مواجه شد");
          setSelectedColor("#7D828C");
          setWorkSpaceName("");
          setCurrentPage(1);
          onClose();
        },
      }
    );
  };

  const handleClick = () => {
    if (currentPage === 3) return handleCreate();
    return setCurrentPage((currentPage) => currentPage + 1);
  };
  const handleModalTitle = (): string => {
    switch (currentPage) {
      case 1:
        return "ساختن ورک اسپیس جدید";
      case 2:
        return "انتخاب رنگ ورک اسپیس";
      case 3:
        return "مرور اطلاعات";
      default:
        return "";
    }
  };

  return (
    <Modal
      buttonTitle={handleButtonTitle()}
      currentPage={currentPage}
      handlePrevPage={handlePrevPage}
      mBody={child()}
      totalPages={3}
      modalTitle={handleModalTitle()}
      hasPaginationBulet={true}
      onClick={handleClick}
      mBodyStyle={currentPage === 1 ? "justify-center" : "justify-start"}
      hasFooter={true}
      isVisible={isVisible}
      onClose={onClose}
    />
  );
};

export default CreateNewWorkspace;
