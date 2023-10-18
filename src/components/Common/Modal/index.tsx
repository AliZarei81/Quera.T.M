import { MdClose, MdArrowBack } from "react-icons/md";
import Button from "../Button";
import { MouseEvent } from "react";
import PaginationBullet from "./PaginationBullet";
interface IModalProbs {
  isVisible: boolean;
  onClose: () => void;
  hasPaginationBulet: boolean;
  modalTitle?: string;
  totalPages: number;
  currentPage: number;
  handlePrevPage?: () => void;
  mBody: React.ReactNode; //Content of modal's body
  buttonTitle?: string; //Content of footer button
  buttonClassName?: string;
  onClick?(e: MouseEvent<HTMLButtonElement>): void;
  mFooter?: React.ReactNode;
  mBodyStyle?: string;
  hasFooter: boolean;
}
const Modal: React.FC<IModalProbs> = ({
  isVisible,
  onClose,
  onClick,
  modalTitle,
  currentPage,
  totalPages,
  mBody,
  buttonTitle = "",
  buttonClassName,
  handlePrevPage,
  hasPaginationBulet,
  mFooter,
  mBodyStyle,
  hasFooter,
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
      className="z-30 w-full h-full absolute inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col gap-xl justify-center items-center"
      id="wrapper"
      //@ts-ignore
      onClick={handleClose}
    >
      <div className="w-[550px] h-max bg-white rounded-md flex flex-col gap-xl p-s relative">
        <div className="w-full flex items-center justify-around">
          {/* Header content goes here */}
          <Button
            icon={<MdClose size={30} />}
            className="text-gray-darker absolute right-s"
            onClick={() => onClose()}
          />
          <h2 className="text-body-xl font-semibold">{modalTitle}</h2>

          {totalPages > 1 && currentPage > 1 && (
            <Button
              className="text-gray-800 w-[24px] h-[24px] absolute left-xs"
              onClick={handlePrevPage}
              icon={<MdArrowBack size={30} />}
            />
          )}
        </div>
        {/* Body content goes here  */}
        <div className={`w-full flex justify-start bg-white ${mBodyStyle}`}>
          {mBody}
        </div>
        {/* Footer content goes here */}
        {hasFooter && (
          <div className="w-full flex justify-center px-[24px]">
            <Button
              type="button"
              disabled={false}
              className={` flex justify-center items-start w-[415px] h-[40px] rounded-md  text-[14px] text-gray-secondary bg-brand-primary font-extrabold ${buttonClassName}`}
              onClick={onClick}
              title={buttonTitle}
            ></Button>
            {mFooter}
          </div>
        )}
      </div>
      {hasPaginationBulet && (
        <PaginationBullet currentPage={currentPage} totalPages={totalPages} />
      )}
    </div>
  );
};
export default Modal;
