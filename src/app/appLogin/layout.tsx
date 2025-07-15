type LoginLayoutType = {
  children : React.ReactNode;
}
export default function LoginLayout({children}:LoginLayoutType){
  <div className="MobileLayout w-[363px]">
    {children}
  </div>
}