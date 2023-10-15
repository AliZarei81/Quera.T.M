import { MouseEvent, ReactElement, ReactNode, cloneElement } from "react";
import { IconContext } from "react-icons";
interface IButtonProps {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  onClick?(e: MouseEvent<HTMLButtonElement>): void;
  title?: string;
  icon?: ReactElement;
}

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
      className={`w-full h-full flex items-center gap-xs ${className}  `}
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