import { ChangeEvent, useState } from "react";
import Modal from "..";
import Input from "../../Input";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import { Keys } from "../../../../hooks/keys";
import { useCreateProjectMutation } from "../../../../hooks/mutations/create-project.mutation";
import { usePatchWorkspacesMutation } from "../../../../hooks/mutations/patch-workspaces.mutation";
interface IEditWorkspaceNameProbs {
  workspaceid: number;
  isVisible: boolean;
  onClose: () => void;
}
const EditWorkspaceName: React.FC<IEditWorkspaceNameProbs> = ({
  workspaceid,
  isVisible,
  onClose,
}): JSX.Element => {
  const [name, setName] = useState("");
  const editWorkspaceNameMutation = usePatchWorkspacesMutation();
  const queryClient = useQueryClient();
  const child = (
    <Input
      type="text"
      id="workspaceName"
      value={name}
      label={{ text: "ویرایش نام ورک اسپیس", for: "workspaceName" }}
      onChange={(e) => setName(e.target.value)}
      className="w-[415px] border border-gray-primary "
    />
  );

  const handleSubmit = () => {
    editWorkspaceNameMutation.mutate(
      { name, workspaceid },
      {
        onSuccess(payload) {
          onClose();
          setName("");
          toast.success("نام ورک اسپیس با موفقیت ویرایش");
          queryClient.invalidateQueries({ queryKey: [Keys.GetWorkspaces] });
        },
        onError(error) {
          onClose();
          toast.success("ویرایش نام ورک اسپیس با خطا روبه رو شد");
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
      modalTitle="ویرایش نام ورک اسپیس"
      hasPaginationBulet={false}
      onClick={handleSubmit}
      hasFooter={true}
      mBodyStyle="justify-center"
      isVisible={isVisible}
      onClose={onClose}
    />
  );
};

export default EditWorkspaceName;
