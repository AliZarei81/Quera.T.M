import { MdClose, MdArrowBack } from "react-icons/md";
import Button from "../Button";
import { MouseEvent, useState } from "react";
import PaginationBullet from "./PaginationBullet";
interface IModalProbs {
  hasPaginationBulet:boolean;
  modalClassname?: string;
  modalTitle?: string;
  totalPages: number;
  currentPage: number;
  handlePrevPage?: () => void;
  mBody: React.ReactNode; //Content of modal's body
  buttonTitle: string; //Content of footer button
  buttonClassName?: string;
  onClick?(e: MouseEvent<HTMLButtonElement>): void;
  mFooter?:React.ReactNode;
  mBodyStyle?:string
}
const Modal: React.FC<IModalProbs> = ({
  onClick,
  modalTitle,
  currentPage,
  totalPages,
  mBody,
  buttonTitle,
  modalClassname,
  buttonClassName,
  handlePrevPage,
  hasPaginationBulet,
  mFooter,
  mBodyStyle
}): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={` top-0 left-0  h-full flex  flex-col items-center justify-around rounded-lg gap-l z-50 relative  ${
        isOpen ? "block" : "hidden"
      } ${modalClassname}`}
    >
      <div
        className={
          " top-0 left-0 w-full h-full flex  flex-col items-center justify-between rounded-lg bg-gray-secondary gap-l  relative p-[20px] "
        }
      >
        {/* Header content goes here */}
        <div className="flex justify-center w-full">
          <button
            className="text-gray-800 w-[24px] h-[24px] absolute right-s "
            onClick={() => setIsOpen(false)}
          >
            <MdClose /> {/* Close button with the close icon */}
          </button>
          <h2 className="text-[24px] font-semibold self-center">
            {modalTitle}
          </h2>

          {totalPages > 1 && currentPage > 1 && (
            <button
              className="text-gray-800 w-[24px] h-[24px] absolute left-xs"
              onClick={handlePrevPage}
            >
              <MdArrowBack /> {/* Previous Page button with the arrow icon */}
            </button>
          )}
        </div>
        {/* Body content goes here  */}
        <div className={`w-full flex justify-start ${mBodyStyle}`}>{mBody}</div>
        {/* Footer content goes here */}
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
      </div>
        {hasPaginationBulet&&<PaginationBullet currentPage={currentPage} totalPages={totalPages}/>}
    </div>
  );
};
export default Modal;