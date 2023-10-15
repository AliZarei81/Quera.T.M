import { FiEdit, FiLink, FiShare2 } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";
import { LiaTrashAlt } from "react-icons/lia";
import { MdOutlineColorLens } from "react-icons/md";
import Button from "../../Common/Button";
import PopoverButton from "../../Common/PopoverButton";

const WorkSpaceColumnMore = () => {
  return (
    <PopoverButton>
      <div className="flex flex-col gap-xs">
        <Button
          type="button"
          disabled={false}
          title="ساختن پروژه جدید"
          icon={<IoIosAdd />}
        />
        <Button
          type="button"
          disabled={false}
          title="ویرایش نام ورک اسپیس"
          icon={<FiEdit />}
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
        />
      </div>
    </PopoverButton>
  );
};

export default WorkSpaceColumnMore;
