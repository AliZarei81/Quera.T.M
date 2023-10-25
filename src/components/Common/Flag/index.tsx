import React, { useState } from "react";
import { FiFlag } from "react-icons/fi";

const Flag: React.FC = (): JSX.Element => {
  const [flagColor, setFlagColor] = useState<string>("#C1C1C1");
  const [isPriorityListOpen, setIsPriorityListOpen] = useState(false);

  const priorityOptions = [
    { color: "#FA5252", text: "فوری" },
    { color: "#FAB005", text: "بالا" },
    { color: "#15AABF", text: "متوسط" },
    { color: "#82C91E", text: "پایین" },
    { color: "#C1C1C1", text: "حذف اولویت" },
  ];

  const handleFlagClick = () => {
    setIsPriorityListOpen(!isPriorityListOpen);
  };

  const handlePriorityClick = (color: string) => {
    setFlagColor(color);
    setIsPriorityListOpen(false);
  };

  return (
    <div className="flag inline-block relative">
      <div
        className="flag-icon w-[30px] h-[30px] cursor-pointer flex items-center justify-center"
        onClick={handleFlagClick}
        style={{ color: flagColor }}
      >
        <FiFlag className="text-[30px]" />
      </div>
      {isPriorityListOpen && (
        <div className="priority-list absolute top-12 left-10 bg-white  p-[12px] z-10 flex flex-col w-[166px] h-[208px] rounded-[8px] gap-s">
          {priorityOptions.map((option, index) => (
            <div
              key={index}
              className="priority-option cursor-pointer hover:underline  flex justify-start gap-[8px] text-[14px] font-normal"
              onClick={() => handlePriorityClick(option.color)}
            >
              <FiFlag
                className="w-[20px] h-[20px]"
                color={option.color}
                style={{ marginRight: "8px" }}
              />
              {option.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Flag;
