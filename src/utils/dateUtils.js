import dayjs from 'dayjs';

export const isToday = (date) => dayjs().isSame(date, 'day');
export const isSameMonth = (date, currentDate) => date.isSame(currentDate, 'month');
export const formatDateKey = (date) => date.format('YYYY-MM-DD');
