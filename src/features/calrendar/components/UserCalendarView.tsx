'use client'
import { useState } from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import UserEvent from './UserEvent';
import CustomToolbar from './CustomToolbar';
import { CalendarEventType } from '../types/calendarType';

moment.locale('ko');
const localizer = momentLocalizer(moment);

type UserCalendarView = {
  userEvent :CalendarEventType[]
}
export default function UserCalendarView({userEvent}:UserCalendarView){
  const [currentDate, setCurrentDate] = useState(new Date());
  
  return (
    <Calendar
        className="
        [&_.rbc-day-bg:nth-child(1)]:bg-red-50 
        [&_.rbc-day-bg:nth-child(7)]:bg-blue-50"
        date={currentDate}
        onNavigate={(newDate) => setCurrentDate(newDate)}
        localizer={localizer}
        events={userEvent}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 800 }}
        components={{
          event: (eventProps) => {
            return <UserEvent {...eventProps.event} />;
          },
          toolbar: CustomToolbar
        }}
      />
  )
}