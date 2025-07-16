'use client'
import { useEffect, useRef } from "react";

import { Calendar,momentLocalizer } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'

import { useCalendarContext } from "../provider/CalendarContext";
import CalendarToolbar from "./CalendarToolbar";
import CalendarEvent from "./CalendarEvent";

const localizer = momentLocalizer(moment);

export default function CalendarView(){
  const { events, isMondayStart, currentDate, setCurrentDate } = useCalendarContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef(0);
  const cooldown = 500;

  useEffect(() => {
    moment.updateLocale('en', {
      week: { dow: isMondayStart ? 1 : 0 },
    })
    //스크롤 Month이동 이밴트
    const container = containerRef.current;
    if (!container) return
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now()
      if (now - lastScrollTime.current < cooldown) return
      lastScrollTime.current = now
      e.preventDefault()
      if (e.deltaY > 0) {
        setCurrentDate(prev => moment(prev).add(1, 'month').toDate())
      } else if (e.deltaY< 0) {
        setCurrentDate(prev => moment(prev).subtract(1, 'month').toDate())
      }
    }
    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => container.removeEventListener('wheel', handleWheel)
    }, [isMondayStart])

  return (
    <div ref={containerRef} className="w-[354px] h-[586px]">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          date={currentDate}
          onNavigate={setCurrentDate}
          style={{ height: '100%' }}
          components={{
            event: (eventProps) => <CalendarEvent {...eventProps.event} />,
            toolbar: CalendarToolbar,
          }}
        />
    </div>
  )
}