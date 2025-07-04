
type CheckDialogType = {
  startDate : string;
  endDate : string;
  title : string;
}
export default function CheckDialog({startDate,endDate,title}:CheckDialogType){
  return (
    <div>
      <p>{`일정 이름 : ${title}`}</p>
      <p>{`일정 시작일 : ${startDate}`}</p>
      <p>{`일정 종료일 : ${endDate}`}</p>
    </div>
  )
}