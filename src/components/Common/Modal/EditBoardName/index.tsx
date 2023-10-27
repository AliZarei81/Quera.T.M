import { ChangeEvent, useState } from "react";
import Modal from "..";
import Input from "../../Input";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import { Keys } from "../../../../hooks/keys";
import { usePatchProjectMutation } from "../../../../hooks/mutations/edit-project.mutation";
import { usePatchBoardMutation } from "../../../../hooks/mutations/edit-board.mutation";
interface IEditBoardNameProbs {
  workspaceid: number;
  projectid: number;
  boardid: number;
  isVisible: boolean;
  onClose: () => void;
}
const EditBoardName: React.FC<IEditBoardNameProbs> = ({
  workspaceid,
  projectid,
  boardid,
  isVisible,
  onClose,
}): JSX.Element => {
  const [name, setName] = useState("");
  const editBoardNameMutation = usePatchBoardMutation();
  const queryClient = useQueryClient();
  const child = (
    <Input
      type="text"
      id="projectName"
      value={name}
      label={{ text: "ویرایش نام برد", for: "projectName" }}
      onChange={(e) => setName(e.target.value)}
      className="w-[415px] border border-gray-primary "
    />
  );

  const handleSubmit = () => {
    editBoardNameMutation.mutate(
      { name, workspaceid, projectid, boardid },
      {
        onSuccess(payload) {
          onClose();
          setName("");
          toast.success("نام برد با موفقیت ویرایش شد");
          queryClient.invalidateQueries({ queryKey: [Keys.GetProjects] });
        },
        onError(error) {
          onClose();
          toast.success("ویرایش نام برد با خطا روبه رو شد");
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
      modalTitle="ویرایش نام برد"
      hasPaginationBulet={false}
      onClick={handleSubmit}
      hasFooter={true}
      mBodyStyle="justify-center"
      isVisible={isVisible}
      onClose={onClose}
    />
  );
};

export default EditBoardName;
