import { GrFormClose } from "react-icons/gr";
import { LiaTrashAlt } from "react-icons/lia";
import Button from "../../../Common/Button";

interface IFilterProps {
  isVisible: boolean;
  onClose: () => void;
}

const Filter: React.FC<IFilterProps> = ({
  isVisible,
  onClose,
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
        <div className="w-full flex items-center justify-between">
          <p>تسک هایی که</p>
          <Button
            type="button"
            disabled={false}
            icon={<LiaTrashAlt size={30} className="text-red-primary" />}
          />
        </div>
        <Button
          title="افزودن فیلتر جدید"
          type="button"
          disabled={false}
          className="text-brand-primary"
        />
      </div>
    </div>
  );
};

export default Filter;
