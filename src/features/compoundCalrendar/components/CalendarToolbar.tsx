import dayjs from 'dayjs';
import 'dayjs/locale/en';

import { CalendarEventType } from "@/features/calrendar/types/calendarType";
import { ToolbarProps } from "react-big-calendar";
import { Calendar, Settings } from 'lucide-react';


export default function CalendarToolbar({
  date,
  onNavigate,
}: ToolbarProps<CalendarEventType>) {
  const formatted = dayjs(date).format('MMMM');
  return (
    <div className="w-full flex justify-between">
      <span className="text-[30px] font-bold">{formatted}</span>
      <div className="flex flex-row items-center gap-[14px]">
        <Calendar size={24} />
        <Settings size={24}/>
      </div>
    </div>
  );
}