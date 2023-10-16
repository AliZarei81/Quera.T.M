import { PropsWithChildren } from "react";
import { GrFormClose } from "react-icons/gr";
import Button from "../Button";
import ModalHeader from "./ModalHeader";

interface IModalProps extends PropsWithChildren {
  title: string;
  isVisible: boolean;
  onClose: () => void;
}

const Modal: React.FC<IModalProps> = ({
  title,
  isVisible,
  onClose,
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
        <ModalHeader title={title} onClose={onClose} />
        {children}
      </div>
    </div>
  );
};

export default Modal;
