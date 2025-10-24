import { cn } from "@workspace/ui/lib/utils"
import React from "react"



interface Props{
  children: React.ReactNode,
  className?: string 
}

export const WidgetHeader = ({
  children,
  className,
}: Props) => {

  return(
    <header className={cn( 
      "p-4 text-white  bg-gray-900",
      className
    )}>
      {children}
    </header>
  )

}