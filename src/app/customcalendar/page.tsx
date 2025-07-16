"use client"
// import UserCalendar from "@/features/calrendar/components/UserCalendar";
import CustomCalendar from "@/features/compoundCalrendar";
import CalendarView from "@/features/compoundCalrendar/components/CalendarView";

export default function CalendarPage(){
  return(
    <div className="h-full">
      <CustomCalendar>
        <CustomCalendar.View/>
      </CustomCalendar>
    </div>
  )
}