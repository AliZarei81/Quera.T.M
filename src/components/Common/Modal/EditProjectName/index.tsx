import { ChangeEvent, useState } from "react";
import Modal from "..";
import Input from "../../Input";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import { Keys } from "../../../../hooks/keys";
import { usePatchProjectMutation } from "../../../../hooks/mutations/edit-project.mutation";
interface IEditProjectNameProbs {
  workspaceid: number;
  projectid: number;
  isVisible: boolean;
  onClose: () => void;
}
const EditProjectName: React.FC<IEditProjectNameProbs> = ({
  workspaceid,
  projectid,
  isVisible,
  onClose,
}): JSX.Element => {
  const [name, setName] = useState("");
  const editProjectNameMutation = usePatchProjectMutation();
  const queryClient = useQueryClient();
  const child = (
    <Input
      type="text"
      id="projectName"
      value={name}
      label={{ text: "ویرایش نام پروژه", for: "projectName" }}
      onChange={(e) => setName(e.target.value)}
      className="w-[415px] border border-gray-primary "
    />
  );

  const handleSubmit = () => {
    editProjectNameMutation.mutate(
      { name, workspaceid, projectid },
      {
        onSuccess(payload) {
          onClose();
          setName("");
          toast.success("نام پروژه با موفقیت ویرایش شد");
          queryClient.invalidateQueries({ queryKey: [Keys.GetBoards] });
        },
        onError(error) {
          onClose();
          toast.success("ویرایش نام پروژه با خطا روبه رو شد");
        },
      }
    );
  };

  return (
    <Modal
      buttonTitle="ویرایش"
      currentPage={1}
      mBody={child}
      totalPages={1}
      modalTitle="ویرایش نام پروژه"
      hasPaginationBulet={false}
      onClick={handleSubmit}
      hasFooter={true}
      mBodyStyle="justify-center"
      isVisible={isVisible}
      onClose={onClose}
    />
  );
};

export default EditProjectName;
