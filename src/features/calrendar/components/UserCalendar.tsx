'use client'

import { useEffect, useState } from 'react';
//기능 내부 임포트
import { getUserEvents } from '../services/getUserEvents';
import { convertStringToDate } from '../util/dateConverter';
import { CalendarEventType } from '../types/calendarType';
// View
import UserCalendarView from './UserCalendarView';

export default function UserCalendar(){
  const [userEvent, setUserEvent] = useState<CalendarEventType[]>([]);
  
  useEffect(()=>{
    async function fetchEvent(){
      const res = await getUserEvents();
      const newEvents = convertStringToDate(res);
      console.log(newEvents);
      setUserEvent(newEvents);
      }
      fetchEvent();
  },[])
  return(
    <>
    {userEvent.length>0
    ?(<UserCalendarView userEvent={userEvent}/>)
    :( <p>이벤트를 불러오는 중입니다...</p>) } 
    </>
  )
}