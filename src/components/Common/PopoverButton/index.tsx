import { PropsWithChildren, useState } from "react";
import Button from "../Button";
import { AiOutlineEllipsis } from "react-icons/ai";

interface IPopoverButtonProps extends PropsWithChildren {}

const PopoverButton: React.FC<IPopoverButtonProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="relative">
      <Button
        type="button"
        disabled={false}
        icon={<AiOutlineEllipsis />}
        onClick={handleClick}
      />
      {open && (
        <ul className="w-[230px] bg-white absolute rounded-md shadow p-s mt-xs">
          {children}
        </ul>
      )}
    </div>
  );
};

export default PopoverButton;
