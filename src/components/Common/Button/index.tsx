import { MouseEvent, ReactElement, ReactNode, cloneElement } from "react";
import { IconContext } from "react-icons";
interface IButtonProps {
  type: "button" | "submit";
  disabled: boolean;
  className?: string;
  title?: string;
  icon?: ReactElement;
  onClick?(e: MouseEvent<HTMLButtonElement>): void;
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
      className={`flex items-center gap-xs ${className} `}
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
