import { ChangeEvent, useState } from "react";
import Modal from "..";
import Input from "../../Input";
interface ICreateNewBoardProbs {
  isVisible: boolean;
  board: string;
  handleBoardNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClose: () => void;
  handleSubmit: () => void;
}
const CreateNewBoard: React.FC<ICreateNewBoardProbs> = ({
  isVisible,
  board,
  handleBoardNameChange,
  onClose,
  handleSubmit,
}): JSX.Element => {
  const child = (
    <Input
      type="text"
      id="boardName"
      value={board}
      label={{ text: "نام برد", for: "boardName" }}
      onChange={handleBoardNameChange}
      className="w-[415px] border border-gray-primary "
    />
  );

  return (
    <Modal
      buttonTitle="ادامه"
      currentPage={1}
      mBody={child}
      totalPages={1}
      modalTitle="ساختن برد جدید"
      hasPaginationBulet={false}
      onClick={handleSubmit}
      hasFooter={true}
      mBodyStyle="justify-center"
      isVisible={isVisible}
      onClose={onClose}
    />
  );
};

export default CreateNewBoard;
