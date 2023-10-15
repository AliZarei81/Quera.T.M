import React, { useState } from "react";
import { ReactElement } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { LuPlusSquare } from "react-icons/lu";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Input from "../../Common/Input";
import Button from "../../Common/Button";

interface Iitems {
  color: string;
  title: string;
  icon?: ReactElement;
  projects?: string[];
}

const Dropdown: React.FC = () => {
  const items: Iitems[] = [
    {
      color: "bg-green-primary",
      title: "درس مدیریت  پروژه",
      projects: ["پروژه اول", "پروژه دهم"],
    },
    {
      color: "bg-blue-primary",
      title: "طراحی واسط",
    },
    {
      color: "bg-red-primary",
      title: "درس شبکه های کامپیوتری",
      projects: ["پروژه اول", "پروژه هشتم"],
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredIndex2, setHoveredIndex2] = useState<number | null>(null);
  const [hoveredIndex3, setHoveredIndex3] = useState<number | null>(null);

  const handleMouseEnter = (
    index: number,
    type: "lessson" | "project",
    secondindex?: number
  ) => {
    switch (type) {
      case "lessson":
        setHoveredIndex(index);
        break;
      case "project":
        const hoveredIndex2 = index;
        const hoveredIndex3 = secondindex !== undefined ? secondindex : -1;
        setHoveredIndex2(hoveredIndex2);
        setHoveredIndex3(hoveredIndex3);
        break;
    }
  };

  const handleMouseLeave = (type: "lessson" | "project") => {
    switch (type) {
      case "lessson":
        setHoveredIndex(null);
        break;
      case "project":
        setHoveredIndex2(null);
        setHoveredIndex3(null);
        break;
    }
  };

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const handleItemClick = (index: number) => {
    const isExpanded = expandedItems.includes(index);
    if (isExpanded) {
      setExpandedItems(
        expandedItems.filter((itemIndex) => itemIndex !== index)
      );
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  return (
    <div className="w-[274px]">
      <div
        onClick={handleDropdownClick}
        className="w-[274px] h-[25px]  rounded-[4px] flex justify-between ltr "
      >
        <div className="font-iran-yekan text-[16px] block">ورک‌اسپیس‌ها</div>
        <RiArrowDropDownLine className="w-[24px] h-[24px] " />
      </div>

      {isOpen && (
        <div className=" flex flex-col gap-[16px] mt-[16px]">
          <div className="">
            <Input
              icon={<BiSearch></BiSearch>}
              type="text"
              value=""
              placeholder="جستجو کنید"
              className="bg-gray-input w-[100%] h-[24px] rounded-4[px]"
            />
          </div>

          <div className="flex flex-col gap-[13px]">
            <Button
              type="button"
              disabled={false}
              className=" h-[32px] p-[10px]  bg-gray-button font-iran-yekan text-[12px] gap-[4px] rounded-[6px] "
              title="ساختن اسپیس جدید"
              icon={<LuPlusSquare />}
            />
          </div>

          {items.map((item, index) => (
            <div
              key={index}
              className=" inline-flex flex-col  p-[4px] rounded-[4px] justify-end items-center gap-[16px] "
            >
              <div
                onMouseEnter={() => handleMouseEnter(index, "lessson")}
                onMouseLeave={() => handleMouseLeave("lessson")}
                className="flex w-[100%] h-[28px] justify-between items-center  cursor-pointer rounded-[4px] hover:bg-gray-input"
              >
                <div
                  onClick={() => handleItemClick(index)}
                  className="flex  h-[100%] items-center gap-[8px]"
                >
                  <div
                    className={`w-[20px] h-[20px] rounded-[4px] ${item.color}`}
                  ></div>
                  <div className="font-iran-yekan text-[16px]">
                    {item.title}
                  </div>
                </div>
                {hoveredIndex === index && (
                  <BiDotsHorizontalRounded className="m-[4px]" />
                )}
              </div>

              {(expandedItems.includes(index) && item.projects && (
                <>
                  {item.projects &&
                    item.projects.map((project, projectIndex) => (
                      <div
                        onMouseEnter={() =>
                          handleMouseEnter(projectIndex, "project", index)
                        }
                        onMouseLeave={() => handleMouseLeave("project")}
                        className="flex justify-between font-iran-yekan text-[16px] w-[100%] h-[100%] "
                        key={projectIndex}
                      >
                        <div className="mr-[30px]">{project}</div>
                        {hoveredIndex2 === projectIndex &&
                          index === hoveredIndex3 && (
                            <BiDotsHorizontalRounded className="m-[4px]" />
                          )}
                      </div>
                    ))}
                  <Button
                    type="button"
                    disabled={false}
                    className=" h-[32px] p-[10px] text-green-button border-[2px] border-green-button font-iran-yekan text-[12px] gap-[4px] rounded-[6px] "
                    title="ساختن پروژه جدید"
                  />
                </>
              )) ||
                (expandedItems.includes(index) && !item.projects && (
                  <Button
                    type="button"
                    disabled={false}
                    className=" h-[32px] p-[10px] text-green-button border-[2px] border-green-button font-iran-yekan text-[12px] gap-[4px] rounded-[6px] "
                    title="ساختن پروژه جدید"
                  />
                ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
