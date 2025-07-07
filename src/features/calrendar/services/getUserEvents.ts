export async function getUserEvents(){
  const URL = "/api/getCalendarEvents";
  try{
    const response = await fetch(URL);
    const status = response.status;
    if(status!==200) throw new Error;

    const { result } = await response.json();
    return result;
  }
  catch(error){
    console.log(error);
  }
}