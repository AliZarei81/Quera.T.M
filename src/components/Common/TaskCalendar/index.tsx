import React, { useState } from "react";
import NewTask from "../Modal/NewTask";
import moment from "jalali-moment";

interface TaskContent {
  [key: string]: string[];
}

const TaskCalendar: React.FC = ():JSX.Element => {
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

  const daysInMonth: number = moment(selectedDate).daysInMonth();
  const firstDayOfMonth: moment.Moment = moment(selectedDate).startOf("jMonth");

  // Calculate the number of days from the previous month
  const prevMonthDays: number = firstDayOfMonth.weekday();

  // Calculate the number of days from the next month
  const nextMonthDays: number =
    6 - moment(selectedDate).endOf("jMonth").weekday();

  // Calculate the total number of days to display, capped at 5 weeks
  const maxTotalDays: number = 5 * 7;
  const totalDays: number = Math.min(
    maxTotalDays,
    daysInMonth + prevMonthDays + nextMonthDays
  );

  // Create an array of days in the selected month, including days from the previous and next months
  const daysArray: moment.Moment[] = Array.from(
    { length: totalDays },
    (_, index) => {
      if (index < prevMonthDays) {
        // Days from the previous month
        return firstDayOfMonth.clone().subtract(prevMonthDays - index, "days");
      } else if (index < prevMonthDays + daysInMonth) {
        // Days from the current month
        return firstDayOfMonth.clone().add(index - prevMonthDays, "days");
      } else {
        // Days from the next month
        return firstDayOfMonth
          .clone()
          .add(index - prevMonthDays - daysInMonth, "days");
      }
    }
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-7 gap-4 mt-4">
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
            className="w-[146px] h-[156px] border border-[#AAAAAA]  flex flex-col items-center justify-center p-[10px] relative cursor-pointer"
            onClick={() => handleDateClick(date.format("jYYYY/jMM/jDD"))}
          >
            <div className="text-xl font-semibold absolute bottom-[5px] left-[10px]">
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
