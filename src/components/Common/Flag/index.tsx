import React, { useState } from "react";
import { FiFlag } from "react-icons/fi";
import Button from "../Button";

interface Priority {
  color: string;
  text: string;
  priority: number;
}

interface IFlagProps {
  priorityOptions: Priority[];
  selectedPriority: Priority;
  isPriorityListOpen: boolean;
  handlePriorityListOpen: () => void;
  handlePriorityChange: (index: number) => void;
}

const Flag: React.FC<IFlagProps> = ({
  priorityOptions,
  selectedPriority,
  isPriorityListOpen,
  handlePriorityChange,
  handlePriorityListOpen,
}): JSX.Element => {
  return (
    <div className="flag inline-block relative">
      <div
        className="flag-icon w-[30px] h-[30px] cursor-pointer flex items-center justify-center"
        onClick={handlePriorityListOpen}
        style={{ color: selectedPriority.color }}
      >
        <FiFlag className="text-[30px]" />
      </div>
      {isPriorityListOpen && (
        <div className="priority-list absolute top-12 left-10 bg-white  p-[12px] z-10 flex flex-col w-[166px] h-[208px] rounded-[8px] gap-s">
          {priorityOptions.map((option, index) => (
            <Button
              key={index}
              className="priority-option cursor-pointer hover:underline  flex justify-start gap-[8px] text-[14px] font-normal"
              icon={
                <FiFlag
                  className="w-[20px] h-[20px]"
                  color={option.color}
                  style={{ marginRight: "8px" }}
                />
              }
              title={option.text}
              onClick={() => handlePriorityChange(index)}
            ></Button>
          ))}
        </div>
      )}
    </div>
  );
};
export default Flag;
