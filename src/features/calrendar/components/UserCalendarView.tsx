import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import UserEvent from './Event';
import { CalendarEventType } from '../types/calendarType';

moment.locale('ko');
const localizer = momentLocalizer(moment);

type UserCalendarView = {
  userEvent :CalendarEventType[]
}
export default function UserCalendarView({userEvent}:UserCalendarView){
  return (
    <Calendar
        className="
        [&_.rbc-day-bg:nth-child(1)]:bg-red-50 
        [&_.rbc-day-bg:nth-child(7)]:bg-blue-50"
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 800 }}
        events={userEvent}
        components={{
          event: (eventProps) => {
            console.log('이벤트 정보:', eventProps.event);
            return <UserEvent {...eventProps.event} />;
          }
        }}
      />
  )
}