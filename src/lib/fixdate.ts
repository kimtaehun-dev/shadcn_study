type ReducingDateType = {
  start: string;
  end: string;
  title: string;
  color: string;
};

type ConvertedDateType = {
  start: Date;
  end: Date;
  title: string;
  color: string;
};

type DateInput = {
  year: number;
  month: number; // 1~12
  day: number;
  hour?: number;
  minute?: number;
};

function fixDate({ year, month, day, hour = 0, minute = 0 }: DateInput): Date {
  return new Date(year, month - 1, day, hour, minute);
}

function parseDateString(str: string): DateInput {
  const [year, month, day, hour, minute] = str.split('-').map(Number);
  return { year, month, day, hour, minute };
}

export function reducingDate(events: ReducingDateType[]): ConvertedDateType[] {
  return events.map((event) => ({
    ...event,
    start: fixDate(parseDateString(event.start)),
    end: fixDate(parseDateString(event.end)),
  }));
}


export function formatDateToString(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth(); // JS는 0부터 시작하므로 +1
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();

  return `${year}-${month}-${day}-${hour}-${minute}`;
}