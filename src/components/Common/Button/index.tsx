import { MouseEvent, ReactElement, ReactNode, cloneElement } from "react";
import { IconContext } from "react-icons";
interface IButtonProps {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  onClick?(e: MouseEvent<HTMLButtonElement>): void;
  title?: string;
  icon?: ReactElement;
  bgColor?: string;
}

const Button: React.FC<IButtonProps> = ({
  type = "button",
  disabled,
  className,
  onClick,
  title,
  icon,
  bgColor,
}): JSX.Element => {
  return (
    <button
      type={type}
      className={`flex items-center gap-xs ${className}  `}
      disabled={disabled}
      onClick={onClick}
      style={{ backgroundColor: bgColor }}
    >
      <IconContext.Provider value={{}}>
        {icon && cloneElement(icon)}
      </IconContext.Provider>
      {title}
    </button>
  );
};
export default Button;