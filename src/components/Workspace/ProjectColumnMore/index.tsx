import { FiEdit, FiLink, FiShare2 } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";
import { LiaTrashAlt } from "react-icons/lia";
import { MdOutlineColorLens } from "react-icons/md";
import Button from "../../Common/Button";
import PopoverButton from "../../Common/PopoverButton";
import { useState } from "react";
import ShareModal from "../../Common/Modal/ShareModal";
import { useDeleteProjectMutation } from "../../../hooks/mutations/delete-project.mutation";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import { Keys } from "../../../hooks/keys";
import EditProjectName from "../../Common/Modal/EditProjectName";

interface IProjectColumnMoreProps {
  workspaceid: number;
  projectid: number;
}

const ProjectColumnMore: React.FC<IProjectColumnMoreProps> = ({
  workspaceid,
  projectid,
}) => {
  const [shareModalIsOpen, setShareModalIsOpen] = useState<boolean>(false);
  const [editProjectNameModalIsOpen, setEditProjectNameModalIsOpen] =
    useState(false);
  const queryClient = useQueryClient();
  const deleteProjectMutation = useDeleteProjectMutation();
  const handledeletebuttonclicked = () => {
    deleteProjectMutation.mutate(
      { workspaceid, projectid },
      {
        onSuccess() {
          toast.success(" پروژه شما با موفقیت حذف شد");
          queryClient.invalidateQueries({ queryKey: [Keys.GetProjects] });
        },
        onError() {
          toast.error("حذف پروژه با خطا مواجه شد");
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
            title="ساختن تسک جدید"
            icon={<IoIosAdd />}
          />
          <Button
            type="button"
            disabled={false}
            title="ویرایش نام پروژه"
            icon={<FiEdit />}
            onClick={() => setEditProjectNameModalIsOpen(true)}
          />
          <Button
            type="button"
            disabled={false}
            title="کپی لینک"
            icon={<FiLink />}
          />
          <Button
            type="button"
            disabled={false}
            onClick={handledeletebuttonclicked}
            title="حذف"
            icon={<LiaTrashAlt />}
            className="text-red-primary"
          />
          <Button
            type="button"
            disabled={false}
            title="اشتراک گذاری"
            icon={<FiShare2 />}
            className="py-xs px-s gap-8 text-center bg-brand-primary text-gray-secondary rounded-md"
            onClick={() => setShareModalIsOpen(true)}
          />
        </div>
      </PopoverButton>
      <EditProjectName
        workspaceid={workspaceid}
        projectid={projectid}
        isVisible={editProjectNameModalIsOpen}
        onClose={() => setEditProjectNameModalIsOpen(false)}
      />
      {/* <ShareModal
        isVisible={shareModalIsOpen}
        onClose={() => setShareModalIsOpen(false)}
        privateLink="https://google.com"
        type="project"
        users={users}
      /> */}
    </>
  );
};

export default ProjectColumnMore;
