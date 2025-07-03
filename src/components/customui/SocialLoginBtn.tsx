'use client'
import { Button } from "../ui/button";

type SocialLoginBtnType = {
  children : React.ReactNode
  onClickUrl : string
}
export default function SocialLoginBtn({children,onClickUrl}:SocialLoginBtnType){
  const handleOnClick = ()=>{
    alert(`Page Move = ${onClickUrl}`);
  };
  return(
    <Button
      variant={"outline"}
      onClick={handleOnClick}
    >
      {children}
    </Button>
  )
}