import { getUserEvents, getUserSetting } from "@/api/fragments/calendarEvent/userFragments";


export const userService = {
  events : async ()=> (await getUserEvents()).json(),
  setting : async ()=>(await getUserSetting()).json(),
}