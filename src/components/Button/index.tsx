import { MouseEvent } from "react";
interface IButtonProps {
  type?: "button" | "submit" | "reset";
  disabled: boolean;
  className: string;
  onClick?(e: MouseEvent<HTMLButtonElement>): void;
  title?: string;
}

const Button: React.FC<IButtonProps> = ({
  type = "button",
  disabled,
  className,
  onClick,
  title,
}): JSX.Element => {
  return (
    <button
      type={type}
      className={`w-full flex items-center justify-center ${className}  `}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
export default Button;
