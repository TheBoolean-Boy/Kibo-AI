import { SignIn } from "@clerk/nextjs"
import React from "react"


type Props = {
  children: React.ReactNode
}

const Layout = ({children}: Props) => {
  return(
    <div className=" h-screen flex items-center justify-center">
      {children}
    </div>
  )
}


export default Layout;