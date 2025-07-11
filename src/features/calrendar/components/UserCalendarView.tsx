'use client'
import { useState } from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { cva } from 'class-variance-authority';

import UserEvent from './UserEvent';
import CustomToolbar from './CustomToolbar';
import { CalendarEventType, GetEventsType } from '../types/calendarType';


const calendarVariants = cva('',{
    variants:{
      variant :{
        monday: '[&_.rbc-day-bg:nth-child(6)]:bg-red-50 [&_.rbc-day-bg:nth-child(7)]:bg-blue-50',
        sunday: '[&_.rbc-day-bg:nth-child(1)]:bg-red-50 [&_.rbc-day-bg:nth-child(7)]:bg-blue-50',
      }
    }
  });


type UserCalendarView = {
  userEvent :CalendarEventType[],
  isMondayStart ?: boolean,
}
export default function UserCalendarView({userEvent, isMondayStart=false}:UserCalendarView){
  const [currentDate, setCurrentDate] = useState(new Date());
  //주 시작일 월,화 설정
  moment.updateLocale('ko', {
      week: {
        dow: isMondayStart ? 1:0 
      },
    });
  const localizer = momentLocalizer(moment);
  const calendarClass = calendarVariants({ variant: isMondayStart ? 'monday' : 'sunday' });
  return (
    <Calendar
        className={calendarClass}
        date={currentDate}
        onNavigate={(newDate) => setCurrentDate(newDate)}
        localizer={localizer}
        events={result}
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