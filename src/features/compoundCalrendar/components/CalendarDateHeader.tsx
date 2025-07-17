import { DateHeaderProps } from 'react-big-calendar';
import dayjs from 'dayjs';

import { cn } from "@/lib/utils"
import { cva } from 'class-variance-authority';

const dateHeadVariants = cva(
  ``,{
    variants:{
      variant:{
        custom:`
          flex justify-center items-center
          w-[48px] h -[24px] text-[14px]
        `
      }
    }
  })

export default function CalendarDateHeader(props: DateHeaderProps) {
  const { date, label, isOffRange } = props;

  const day = date.getDay(); // 0 = Sun, 6 = Sat
  const isToday = dayjs(date).isSame(dayjs(), 'day');

  return (
    <div className={cn(dateHeadVariants({variant:'custom'}))}>
      <div className={cn(
          'm-0 p-o w-[20px] h-[20px] flex justify-center items-center',
          day === 0 && 'text-red-500',
          day === 6 && 'text-blue-500',
          isOffRange && 'text-gray-400',
          isToday && 'bg-main rounded-full text-white font-normal'
        )}
      >
        {dayjs(date).format('D')}
      </div>
    </div>
  );
}
