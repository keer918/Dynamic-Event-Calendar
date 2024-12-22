import React, { useState } from "react";
import dayjs from "dayjs";
import "./App.css";
import Header from "./components/Header";
import CalendarGrid from "./components/CalendarGrid";
import Modal from "./components/Modal";
import { exportEvents } from "./utils/Export";

const App = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [events, setEvents] = useState(() => JSON.parse(localStorage.getItem("events")) || {});
  const [draggedEvent, setDraggedEvent] = useState(null);

  const handleMonthChange = (direction) => {
    setCurrentDate(currentDate.add(direction, "month"));
  };

  const handleOpenModal = (date) => {
    setSelectedDate(date);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const addEvent = (dateKey, newEvent) => {
    setEvents((prevEvents) => {
      const dayEvents = prevEvents[dateKey] || [];
      const updatedEvents = { ...prevEvents, [dateKey]: [...dayEvents, newEvent] };
      localStorage.setItem("events", JSON.stringify(updatedEvents));
      return updatedEvents;
    });
  };

  const deleteEvent = (dateKey, eventIndex) => {
    setEvents((prevEvents) => {
      const dayEvents = prevEvents[dateKey] || [];
      const updatedEvents = [...dayEvents.slice(0, eventIndex), ...dayEvents.slice(eventIndex + 1)];
      const updatedEventsObj = { ...prevEvents, [dateKey]: updatedEvents };

      if (updatedEvents.length === 0) {
        delete updatedEventsObj[dateKey];
      }

      localStorage.setItem("events", JSON.stringify(updatedEventsObj));
      return updatedEventsObj;
    });
  };

  const handleEventDragStart = (e, dateKey, eventIndex) => {
    setDraggedEvent({ dateKey, eventIndex });
  };

  const handleEventDrop = (e, targetDateKey) => {
    if (draggedEvent) {
      const { dateKey, eventIndex } = draggedEvent;
      const draggedEventData = events[dateKey][eventIndex];

      deleteEvent(dateKey, eventIndex);
      addEvent(targetDateKey, draggedEventData);

      setDraggedEvent(null);
    }
  };

  return (
    <div className="app">
      <Header currentDate={currentDate} onMonthChange={handleMonthChange} />
      <CalendarGrid
        currentDate={currentDate}
        events={events}
        onDayClick={handleOpenModal}
        onEventDragStart={handleEventDragStart}
        onEventDrop={handleEventDrop}
      />
      {modalOpen && (
        <Modal
          selectedDate={selectedDate}
          events={events}
          addEvent={addEvent}
          deleteEvent={deleteEvent}
          onClose={handleCloseModal}
        />
      )}

      <div className="export-buttons">
        <button onClick={() => exportEvents(events, currentDate, "json")}>
          Export JSON
        </button>
        <button onClick={() => exportEvents(events, currentDate, "csv")}>
          Export CSV
        </button>
      </div>
    </div>
  );
};

export default App;
