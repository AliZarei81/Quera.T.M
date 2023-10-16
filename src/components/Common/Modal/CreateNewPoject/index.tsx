import { ChangeEvent, useState } from "react";
import Modal from "..";
import Input from "../../Input";
interface ICreatNewProjectProbs {
  isVisible: boolean;
  onClose: () => void;
  handleSubmit: () => void;
}
const CreateNewProject: React.FC<ICreatNewProjectProbs> = ({
  isVisible,
  onClose,
  handleSubmit,
}): JSX.Element => {
  const [projectName, setProjectName] = useState<string>("");
  const handleProjectNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProjectName(event.target.value);
  };
  const child = (
    <Input
      type="text"
      id="projectName"
      value={projectName}
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
      modalClassname="w-[500px] h-[272px]  "
      onClick={handleSubmit}
      hasFooter={true}
      mBodyStyle="justify-center"
      isVisible={isVisible}
      onClose={onClose}
    />
  );
};

export default CreateNewProject;
