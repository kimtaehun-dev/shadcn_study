import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import { ToolbarProps } from 'react-big-calendar';
import { CalendarEventType } from '../types/calendarType';

dayjs.locale('ko');
export default function CustomToolbar({
  date,
  onNavigate,
}: ToolbarProps<CalendarEventType>) {
  const formatted = dayjs(date).format('YYYY년 M월');
  return (
    <div className="rbc-toolbar flex justify-between items-center p-2">
      <span className="text-lg font-bold">{formatted}</span>
      <div className="flex gap-2">
        <button onClick={() => onNavigate('PREV')}>이전</button>
        <button onClick={() => onNavigate('NEXT')}>다음</button>
      </div>
    </div>
  );
}
