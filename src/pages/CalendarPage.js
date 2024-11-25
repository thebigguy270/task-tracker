import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarPage = () => {
  const handleDateClick = (date) => {
    alert(`Selected date: ${date}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Calendar</h1>
      <Calendar onClickDay={handleDateClick} />
    </div>
  );
};

export default CalendarPage;
