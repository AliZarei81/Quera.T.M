
interface IButtonProps {
  disabled: boolean;
  className: string;
  onClick(): void;
  title?: string;
}

const Button: React.FC<IButtonProps> = ({
  disabled,
  className,
  onClick,
  title,
}): JSX.Element => {
  return (
    <button
      className={`w-full flex items-center justify-center ${className}  `}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
export default Button;
