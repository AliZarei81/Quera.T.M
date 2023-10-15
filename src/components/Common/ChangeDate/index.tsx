import React from "react";
import Button from "../Button";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const ChangeDate: React.FC = () => {
  return (
    <div className="gap-xs flex">
      <Button
        type="button"
        className="body-xs self-start rounded-md border-gray-secondary hover:bg-gray-secondary border-2 border-solid p-xs justify-center"
        title="امروز"
        disabled={false}
      />
      <div className="flex items-center gap-xs">
        <Button
          type="button"
          title=""
          disabled={false}
          onClick={() => 0}
          icon={<BsChevronRight />}
        />
        <Button
          type="button"
          title=""
          disabled={false}
          onClick={() => 0}
          icon={<BsChevronLeft />}
        />
        <p className="body-xs">اردیبهشت ۱۴۰۲</p>
      </div>
    </div>
  );
};

export default ChangeDate;
