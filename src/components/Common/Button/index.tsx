import { MouseEvent, ReactElement, ReactNode, cloneElement } from "react";
import { IconContext } from "react-icons";
interface IButtonProps {
  type?: "button" | "submit" | "reset";
  disabled: boolean;
  className?: string;
  onClick?(e: MouseEvent<HTMLButtonElement>): void;
  title: string;
  icon?: ReactElement;
}

// import { FaHeart } from "react-icons/fa";
// give icon as a property to the Button component =>
// <Button
// title="ثبت نام"
// icon={<FaHeart />}
// disabled={false}
// className=" bg-brand-primary cursor-pointer w-[95px] h-[40px] p-[6px] rounded-[10px] border-none gap-[10px] text-gray-secondary font-iran-yekan  "
// />

const Button: React.FC<IButtonProps> = ({
  type = "button",
  disabled,
  className,
  onClick,
  title,
  icon,
}): JSX.Element => {
  return (
    <button
      type={type}
      className={`w-full flex items-center gap-xs ${className}  `}
      disabled={disabled}
      onClick={onClick}
    >
      <IconContext.Provider value={{}}>
        {icon && cloneElement(icon)}
      </IconContext.Provider>
      {title}
    </button>
  );
};
export default Button;
