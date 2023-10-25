import React from "react";
import Button from "../Button";
import jalaliMoment from "jalali-moment";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
interface IChangeDateProbs {
  onTodayClick: () => void;
  onNextMonthClick: () => void;
  onPrevMonthClick: () => void;
  displayedMonth: jalaliMoment.Moment;
}
const ChangeDate: React.FC<IChangeDateProbs> = ({
  displayedMonth,
  onNextMonthClick,
  onPrevMonthClick,
  onTodayClick,
}) => {
  const formattedMonthYear = displayedMonth.locale("fa").format("jMMMM jYYYY");
  return (
    <div className="w-[238px]  h-[24] gap-xs flex">
      <div
        className="w-[30px] h-[21px] font-iran-yekan body-xs self-start cursor-pointer"
        onClick={onTodayClick}
      >
        امروز
      </div>
      <div className="w-[30px] h-[24px] flex">
        <Button
          title=""
          disabled={false}
          onClick={onPrevMonthClick}
          icon={<BsChevronRight />}
        />
        <Button
          title=""
          disabled={false}
          onClick={onNextMonthClick}
          icon={<BsChevronLeft />}
        />
      </div>
      <div className="w-[150px] h-[21px] body-xs font-iran-yekan self-start flex">
        {formattedMonthYear}
      </div>
    </div>
  );
};

export default ChangeDate;
