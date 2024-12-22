import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ selectedDate, events, addEvent,deleteEvent, onClose }) => {
  const [newEvent, setNewEvent] = useState({
    name: "",
    startTime: "",
    endTime: "",
    description: "",
  });
  const handleDeleteEvent = (eventIndex) => {
    const dateKey = selectedDate.format("YYYY-MM-DD");
    deleteEvent(dateKey, eventIndex); // Delete event at the specified index
  };

  const handleSaveEvent = () => {
    if (!newEvent.name || !newEvent.startTime || !newEvent.endTime) {
      alert("Please fill in all required fields.");
      return;
    }

    const dateKey = selectedDate.format("YYYY-MM-DD");
    const dayEvents = events[dateKey] || [];

    const hasConflict = dayEvents.some(
      (event) =>
        newEvent.startTime < event.endTime && newEvent.endTime > event.startTime
    );

    if (hasConflict) {
      alert("Event overlaps with an existing event.");
      return;
    }

    addEvent(dateKey, newEvent);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <strong>Events on {selectedDate.format("MMMM DD, YYYY")}</strong>
        <div className="event-list">
          {events[selectedDate.format("YYYY-MM-DD")]?.length > 0 ? (
            events[selectedDate.format("YYYY-MM-DD")].map((event, index) => (
              <div key={index} className="event-item">
                <strong>{event.name}</strong>
                <p>{event.startTime} - {event.endTime}</p>
                <p>{event.description}</p>
                <button onClick={() => handleDeleteEvent(index)} className="delete-btn">
                    Delete
                  </button>
              </div>
            ))
          ) : (
            <i>No events for this day.</i>
          )}
        </div>
        <strong>Add Event</strong><br></br>
        <label>
          Event Name:
          <input
            type="text"
            value={newEvent.name}
            onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
          />
        </label>
        <label>
          Start Time:
          <input
            type="time"
            value={newEvent.startTime}
            onChange={(e) => setNewEvent({ ...newEvent, startTime: e.target.value })}
          />
        </label>
        <label>
          End Time:
          <input
            type="time"
            value={newEvent.endTime}
            onChange={(e) => setNewEvent({ ...newEvent, endTime: e.target.value })}
          />
        </label>
        <label>
          Description:
          <textarea
            value={newEvent.description}
            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
          ></textarea>
        </label>
        <div className="modal-actions">
          <button onClick={handleSaveEvent}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
