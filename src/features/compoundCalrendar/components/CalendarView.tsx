'use client'
import { useEffect, useRef } from "react";

import { cva } from "class-variance-authority";
import { Calendar,momentLocalizer } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'

import { useCalendarContext } from "../provider/CalendarContext";
import CalendarToolbar from "./CalendarToolbar";
import CalendarEvent from "./CalendarEvent";
import CalendarMonthHeader from "./CalendarMonthHead";

const calendarVariants = cva(
  `w-full h-full
  [&_.rbc-row-bg]:!right-[0]
  [&_.rbc-header]:!p-0
  [&_.rbc-date-cell]:!text-center
  [&_.rbc-date-cell]:!pr-0
  [&_.rbc-event]:!p-0
  `,{
    variants : {
      variant : {
        clearBorder : `
          [&_.rbc-month-view]:border-none! 
          [&_.rbc-day-bg]:border-none!
          [&_.rbc-header]:border-none!
          [&_.rbc-month-row]:border-none!
          `,
        default : ``
      }
    }
  }
)

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
          className={calendarVariants({ variant: 'clearBorder' })}
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          view="month"
          date={currentDate}
          onNavigate={setCurrentDate}
          style={{ height: '100%' }}
          components={{
            event: (eventProps) => <CalendarEvent {...eventProps.event} />,
            toolbar: CalendarToolbar,
            month :{
              header : CalendarMonthHeader
            }
          }}
        />
    </div>
  )
}