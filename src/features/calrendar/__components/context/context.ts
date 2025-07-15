import { createContext, useContext } from "react";
import { CalendarEventType } from "../../types/calendarType";

type CalendarContextType = {
  events : CalendarEventType[];
  isMondayStart : boolean;
  currentDate : Date;
  setDate : (date:Date)=>void;
}

export const CalendarContext = createContext<CalendarContextType|null>(null);

export function useCalendarContext(){
  const calendatctx = useContext(CalendarContext);
  if(!calendatctx) throw new Error('useCalendarContext must be inside <UserCalendar>')
  return calendatctx;
}