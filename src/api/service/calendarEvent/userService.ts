import { getUserEvents, getUserSetting } from "@/api/fragments/calendarEvent/userFragments";
import { convertStringToDate } from "@/features/calrendar/util/dateConverter";


export const userService = {
  events : async ()=> {
    const {result, isMondayStart} = await getUserEvents().then(res => res.json());
    const events = convertStringToDate(result);
    return {events, isMondayStart}
  },
  setting : async ()=>(await getUserSetting()).json(),
}