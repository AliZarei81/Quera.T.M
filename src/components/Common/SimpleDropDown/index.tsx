import React, { useState } from "react";

interface SimpleDropDownProps {
  options: string[];
  selectedOption: string;
  placeholder?: string;
  onSelect?: (option: string) => void;
  style:string;
}

const SimpleDropDown: React.FC<SimpleDropDownProps> = ({
  options,
  selectedOption,
  placeholder,
  onSelect,
  style,
}) => {
  const [currentSelectedOption, setCurrentSelectedOption] = useState<string>(selectedOption);

  const handleProjectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSelectedOption = event.target.value;
    setCurrentSelectedOption(newSelectedOption);

    if (onSelect) {
      onSelect(newSelectedOption);
    }
  };

  return (
    <div className={style}>
     
      <select
        id="projectSelect"
        className="w-full border border-gray-secondary p-2 rounded bg-white h-[37px]"
        onChange={handleProjectChange}
        value={currentSelectedOption}
      >
        <option value="">{placeholder || options[0]}</option>
        {options.map((project, index) => (
          <option key={index} value={project}>
            {project}
          </option>
        ))}
      </select>
      
    </div>
  );
};

export default SimpleDropDown;
