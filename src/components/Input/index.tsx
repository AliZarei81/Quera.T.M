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

      <div className="relative flex items-center text-gray-secondary focus-within:text-gray-primary">
        <IconContext.Provider
          value={{ className: "w-5 h-5 absolute ml-3 pointer-events-none" }}
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
          className="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-secondary text-black rounded-md border-none ring-2 ring-gray-secondary focus:ring-gray-secondary focus:ring-2"
        />
      </div>
    </div>
  );
};

export default Input;
