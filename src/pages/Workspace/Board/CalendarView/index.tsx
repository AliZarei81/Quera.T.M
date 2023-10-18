import jalaliMoment from "jalali-moment";
import { useState } from "react";
import TaskCalendar from "../../../../components/Workspace/Board/TaskCalendar";
import Header from "../../../../components/Workspace/Board/Header";
import ChangeDate from "../../../../components/Common/ChangeDate";

const CalendarView = () => {
  const [displayedMonth, setDisplayedMonth] = useState(jalaliMoment());

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
    <>
      <Header>
        <ChangeDate
          displayedMonth={displayedMonth}
          onNextMonthClick={handleNextMonthClick}
          onPrevMonthClick={handlePrevMonthClick}
          onTodayClick={handleTodayClick}
        />
      </Header>
      <TaskCalendar displayedMonth={displayedMonth} />
    </>
  );
};

export default CalendarView;
