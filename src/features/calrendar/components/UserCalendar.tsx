'use client'

// View
import UserCalendarView from './UserCalendarView';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@/api/factory/keyFactory';
import { userService } from '@/api/service/calendarEvent/userService';

export default function UserCalendar(){
  // TanstackQuery와 ky로 컨버팅
  const {data,status} = useQuery({
    queryKey : queryKeys.user.events().queryKey,
    queryFn : userService.events 
  })

  if(status==='pending') return <p>이벤트를 불러오는 중입니다...</p>;
  if(status==='success'){
    return(
    <UserCalendarView 
      userEvent={data.events} 
      isMondayStart={data.isMondayStart}
      />
    )
  }
}