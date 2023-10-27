import { FiEdit, FiLink, FiShare2 } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";
import { LiaTrashAlt } from "react-icons/lia";
import { MdOutlineColorLens } from "react-icons/md";
import Button from "../../Common/Button";
import PopoverButton from "../../Common/PopoverButton";
import React, { useState } from "react";
import ShareModal from "../../Common/Modal/ShareModal";
import { useGetWorkspaceMembers } from "../../../hooks/queries/get-workspace-members.query";
import CreateNewProject from "../../Common/Modal/CreateNewPoject";
import { useDeleteWorkspacesMutation } from "../../../hooks/mutations/delete-workspace.mutation";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import { Keys } from "../../../hooks/keys";
import EditWorkspaceName from "../../Common/Modal/EditWorkspaceName";

interface IWorkSpaceColumnMoreProps {
  workspaceid: number;
}

const WorkSpaceColumnMore: React.FC<IWorkSpaceColumnMoreProps> = ({
  workspaceid,
}) => {
  const [shareModalIsOpen, setShareModalIsOpen] = useState<boolean>(false);
  const [createNewProjectModalIsOpen, setCreateNewProjectModalIsOpen] =
    useState(false);
  const [editWorkspaceNameModalIsOpen, setEditWorkspaceNameModalIsOpen] =
    useState(false);
  const { data: workspaceMembers } = useGetWorkspaceMembers(workspaceid);
  const queryClient = useQueryClient();
  const deleteWorkspsceMutation = useDeleteWorkspacesMutation();
  const handledeletebuttonclicked = () => {
    deleteWorkspsceMutation.mutate(
      { workspaceid },
      {
        onSuccess() {
          toast.success("ورک اسپیس شما با موفقیت حذف شد");
          queryClient.invalidateQueries({ queryKey: [Keys.GetWorkspaces] });
        },
        onError() {
          toast.error("حذف ورک اسپیس با خطا مواجه شد");
        },
      }
    );
  };
  return (
    <>
      <PopoverButton>
        <div className="flex flex-col gap-xs fixed bg-white">
          <Button
            type="button"
            disabled={false}
            title="ساختن پروژه جدید"
            icon={<IoIosAdd />}
            onClick={() => setCreateNewProjectModalIsOpen(true)}
          />
          <Button
            type="button"
            disabled={false}
            title="ویرایش نام ورک اسپیس"
            icon={<FiEdit />}
            onClick={() => setEditWorkspaceNameModalIsOpen(true)}
          />
          <Button
            type="button"
            disabled={false}
            title="ویرایش رنگ"
            icon={<MdOutlineColorLens />}
          />
          <Button
            type="button"
            disabled={false}
            title="کپی لینک"
            icon={<FiLink />}
          />
          <Button
            type="button"
            onClick={handledeletebuttonclicked}
            disabled={false}
            title="حذف"
            icon={<LiaTrashAlt />}
            className="text-red-primary"
          />
          <Button
            type="button"
            onClick={() => setShareModalIsOpen(true)}
            disabled={false}
            title="اشتراک گذاری"
            icon={<FiShare2 />}
            className="py-xs px-s gap-8 text-center bg-brand-primary text-gray-secondary rounded-md"
          />
        </div>
      </PopoverButton>
      <CreateNewProject
        workspaceid={workspaceid}
        isVisible={createNewProjectModalIsOpen}
        onClose={() => setCreateNewProjectModalIsOpen(false)}
      />{" "}
      <EditWorkspaceName
        workspaceid={workspaceid}
        isVisible={editWorkspaceNameModalIsOpen}
        onClose={() => setEditWorkspaceNameModalIsOpen(false)}
      />
      <ShareModal
        isVisible={shareModalIsOpen}
        onClose={() => setShareModalIsOpen(false)}
        privateLink={`http://localhost:3000/workspace/${workspaceid}/addMember`}
        type="workSpace"
        users={workspaceMembers ? workspaceMembers : []}
      />
    </>
  );
};

export default WorkSpaceColumnMore;
