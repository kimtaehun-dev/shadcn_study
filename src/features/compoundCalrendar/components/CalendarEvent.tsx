import Image from "next/image";
import { CalendarEventType } from "@/features/calrendar/types/calendarType";
import selectStageBadge from "@/features/calrendar/util/selectStageBadge";

export default function CalendarEvent({
  start,
  end,
  title,
  color,
  stage,
  allDay
}: CalendarEventType) {
  const imagePath = selectStageBadge(stage);
  return (
    <div
      className="flex items-center gap-[2px] px-[2px] h-[20px] rounded-[4px] text-[11px] overflow-hidden"
      style={{ backgroundColor: color }}
    >
      <Image
        src={imagePath}
        alt="badge"
        width={10}
        height={10}
        className="object-contain"
      />
      <div className="truncate">{title}</div>
    </div>
  );
}
