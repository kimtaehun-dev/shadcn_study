type ResultType = {
  start : string;
  end: string;
  title : string;
  color : string;
  stage : number;
}
type apiResType = {
  result : ResultType[];
  status :number
}
export async function getEventsData(){
  const URL = "/api/getCalendarEvents";
  try{
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  }
  catch(error){
    console.log(error);
  }
}