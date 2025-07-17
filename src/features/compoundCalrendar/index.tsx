'use client'
import { ReactNode, useState } from "react";
import { CalendarContext } from "./provider/CalendarContext";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/api/factory/keyFactory";
import { userService } from "@/api/service/calendarEvent/userService";
import CalendarView from "./components/CalendarView";

type CustomCalendarType = {
  children : ReactNode
}
function CustomCalendar({children}:CustomCalendarType){
  const {data,status} = useQuery({
    queryKey : queryKeys.user.events().queryKey,
    queryFn : userService.events 
  })

  const [currentDate, setCurrentDate] = useState(new Date());

  if (status === 'pending') return <p>이벤트를 불러오는 중입니다...</p>;
  if (status !== 'success') return null;
  return (
    <CalendarContext.Provider value={{
      events : data?.events || [],
      isMondayStart : data?.isMondayStart||true,
      currentDate:currentDate,
      setCurrentDate : setCurrentDate
      }}>
      {children}
    </CalendarContext.Provider>
  )
}

CustomCalendar.View = CalendarView;

export default CustomCalendar;