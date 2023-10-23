import { ChangeEvent, FocusEvent, ReactElement, cloneElement } from "react";
import { IconContext } from "react-icons";

interface ILabel {
  for?: string;
  text: string;
}

interface IInputProps {
  type: "text" | "password" | "email";
  value: string;
  id?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  icon?: ReactElement;
  label?: ILabel;
  className?: string;
}

const Input: React.FC<IInputProps> = ({
  type,
  value,
  id,
  placeholder,
  onChange,
  onBlur,
  icon,
  label,
  className,
}) => {
  return (
    <div className="flex flex-col gap-xs w-full">
      {label && (
        <label
          className="self-start text-body-xs font-thin"
          htmlFor={label?.for}
        >
          {label?.text}
        </label>
      )}
      <div className="relative flex items-center w-full">
        <IconContext.Provider
          value={{
            size: "25",
            color: "#323232",
            className: "absolute pointer-events-none mr-xs",
          }}
        >
          {icon && cloneElement(icon)}
        </IconContext.Provider>
        <input
          type={type}
          value={value}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          className={`h-[40px] w-full rounded-md focus:outline-none ${
            icon ? "pr-xl" : "pr-xs"
          } ${className}`}
        />
      </div>
    </div>
  );
};

export default Input;
