import React from "react"


type Props = {
  children: React.ReactNode
}

export const AuthLayout = ({children}: Props) => {
  return(
    <div className=" h-screen flex items-center justify-center">
      {children}
    </div>
  )
}

