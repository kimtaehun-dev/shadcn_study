import LoginTitle from "@/components/customui/LoginTitle";
import SocialLoginBtn from "@/components/customui/SocialLoginBtn";
import LoginForm from "@/features/login/LoginForm";
import { GithubIcon, BookUser } from "lucide-react";

export default function LoginPage(){
  return (
    <div className="w-[70%] h-screen flex items-center justify-center flex-col gap-2">
      <LoginTitle/>
      <LoginForm />
      <div className="w-full flex flex-row-reverse">
        <SocialLoginBtn onClickUrl={"Github URL"}>
          <GithubIcon/>
        </SocialLoginBtn>
        <SocialLoginBtn onClickUrl={"Google URL"}>
          <BookUser />
        </SocialLoginBtn>
      </div>
    </div>
  )
}