import { userApi } from "@/api/instances/ky/ky";
import { GetEventsType } from "@/features/calrendar/types/calendarType";

export async function getUserEvents(){
  return await userApi<GetEventsType>('getCalendarEvents',{
    method : 'get',
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

export async function getUserSetting(){
  return await userApi('getUserSettings',{
    method : 'get',
    headers:{
      'Content-Type': 'application/json',
    }
  })
}