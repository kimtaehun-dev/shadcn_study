'use client'
import LoginTitle from "@/components/customui/LoginTitle";
import { Button } from "@/components/ui/button";
import { 
  FormControl, 
  FormDescription,
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage, 
  Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

export default function LoginForm(){
  const form = useForm({defaultValues:{id:"",password:""}});

  const onSubmit = (values:{id:string; password:string})=>{
    const id = values.id;
    const pw = values.password;
    alert(`id = ${id} password = ${pw}`);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-2">
        <FormField 
          name="id" 
          control={form.control} 
          render={({field})=>(
            <FormItem>
              <FormLabel>아이디</FormLabel>
              <FormControl>
                <Input placeholder="아이디를 입력하세요" {...field}/>
              </FormControl>
              {/* <FormDescription>아이디 입력칸 인풋입니다.</FormDescription> */}
              <FormMessage />
            </FormItem>
        )}/>

        <FormField 
            name="password" 
            control={form.control} 
            render={({field})=>(
              <FormItem>
                <FormLabel>비밀번호</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="비밀번호를 입력하세요" {...field}/>
                </FormControl>
                {/* <FormDescription>비밀번호 입력칸 인풋입니다.</FormDescription> */}
                <FormMessage />
              </FormItem>
          )}/>
        <Button type="submit" variant={"brand"} className="w-full">로그인</Button>
      </form>
    </Form>
  )
}