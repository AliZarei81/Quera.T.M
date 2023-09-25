import { ChangeEvent, ReactElement, cloneElement } from "react";
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
  icon?: ReactElement;
  label?: ILabel;
}

const Input: React.FC<IInputProps> = ({
  type,
  value,
  id,
  placeholder,
  onChange,
  icon,
  label,
}) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label
          className="self-start text-[14px] font-thin"
          htmlFor={label?.for}
        >
          {label?.text}
        </label>
      )}
      <div className="relative flex items-center text-gray-secondary border gap-[2px] border-[#AAAAAA] rounded-md">
        <IconContext.Provider
          value={{ color: "#AAAAAA", size: "50px", className: "" }}
        >
          {icon && cloneElement(icon)}
        </IconContext.Provider>
        <input
          type={type}
          value={value}
          id={id}
          placeholder={placeholder}
          autoComplete="off"
          onChange={onChange}
          className="h-[40px] ml-[1px] w-full font-semibold placeholder-gray-secondary text-black  border-none  outline-none shadow-none"
        />
      </div>
    </div>
  );
};

export default Input;
