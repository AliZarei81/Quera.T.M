import { ChangeEvent, useState } from "react";
import Modal from "..";
import Input from "../../Input";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import { Keys } from "../../../../hooks/keys";
import { useCreateProjectMutation } from "../../../../hooks/mutations/create-project.mutation";
interface ICreatNewProjectProbs {
  workspaceid: number;
  isVisible: boolean;
  onClose: () => void;
}
const CreateNewProject: React.FC<ICreatNewProjectProbs> = ({
  workspaceid,
  isVisible,
  onClose,
}): JSX.Element => {
  const [project, setProject] = useState("");
  const createProjectMutation = useCreateProjectMutation();
  const queryClient = useQueryClient();
  const child = (
    <Input
      type="text"
      id="projectName"
      value={project}
      label={{ text: "نام پروژه", for: "projectName" }}
      onChange={(e) => setProject(e.target.value)}
      className="w-[415px] border border-gray-primary "
    />
  );

  const handleSubmit = () => {
    createProjectMutation.mutate(
      { name: project, workspaceid },
      {
        onSuccess(payload) {
          onClose();
          setProject("");
          toast.success("پروژه با موفقیت ساخته شد");
          queryClient.invalidateQueries({ queryKey: [Keys.GetProjects] });
        },
        onError(error) {
          onClose();
          toast.success("ساخت پروژه با خطا روبه رو شد");
        },
      }
    );
  };

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
