'use client'
import { useEffect, useState } from 'react';
//기능 내부 임포트
import { getUserEvents } from '../services/getUserEvents';
import { convertStringToDate } from '../util/dateConverter';
import { CalendarEventType } from '../types/calendarType';
// View
import UserCalendarView from './UserCalendarView';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@/api/factory/keyFactory';
import { userApi } from '@/api/instances/ky/ky';
import { userService } from '@/api/service/calendarEvent/userService';

export default function UserCalendar(){
  const [userEvent, setUserEvent] = useState<CalendarEventType[]>([]);
  const [mondayStart, setMondayStart] = useState<boolean>(true);
  
  // TanstackQuery와 ky로 컨버팅
  const {data,status} = useQuery({
    queryKey : queryKeys.user.events().queryKey,
    queryFn : userService.events 
  })

  // useEffect(()=>{
  //   async function fetchEvent(){
  //     const {result,isMondayStart} = await getUserEvents();
  //     const newEvents = convertStringToDate(result);
  //     setUserEvent(newEvents);
  //     setMondayStart(isMondayStart)
  //   }
  //   fetchEvent();
  // },[])
  if(status==='pending') return <p>이벤트를 불러오는 중입니다...</p>;
  return(
    <>
    {/* {userEvent.length>0?(
    <UserCalendarView 
      userEvent={userEvent} 
      isMondayStart={mondayStart}
      />):( 
      <p>이벤트를 불러오는 중입니다...</p>
      )}  */}
      {data?.result.map((item)=>(
        <UserCalendarView 
          result={item} 
          isMondayStart={mondayStart}
      />
      ))}
    </>
  )
}