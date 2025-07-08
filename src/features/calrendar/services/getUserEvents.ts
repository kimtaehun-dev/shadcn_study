export async function getUserEvents(){
  const URL = "/api/getCalendarEvents";
  try{
    const response = await fetch(URL);
    const status = response.status;
    if(status!==200) throw new Error;

    const results = await response.json();
    return results;
  }
  catch(error){
    console.log(error);
  }
}