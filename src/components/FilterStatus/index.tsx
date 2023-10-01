import React from "react";
import Button from "../Button";
import { BsSliders } from "react-icons/bs";

const Filterstatus: React.FC = () => {
  return (
    <div className="w-[238px] h-[29px] flex gap-s">
      <div className="w-[67px] h-[24px] gap-xs flex font-iran-yekan text-body-xs self-start">
        <Button
          title="فیلترها"
          disabled={false}
          onClick={() => 0}
          icon={<BsSliders />}
        />
      </div>
      <div className="w-[155px] h-[29px] rounded-[4px] bg-blue-secondary flex items-center justify-center [padding: 4px, 12px , 4px , 12px]">
        <div className="font-iran-yekan text-[12px] text-blue-primary">
          دسته‌بندی‌شده با: وضعیت
        </div>
      </div>
    </div>
  );
};

export default Filterstatus;
