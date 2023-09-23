import { ChangeEvent } from "react";

interface IInputProps {
  type: "text" | "password" | "email";
  value: string;
  label?: string;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
}

const Input: React.FC<IInputProps> = ({
  type,
  label = "",
  value,
  onChange,
}) => {
  if (label == "") {
    return (
      <div className="w-[592px] h-[72px] ">
        <input
          type={type}
          value={value}
          onChange={onChange}
          className="w-[592px] h-[40px] rounded-md border border-input-gray bg-input-white px-1"
        />
      </div>
    );
  } else {
    return (
      <div className="w-[592px] h-[72px]  flex flex-col items-end gap-[px]">
        <label className="self-start font-iran-yekan  w-[145px] h-[24px] text-[14px] font-thin pb-[30px] ">
          {label}
        </label>
        <input
          type={type}
          value={value}
          onChange={onChange}
          className="w-[592px] h-[40px] rounded-md border border-input-gray bg-input-white px-1"
        />
      </div>
    );
  }
};

export default Input;
