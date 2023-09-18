
interface IButtonProps {
  disabled?: boolean;
  className: string;
  onClick(): void;
  children?: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({
  disabled,
  className,
  onClick,
  children,
}): JSX.Element => {
  return (
    <button
      className={`w-full flex items-center justify-center ${className}  `}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
