import { FiEdit, FiLink, FiShare2 } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";
import { LiaTrashAlt } from "react-icons/lia";
import { MdOutlineColorLens } from "react-icons/md";
import Button from "../../Common/Button";
import PopoverButton from "../../Common/PopoverButton";
import { PiArchiveTray } from "react-icons/pi";

const BoardColumnMore = () => {
  return (
    <PopoverButton>
      <div className="flex flex-col gap-xs">
        <Button
          type="button"
          disabled={false}
          title="ویرایش نام ستون"
          icon={<FiEdit />}
        />
        <Button
          type="button"
          disabled={false}
          title="افزودن تسک"
          icon={<IoIosAdd />}
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
          icon={<LiaTrashAlt />}
        />
      </div>
    </PopoverButton>
  );
};

export default BoardColumnMore;
