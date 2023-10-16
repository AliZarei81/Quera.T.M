import React, { useEffect, useState } from "react";
import jalaliMoment from "jalali-moment";
import ChangeDate from "../ChangeDate";
import { BsCalendar4Event } from "react-icons/bs";
interface ICalendarProbs {
  onClose: () => void;
}
const Calendar: React.FC<ICalendarProbs> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [todayName, setTodayName] = useState("");
  const [timeAfter1Hour, setTimeAfter1Hour] = useState("");
  const [tomorrowName, setTomorrowName] = useState("");
  const [endOfWeekName, setEndOfWeekName] = useState("");
  const [nextWeekName, setNextWeekName] = useState("");
  const [endOfNextWeekName, setEndOfNextWeekName] = useState("");
  const [twoWeeksLaterName, setTwoWeeksLaterName] = useState("");
  const [fourWeeksLaterName, setFourWeeksLaterName] = useState("");
  const [displayedMonth, setDisplayedMonth] = useState(jalaliMoment());
  //state for selected days
  const [startPoint, setStartPoint] = useState<jalaliMoment.Moment | null>(
    null
  );
  const [endPoint, setEndPoint] = useState<jalaliMoment.Moment | null>(null);
  useEffect(() => {
    const today = jalaliMoment().locale("fa");
    const month = today.format("jMMMM");
    setTodayName(today.format("dddd"));

    const oneHourLater = today.add(1, "hour");
    setTimeAfter1Hour(oneHourLater.format("HH:mm"));

    const tomorrow = today.add(1, "day");
    setTomorrowName(tomorrow.format("dddd"));

    const endOfWeek = today.endOf("week");
    setEndOfWeekName(endOfWeek.format("dddd"));

    const nextWeek = today.add(1, "day");
    setNextWeekName(nextWeek.format("dddd"));

    const endOfNextWeek = nextWeek.endOf("week");
    setEndOfNextWeekName(endOfNextWeek.format("jD jMMMM"));

    const twoWeeksLater = today.add(2, "day");
    setTwoWeeksLaterName(twoWeeksLater.format("jD jMMMM"));

    const fourWeeksLater = today.add(4, "weeks");
    setFourWeeksLaterName(fourWeeksLater.format("jD jMMMM"));
  }, []);
  // Handle clicking on a day to select start and end points
  const handleDateClick = (selectedDate: jalaliMoment.Moment) => {
    if (!startPoint) {
      setStartPoint(selectedDate);
    } else if (!endPoint) {
      setEndPoint(selectedDate);
    } else {
      // Reset the selection if both start and end dates are already selected
      setStartPoint(selectedDate);
      setEndPoint(null);
    }
  };
  // Handle clicking on "امروز"
  const handleTodayClick = () => {
    setDisplayedMonth(jalaliMoment()); // Set to the current month
  };

  // Handle clicking on the next month
  const handleNextMonthClick = () => {
    setDisplayedMonth(displayedMonth.clone().add(1, "month")); // Go to the next month
  };

  // Handle clicking on the previous month
  const handlePrevMonthClick = () => {
    setDisplayedMonth(displayedMonth.clone().subtract(1, "month")); // Go to the previous month
  };

  return (
    <div
      className={`${
        isOpen ? "block bg-white" : "hidden"
      } absolute top-[60px] left-[125px] w-[850px] rounded-[20px] pt-[15px] shadow-2xl`}
    >
      <div className="flex justify-between text-[24px] py-[20px] px-[10px] ">
        <div className="flex justify-start  gap-[8px] ">
          <BsCalendar4Event className="text-[32px] text-[#BDBDBD]" />
          <p>زمان شروع</p>
          <p>{startPoint ? startPoint.format("jYYYY/jM/jD") : ""}</p>
        </div>
        <div className="flex justify-start w-[438px] gap-[8px]">
          <BsCalendar4Event className="text-[32px] text-[#BDBDBD]" />
          <p>زمان پایان</p>
          <p>{endPoint ? endPoint.format("jYYYY/jM/jD") : ""}</p>
        </div>
      </div>
      <div className="flex justify-start  border-t border-gray-secondary">
        <div className="flex flex-col bg-[#F7F8F9] w-[238px] gap-[24px] p-[24px]">
          <div className="flex justify-between">
            <p>امروز</p>
            <p className="text-gray-primary">{todayName}</p>
          </div>
          <div className="flex justify-between">
            <p>کمی بعد</p>
            <p className="text-gray-primary">{timeAfter1Hour}</p>
          </div>
          <div className="flex justify-between">
            <p>فردا</p>
            <p className="text-gray-primary">{tomorrowName}</p>
          </div>
          <div className="flex justify-between">
            <p>این اخر هفته</p>
            <p className="text-gray-primary">{endOfWeekName}</p>
          </div>
          <div className="flex justify-between">
            <p>هفته ی آینده</p>
            <p className="text-gray-primary">{nextWeekName}</p>
          </div>
          <div className="flex justify-between">
            <p>آخر هفته ی آینده</p>
            <p className="text-gray-primary">{endOfNextWeekName}</p>
          </div>
          <div className="flex justify-between">
            <p>دو هفته ی دیگر</p>
            <p className="text-gray-primary">{twoWeeksLaterName}</p>
          </div>
          <div className="flex justify-between">
            <p>چهار هفته ی دیگر</p>
            <p className="text-gray-primary"> {fourWeeksLaterName}</p>
          </div>
        </div>
        <div className="w-[600px] p-[16px] relative">
          <div className="font-bold text-2xl mb-[16px]">
            <ChangeDate
              onTodayClick={handleTodayClick}
              onNextMonthClick={handleNextMonthClick}
              onPrevMonthClick={handlePrevMonthClick}
              displayedMonth={displayedMonth}
            />
          </div>
          <div className="grid grid-cols-7 gap-[4px]">
            {[
              "شنبه",
              "یکشنبه",
              "دوشنبه",
              "سه شنبه",
              "چهارشنبه",
              "پنجشنبه",
              "جمعه",
            ].map((day, index) => (
              <div key={index} className="text-center text-gray-600">
                {day}
              </div>
            ))}
            {Array.from(
              { length: displayedMonth.jDaysInMonth() },
              (_, i) => i + 1
            ).map((day) => (
              <div
                key={day}
                className={`flex justify-center items-center text-center relative cursor-pointer`}
                onClick={() =>
                  handleDateClick(displayedMonth.clone().jDate(day))
                }
              >
                <div
                  className={`w-[32px] h-[32px]  flex items-center justify-center mx-auto ${
                    day === startPoint?.jDate()
                      ? "bg-cyan-primary"
                      : day === endPoint?.jDate()
                      ? "bg-cyan-primary"
                      : startPoint &&
                        endPoint &&
                        day > startPoint.jDate() &&
                        day < endPoint.jDate()
                      ? "bg-cyan-secondary"
                      : "border-none"
                  }`}
                >
                  {day}
                </div>
              </div>
            ))}

            <button
              disabled={false}
              onClick={onClose}
              className="w-[125px] h-[32px] bg-brand-primary text-white rounded-[4px] absolute bottom-[16px] left-[16px]"
            >
              بستن
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
