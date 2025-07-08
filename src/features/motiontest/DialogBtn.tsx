'use client'
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function DialogBtn(){
  const MotionButton = motion(Button);
  const MotionCard = motion(Card);
  return(
    <div className="w-100 flex flex-col gap-10 justify-center items-center">
      <MotionCard className="w-full max-w-sm" animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.4 }}>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
          <p>Card Content</p>
          <p>Card Content</p>
          <p>Card Content</p>
          <p>Card Content</p>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
        
      </MotionCard>
      <MotionButton
        className="w-30"
        whileHover={{scale:1.1}}
        whileTap={{ scale: 0.95, rotate: -2 }}
        onClick={()=>{alert('hi')}}  
      >
        다이얼로그 오픈!
      </MotionButton>
    </div>
  )
}