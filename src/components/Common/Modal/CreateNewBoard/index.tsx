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
import { useCreateBoardMutation } from "../../../../hooks/mutations/create-board.mutation";

interface ICreateBoardProbs {
  workspaceid: number;
  projectid: number;
  order: number;
  isVisible: boolean;
  onClose: () => void;
}
const CreateBoard: React.FC<ICreateBoardProbs> = ({
  workspaceid,
  projectid,
  order,
  isVisible,
  onClose,
}): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const createBoardMutation = useCreateBoardMutation();
  const queryClient = useQueryClient();
  const handlePrevPage = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };

  //page1
  const [board, setBoard] = useState<string>("");
  const handleProjectNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBoard(event.target.value);
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

  const initials = board
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
            id="board"
            value={board}
            label={{ text: "نام برد", for: "board" }}
            onChange={handleProjectNameChange}
            className="w-[415px] border border-gray-primary"
          />
        );
      case 2:
        return (
          <div className=" gap-s flex flex-row-reverse justify-start">
            <div className=" gap-s flex flex-row-reverse justify-start pl-m">
              <div className="flex flex-col gap-s ">
                <h2>رنگ برد</h2>
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
              <p>نام برد</p>
              <p>{board}</p>
            </div>
            <div className=" w-full flex flex-row justify-between">
              <p>رنگ برد</p>
              <div
                style={{ backgroundColor: selectedColor }}
                className="w-[15px] h-[15px] rounded-[2px]"
              ></div>
            </div>
          </div>
        );
    }
  };
  const handleButtonTitle = (): string => {
    if (currentPage === 3) return "ساختن برد";
    return "ادامه";
  };

  const handleCreate = () => {
    createBoardMutation.mutate(
      {
        workspaceid,
        projectid,
        name: board,
        color: selectedColor,
        order,
        is_archive: false,
      },
      {
        onSuccess() {
          toast.success("برد با موفقیت ساخته شد");
          queryClient.invalidateQueries({ queryKey: [Keys.GetBoards] });
          setCurrentPage(1);
          setSelectedColor("#7D828C");
          setBoard("");
          onClose();
        },
        onError() {
          toast.error("ساخت برد با خطا مواجه شد");
          setCurrentPage(1);
          setSelectedColor("#7D828C");
          setBoard("");
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
        return "ساختن برد جدید";
      case 2:
        return "انتخاب رنگ برد";
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

export default CreateBoard;
