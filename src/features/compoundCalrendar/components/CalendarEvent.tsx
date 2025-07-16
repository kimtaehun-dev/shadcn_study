import Image from "next/image";

import { CalendarEventType } from "@/features/calrendar/types/calendarType";
import selectStageBadge from "@/features/calrendar/util/selectStageBadge";

export default function CalendarEvent
({start,end,title,color,stage, allDay}:CalendarEventType){
  const imagePath = selectStageBadge(stage);
  return (
    <div className="flex flex-row rounded text-xs" style={{ backgroundColor: color }}>
      <Image
        src={imagePath}
        alt ={'badge'}
        width="10"
        height="10"
        className="object-contain"
      />
      <div>{title}</div>
    </div>
  )
}