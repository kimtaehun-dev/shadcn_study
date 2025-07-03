'use client'
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // 기본 CSS 임포트
import {reducingDate,formatDateToString } from '@/lib/fixdate';
import EventDialog from './Dialog';

moment.locale('ko');
const localizer = momentLocalizer(moment); // 또는 dateFnsLocalizer 사용

const apiEvents = [
  {
    start: "2025-7-10-10",
    end: "2025-7-10-12",
    title: '회의',
    color: '#63f17b',
  },
  {
    start: "2025-7-11-14-0",
    end: "2025-7-11-16-0",
    title: '프로젝트 발표',
    color: '#636df1',
  },
  {
    start: "2025-7-7-14-0",
    end:"2025-7-11-16-0",
    title: '프로젝트 기간',
    color: '#f19c63',
  },
];

const parsingDate = reducingDate(apiEvents);
type eType = {
  start: Date;
  end: Date;
  title: string;
  color: string;
}
const eventStyleGetter = (event:eType) => ({
  style: {
    backgroundColor: event.color || '#3b82f6',
    borderRadius: '4px',
    color: 'white',
    padding: '4px 8px',
    fontSize: '0.875rem',
  },
});

function MyCalendar() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectEvent, setSelectEvent] = useState<eType>({
    start : new Date(),
    end : new Date(),
    title: "",
    color : "",

  });
  return (
    <>
      <div className="p-4 bg-background rounded-lg shadow [&_.rbc-event]:text-sm">
        <Calendar
          localizer={localizer}
          events={parsingDate}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 700 }}
          eventPropGetter={eventStyleGetter}
          selectable
          onSelectSlot = {(slotInfo)=>{alert(JSON.stringify(slotInfo))}}
          onSelectEvent = {(event)=>{
            setSelectEvent(event);
            setDialogOpen(true);
          }}
        />
      </div>
      <EventDialog 
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        title='일정확인'
        description='일정확인용 다이얼로그'>
        <div>
          <p>{`일정 이름 : ${selectEvent.title}`}</p>
          <p>{`일정 시작일 : ${formatDateToString(selectEvent.start)}`}</p>
          <p>{`일정 종료일 : ${formatDateToString(selectEvent.end)}`}</p>
        </div>
      </EventDialog>
    </>
  );
}

export default MyCalendar;