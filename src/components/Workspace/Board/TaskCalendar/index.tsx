import { useEffect, useState } from "react";
import jalaliMoment from "jalali-moment";

import moment from "jalali-moment";
import ChangeDate from "../../../Common/ChangeDate";
import NewTask from "../../../Common/Modal/NewTask";

interface ITaskCalendarProps {
  displayedMonth: any;
}

interface TaskContent {
  [key: string]: string[];
}

const TaskCalendar: React.FC<ITaskCalendarProps> = ({ displayedMonth }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [taskContent, setTaskContent] = useState<TaskContent>({});
  const [currentDate, setCurrentDate] = useState<string | null>(null);

  const handleDateClick = (date: string) => {
    setIsModalOpen(true);
    setCurrentDate(date);
  };

  const handleTaskCreate = (content: string) => {
    const currentDateTasks = taskContent[currentDate!] || [];
    const updatedTasks = [...currentDateTasks, content];

    const updatedTaskContent: TaskContent = {
      ...taskContent,
      [currentDate!]: updatedTasks,
    };

    setTaskContent(updatedTaskContent);
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const weekDays: string[] = [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
  ];
  const [daysArray, setDaysArray] = useState<moment.Moment[]>([]);
  useEffect(() => {
    const firstDayOfMonth: moment.Moment = displayedMonth.startOf("jMonth");
    const daysInMonth: number = displayedMonth.daysInMonth();

    // Calculate the number of days from the previous month
    const prevMonthDays: number = firstDayOfMonth.day() + 1;

    // Calculate the total number of days to display, capped at 5 weeks
    // const maxTotalDays: number = 5 * 7;
    const totalDays: number = Math.min(daysInMonth + prevMonthDays);

    const _daysArray: moment.Moment[] = Array.from(
      { length: totalDays },
      (_, index) => {
        if (index < prevMonthDays) {
          // Display days from the previous month
          return firstDayOfMonth
            .clone()
            .subtract(prevMonthDays - index, "days");
        } else if (index < prevMonthDays + daysInMonth) {
          // Display days from the current month
          return firstDayOfMonth.clone().add(index - prevMonthDays, "days");
        } else {
          // Display days from the next month
          return firstDayOfMonth
            .clone()
            .add(index - prevMonthDays - daysInMonth, "days");
        }
      }
    );

    setDaysArray(_daysArray);
  }, [displayedMonth]); // Wheneve month changes, array of days should be updated.

  const [endPoint, setEndPoint] = useState<jalaliMoment.Moment | undefined>(
    undefined
  );

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* <ChangeDate
        displayedMonth={displayedMonth}
        onNextMonthClick={handleNextMonthClick}
        onPrevMonthClick={handlePrevMonthClick}
        onTodayClick={handleTodayClick}
      /> */}
      <div className="grid grid-cols-7 gap-4 mt-4 w-full">
        {/* Render week names in the first row */}
        {weekDays.map((day, index) => (
          <div
            key={`week-day-${index}`}
            className="text-right px-xs font-semibold "
          >
            {day}
          </div>
        ))}

        {/* Render days in the remaining rows */}
        {daysArray.map((date) => (
          <div
            key={date.format("jYYYY-jMM-jDD")}
            className={`w-full h-[156px] border border-[#AAAAAA]  flex flex-col items-center justify-center p-[10px] relative cursor-pointer ${
              date.isSame(jalaliMoment(), "day") ? "border-brand-primary" : ""
            }`}
            onClick={() => handleDateClick(date.format("jYYYY/jMM/jDD"))}
          >
            <div
              className={`text-xl font-semibold absolute bottom-[5px] left-[10px] ${
                date.isSame(jalaliMoment(), "day") ? "border-brand-primary" : ""
              }`}
            >
              {date.format("jD")}
            </div>
            {/* Display task content for this date */}
            {taskContent[date.format("jYYYY/jMM/jDD")] && (
              <div className="flex justify-center items-center w-[140px] h-[140px] break-all">
                {taskContent[date.format("jYYYY/jMM/jDD")].join(" , ")}
              </div>
            )}
          </div>
        ))}
      </div>
      {isModalOpen && (
        <NewTask
          date={currentDate!}
          handleTaskCreate={handleTaskCreate}
          handleClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default TaskCalendar;
