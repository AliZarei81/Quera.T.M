import { FiEdit, FiLink, FiShare2 } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";
import { LiaTrashAlt } from "react-icons/lia";
import { MdOutlineColorLens } from "react-icons/md";
import Button from "../../Common/Button";
import PopoverButton from "../../Common/PopoverButton";
import { PiArchiveTray } from "react-icons/pi";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import { Keys } from "../../../hooks/keys";
import { useDeleteBoardMutation } from "../../../hooks/mutations/delete-board.mutation";
import CreateTask from "../../Common/CreateTask";
import { useState } from "react";
import EditBoardName from "../../Common/Modal/EditBoardName";

interface IBoardColumnMoreProps {
  workspaceid: number;
  projectid: number;
  boardid: number;
}

const BoardColumnMore: React.FC<IBoardColumnMoreProps> = ({
  boardid,
  projectid,
  workspaceid,
}) => {
  const queryClient = useQueryClient();
  const [editBoardNameModalIsOpen, setEditBoardNameModalIsOpen] =
    useState(false);
  const [newTaskModal, setNewTaskModal] = useState(false);
  const deleteBoardMutation = useDeleteBoardMutation();
  const handledeletebuttonclicked = () => {
    deleteBoardMutation.mutate(
      { workspaceid, projectid, boardid },
      {
        onSuccess() {
          toast.success(" برد شما با موفقیت حذف شد");
          queryClient.invalidateQueries({ queryKey: [Keys.GetBoards] });
        },
        onError() {
          toast.error("حذف برد با خطا مواجه شد");
        },
      }
    );
  };
  return (
    <>
      <PopoverButton>
        <div className="flex flex-col gap-xs">
          <Button
            type="button"
            disabled={false}
            title="ویرایش نام ستون"
            icon={<FiEdit />}
            onClick={() => setEditBoardNameModalIsOpen(true)}
          />
          <Button
            type="button"
            disabled={false}
            title="افزودن تسک"
            icon={<IoIosAdd />}
            onClick={() => setNewTaskModal(true)}
          />
          <Button
            type="button"
            disabled={false}
            title="آرشیو تمام تسک ها"
            icon={<PiArchiveTray />}
          />
          <Button
            type="button"
            disabled={false}
            title="حذف ستون"
            onClick={handledeletebuttonclicked}
            icon={<LiaTrashAlt />}
          />
        </div>
      </PopoverButton>
      <EditBoardName
        workspaceid={workspaceid}
        projectid={projectid}
        boardid={boardid}
        isVisible={editBoardNameModalIsOpen}
        onClose={() => setEditBoardNameModalIsOpen(false)}
      />
      <CreateTask
        workspaceid={workspaceid}
        projectid={projectid}
        boardid={boardid}
        isOpen={newTaskModal}
        handleClose={() => setNewTaskModal(false)}
      />
    </>
  );
};

export default BoardColumnMore;
