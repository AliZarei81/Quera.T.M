import { FiEdit, FiLink, FiShare2 } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";
import { LiaTrashAlt } from "react-icons/lia";
import { MdOutlineColorLens } from "react-icons/md";
import Button from "../../Common/Button";
import PopoverButton from "../../Common/PopoverButton";
import { useState } from "react";
import ShareModal from "../../Common/Modal/ShareModal";

const ProjectColumnMore = () => {
  const [shareModalIsOpen, setShareModalIsOpen] = useState<boolean>(false);
  const users = [
    {
      userName: "za h",
      userProfilePicture: "string",
      hasProfilePicture: false,
      isOwner: true,
      userColor: "bg-[#F27474]",
      email: "za@g.com",
    },
    {
      userName: "pe a",
      userProfilePicture: "string",
      hasProfilePicture: false,
      isOwner: false,
      userColor: "bg-[#F27474]",
      email: "za@g.com",
    },
    {
      userName: "pe a",
      userProfilePicture: "string",
      hasProfilePicture: false,
      isOwner: false,
      userColor: "bg-[#F27474]",
      email: "za@g.com",
    },
    {
      userName: "pe a",
      userProfilePicture: "string",
      hasProfilePicture: false,
      isOwner: false,
      userColor: "bg-[#F27474]",
      email: "za@g.com",
    },
  ];

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
      <ShareModal
        isVisible={shareModalIsOpen}
        onClose={() => setShareModalIsOpen(false)}
        privateLink="https://google.com"
        type="project"
        users={users}
      />
    </>
  );
};

export default ProjectColumnMore;
