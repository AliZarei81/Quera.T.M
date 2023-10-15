import { LiaTrashAlt } from "react-icons/lia";
import Button from "../../../../Common/Button";
import CommonDropdown from "../../../../Common/CommonDropdown";

interface IFilterItemProps {
  onRemove: () => void;
}

const FilterItem: React.FC<IFilterItemProps> = ({ onRemove }) => {
  return (
    <div className="flex items-center gap-xs">
      <p className="whitespace-nowrap">تسک هایی که</p>
      <CommonDropdown type="search between filters" />
      <p className="whitespace-nowrap">آن ها</p>
      <CommonDropdown type="select" />
      <CommonDropdown type="is and is not" />
      <Button
        type="button"
        disabled={false}
        icon={<LiaTrashAlt size={30} className="text-red-primary" />}
        onClick={onRemove}
      />
    </div>
  );
};

export default FilterItem;
