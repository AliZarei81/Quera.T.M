import React, { FC, useState } from "react";
import Input from "../../../Common/Input";
import { CiSearch } from "react-icons/ci";

interface IHeaderProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
  children?: React.ReactNode;
}

const Header: FC<IHeaderProps> = ({ onSearch, children }) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <div className="flex items-center border-b-2 border-gray-primary w-full">
      <div className="flex items-center w-[500px]">
        <Input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={"جستجو بین تسک‌ها"}
          icon={<CiSearch />}
          className="h-[24px] text-[14px] font-normal"
        />
        <div className="before:border-l-2 text-gray-primary pr-[10px]" />
        <div className="pr-[30px]">{children}</div>
      </div>
    </div>
  );
};

export default Header;
