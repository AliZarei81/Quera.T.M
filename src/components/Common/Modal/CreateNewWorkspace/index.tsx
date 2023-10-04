import { ChangeEvent, useState } from "react";
import Modal from "..";
import Input from "../../Input";
import ColorPiker from "../../ColorPicker";
import { ColorResult } from "@uiw/color-convert";
import User from "../../User";

interface ICreateNewWorkspaceProbs {
  handleCreate: () => void; //workspace create ;
  //colors :Array<string>
  hasProfilePic:boolean;
  userName:string;
  userColor:string;
  picture?:string
}
const CreateNewWorkspace: React.FC<ICreateNewWorkspaceProbs> = ({
  handleCreate /*,colors*/,
  hasProfilePic,
  userName,
  userColor,
  picture
}): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<number>(1);
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
            className="w-[415px]"
          />
        );
      case 2:
        return (
          <div className=" gap-s flex flex-row-reverse justify-start">
            <div className=" gap-s flex flex-row-reverse justify-start">
              <ColorPiker
                color={selectedColor}
                onChange={handleColorChange} // Callback function when the color changes
                colors={colors}
                title="رنگ"
              />
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
              <User  hasProfilePicture={hasProfilePic} userProfilePicture={picture} isOwner={false} userName={userName} userNameShow={false} className={userColor} />
            </div>
          </div>
        );
    }
  };
  const handleButtonTitle = (): string => {
    if (currentPage === 3) return "ساختن ورک اسپیس";
    return "ادامه";
  };

  const handleClick = () => {
    if (currentPage === 3) return handleCreate;
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
      modalClassname="w-[500px] h-[272px] "
      onClick={handleClick}
      mBodyStyle={currentPage === 1 ? "justify-center" : "justify-start"}
      hasFooter={true}
      
      
    />
  );
};

export default CreateNewWorkspace;
