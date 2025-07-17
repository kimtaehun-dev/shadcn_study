'use client'
import { useEffect, useRef, useState } from 'react'
import moment from 'moment'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import UserEvent from './UserEvent'
import CustomToolbar from './CustomToolbar'
import { CalendarEventType } from '../types/calendarType'

const localizer = momentLocalizer(moment)

type Props = {
  userEvent: CalendarEventType[]
  isMondayStart?: boolean
}

export default function UserCalendarView({ userEvent, isMondayStart = false }: Props) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const lastScrollTime = useRef(0)
  const cooldown = 500 // 0.7초 이상 지나야 다음 스크롤 허용

  useEffect(() => {
    moment.updateLocale('ko', {
      week: { dow: isMondayStart ? 1 : 0 },
    })
  }, [isMondayStart])

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (e: WheelEvent) => {
      const now = Date.now()
      if (now - lastScrollTime.current < cooldown) return

      lastScrollTime.current = now
      e.preventDefault()

      if (e.deltaY > 0) {
        // 스크롤 다운 → 다음 달
        setCurrentDate(prev => moment(prev).add(1, 'month').toDate())
      } else if (e.deltaY< 0) {
        // 스크롤 업 → 이전 달
        setCurrentDate(prev => moment(prev).subtract(1, 'month').toDate())
      }
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => container.removeEventListener('wheel', handleWheel)
  }, [])

  return (
    <div ref={containerRef} className="calendar-frame w-[354px] h-[586px]">
      <Calendar
        localizer={localizer}
        events={userEvent}
        startAccessor="start"
        endAccessor="end"
        date={currentDate}
        onNavigate={setCurrentDate}
        style={{ height: '100%' }}
        dayLayoutAlgorithm={'no-overlap'}
        components={{
          event: (eventProps) => <UserEvent {...eventProps.event} />,
          toolbar: CustomToolbar,
        }}
      />
    </div>
  )
}
