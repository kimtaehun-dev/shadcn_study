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
  const [mondayStart, setMondayStart] = useState<boolean>(true);
  
  useEffect(()=>{
    async function fetchEvent(){
      const {result,isMondayStart} = await getUserEvents();
      const newEvents = convertStringToDate(result);
      setUserEvent(newEvents);
      setMondayStart(isMondayStart)
    }
    fetchEvent();
  },[])
  return(
    <>
    {userEvent.length>0?(
    <UserCalendarView 
      userEvent={userEvent} 
      isMondayStart={mondayStart}
      />):( 
      <p>이벤트를 불러오는 중입니다...</p>
      )} 
    </>
  )
}