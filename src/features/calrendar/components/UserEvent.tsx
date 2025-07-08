import Image from "next/image";

import selectStageBadge from "../util/selectStageBadge";
import { CalendarEventType } from "../types/calendarType";

export default function UserEvent
({start,end,title,color,stage, allDay}:CalendarEventType){
  const imagePath = selectStageBadge(stage);
  return (
    <div className="flex flex-row p-1 rounded text-xs" style={{ backgroundColor: color }}>
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