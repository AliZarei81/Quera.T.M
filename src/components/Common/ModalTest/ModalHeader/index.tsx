import { GrFormClose } from "react-icons/gr";
import Button from "../../Button";

interface IModalHeaderProps {
  title: string;
  onClose: () => void;
}

const ModalHeader: React.FC<IModalHeaderProps> = ({ title, onClose }) => {
  return (
    <div className="w-full flex items-center justify-between">
      <h1>{title}</h1>
      <Button
        type="button"
        disabled={false}
        icon={<GrFormClose size={30} />}
        onClick={() => onClose()}
      />
    </div>
  );
};

export default ModalHeader;
