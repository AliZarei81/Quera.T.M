import { GrFormClose } from "react-icons/gr";
import Button from "../../../Common/Button";
import { PropsWithChildren, useEffect, useState } from "react";

interface IFilterProps extends PropsWithChildren {
  isVisible: boolean;
  onClose: () => void;
  onAddFilter: () => void;
}

const Filter: React.FC<IFilterProps> = ({
  isVisible,
  onClose,
  onAddFilter,
  children,
}): React.JSX.Element | null => {
  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    if (target.id === "wrapper") {
      onClose();
    }
  };
  if (!isVisible) return null;
  return (
    <div
      className="w-full h-full fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-1/3 h-1/4 bg-white rounded flex flex-col gap-s p-s">
        <div className="w-full flex items-center justify-between">
          <h3 className="text-body-xl font-black">فیلترها</h3>
          <Button
            type="button"
            disabled={false}
            icon={<GrFormClose size={30} />}
            onClick={() => onClose()}
          />
        </div>
        {children}
        <Button
          title="افزودن فیلتر جدید"
          type="button"
          disabled={false}
          className="text-brand-primary text-body-[12px]"
          onClick={onAddFilter}
        />
      </div>
    </div>
  );
};

export default Filter;
