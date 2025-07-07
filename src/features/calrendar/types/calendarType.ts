export type CalendarEventType = {
  start: Date;
  end: Date;
  title: string;
  color: string;
  stage : number;
  allDay : boolean;
}

export type ApiCalendarEventType = {
  start: string;
  end: string;
  title: string;
  color: string;
  stage : number;
  allDay : boolean;
}

export type ApiResponseType = {
  result : ApiCalendarEventType[],
  status : number;
}