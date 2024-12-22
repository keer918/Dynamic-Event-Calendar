export const loadEvents = () => JSON.parse(localStorage.getItem('events')) || {};
export const saveEvents = (events) => localStorage.setItem('events', JSON.stringify(events));
