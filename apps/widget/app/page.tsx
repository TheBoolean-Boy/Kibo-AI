'use client'


import { useQuery } from "convex/react"
import { api } from "@workspace/backend/_generated/api";

export default function Page() {

  const user = useQuery(api.users.getMany);
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <p className=" text-4xl text-muted-foreground">App/widget </p>
      <div className=" max-w-sm w-full mx-auto">
        {JSON.stringify(user, null, 2)}
      </div>
      
    </div>
  )
}
