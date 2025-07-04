'use client'
import React, { useState, useEffect } from 'react';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import {reducingDate,formatDateToString, ReducingDateType, ConvertedDateType } from '@/lib/fixdate';
import moment from 'moment';

import { getEventsData } from '@/features/getEventsData/getEventsData';
import EventDialog from './Dialog';
import CheckDialog from './CheckDialog';

import 'react-big-calendar/lib/css/react-big-calendar.css'; 
moment.locale('ko');
const localizer = momentLocalizer(moment); // 또는 dateFnsLocalizer 사용
type eType = {
  start: Date;
  end: Date;
  title: string;
  color: string;
}

const eventStyleGetter = (event: ConvertedDateType) => ({
  style: {
    backgroundColor: event.color?.trim() || '#6366f1',
    color: '#fff',
    borderRadius: '4px',
    padding: '4px 8px',
    fontSize: '0.875rem',
  },
});


function MyCalendar() {
  const [apiUserEvent, setApiUserEvent] = useState<ConvertedDateType[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectEvent, setSelectEvent] = useState<eType>({
    start : new Date(),
    end : new Date(),
    title: "",
    color : "",
  });

  useEffect(()=>{
    async function fetchDtat(){
    const res = await getEventsData();
    if (res?.result) {
      const newEvents = reducingDate(res.result);
      setApiUserEvent(newEvents);
      }
    }
    fetchDtat();
  },[]);
  return (
    <>
      <div className="p-4 bg-background rounded-lg shadow [&_.rbc-event]:text-sm">
        <Calendar
        className="
        [&_.rbc-day-bg:nth-child(1)]:bg-red-50 
        [&_.rbc-day-bg:nth-child(7)]:bg-blue-50
          "
          localizer={localizer}
          events={apiUserEvent}
          startAccessor="start"
          endAccessor="end"
          eventPropGetter={eventStyleGetter}
          onSelectEvent={(event) => {
            setSelectEvent(event);
            setDialogOpen(true);
          }}
          selectable
          onSelectSlot = {(slotInfo)=>{alert(JSON.stringify(slotInfo))}}
          style={{ height: 700 }}
        />
      </div>
      <EventDialog 
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        >
          <CheckDialog 
          startDate={formatDateToString(selectEvent.start)} 
          endDate={formatDateToString(selectEvent.end)} 
          title={selectEvent.title}/>
      </EventDialog>
    </>
  );
}

export default MyCalendar;