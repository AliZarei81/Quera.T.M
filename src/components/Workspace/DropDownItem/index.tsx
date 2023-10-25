import React from "react";
import Button from "../../Common/Button";
import ProjectColumnMore from "../ProjectColumnMore";

interface IDropDownItem {
  name: string;
}

const DropDownItem: React.FC<IDropDownItem> = ({ name }): React.JSX.Element => {
  return (
    <div className="flex items-center justify-between gap-[8px] hover:bg-gray-secondary rounded-md px-xs py-[5px] mr-[30px]">
      <Button title={name} />
      <ProjectColumnMore />
    </div>
  );
};

export default DropDownItem;
