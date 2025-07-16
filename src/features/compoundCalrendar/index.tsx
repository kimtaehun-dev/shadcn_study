'use client'
import { ReactNode, useState } from "react";
import { CalendarContext } from "./provider/context";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/api/factory/keyFactory";
import { userService } from "@/api/service/calendarEvent/userService";
import CalendarView from "./components/CalendarView";
import CalendarToolbar from "./components/CalendarToolbar";
import CalendarEvent from "./components/CalendarEvent";

type CustomCalendarType = {
  children : ReactNode
}
export default function CustomCalendar({children}:CustomCalendarType){
  const {data,status} = useQuery({
    queryKey : queryKeys.user.events().queryKey,
    queryFn : userService.events 
  })
  const [currentDate, setCurrentDate] = useState(new Date())
  return (
    <CalendarContext.Provider value={{
      events : data?.events || [],
      isMondayStart : data?.isMondayStart||true,
      currentDate:currentDate,
      setDate : setCurrentDate
      }}>
      {children}
    </CalendarContext.Provider>
  )
}

CustomCalendar.View = CalendarView;
CustomCalendar.Toolbar = CalendarToolbar;
CustomCalendar.Event = CalendarEvent;