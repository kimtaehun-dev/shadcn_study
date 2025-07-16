'use client'

import moment from 'moment';
import { HeaderProps } from "react-big-calendar";

export default function CalendarMonthHeader(
  {date}
  :HeaderProps){
  const day = moment(date).format('ddd');

  return(
    <div
      className={`text-center font-bold text-[#999999] text-[14px] border-none`}>
      {day}
    </div>
  )
}