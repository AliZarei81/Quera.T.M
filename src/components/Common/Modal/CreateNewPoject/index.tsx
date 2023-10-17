import { ChangeEvent, useState } from "react";
import Modal from "..";
import Input from "../../Input";
interface ICreatNewProjectProbs {
  isVisible: boolean;
  project: string;
  handleProjectNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClose: () => void;
  handleSubmit: () => void;
}
const CreateNewProject: React.FC<ICreatNewProjectProbs> = ({
  isVisible,
  project,
  handleProjectNameChange,
  onClose,
  handleSubmit,
}): JSX.Element => {
  const child = (
    <Input
      type="text"
      id="projectName"
      value={project}
      label={{ text: "نام پروژه", for: "projectName" }}
      onChange={handleProjectNameChange}
      className="w-[415px] border border-gray-primary "
    />
  );

  return (
    <Modal
      buttonTitle="ادامه"
      currentPage={1}
      mBody={child}
      totalPages={1}
      modalTitle="ساختن پروژه جدید"
      hasPaginationBulet={false}
      onClick={handleSubmit}
      hasFooter={true}
      mBodyStyle="justify-center"
      isVisible={isVisible}
      onClose={onClose}
    />
  );
};

export default CreateNewProject;
