import React from "react";
import dayjs from "dayjs";
import "./CalendarGrid.css";

const CalendarGrid = ({ currentDate, events, onDayClick, onEventDragStart, onEventDrop }) => {
  const generateCalendar = () => {
    const startDay = currentDate.startOf("month").startOf("week");
    const endDay = currentDate.endOf("month").endOf("week");
    let days = [];
    let day = startDay;
    while (day.isBefore(endDay, "day")) {
      days.push(day);
      day = day.add(1, "day");
    }
    return days;
  };

  return (
    <div className="calendar-grid">
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
        <div key={d} className="day-label">{d}</div>
      ))}
      {generateCalendar().map((day) => (
        <div
          key={day.format("YYYY-MM-DD")}
          className={`calendar-day ${
            day.isSame(currentDate, "month") ? "" : "outside-month"
          } ${day.isSame(dayjs(), "day") ? "today" : ""}`}
          onClick={() => onDayClick(day)}
          onDragOver={(e) => e.preventDefault()} // Allow drop
          onDrop={(e) => onEventDrop(e, day.format("YYYY-MM-DD"))}
        >
          <span>{day.format("D")}</span>
          {events[day.format("YYYY-MM-DD")] &&
            events[day.format("YYYY-MM-DD")].map((event, index) => (
              <div
                key={index}
                className="event-preview"
                draggable
                onDragStart={(e) => onEventDragStart(e, day.format("YYYY-MM-DD"), index)}
              >
                {event.name}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default CalendarGrid;
