'use client'

import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { AuthLayout } from "../layouts/auth-layout";
import { SingInView } from "../views/sign-in-view";

type Props = {
  children: React.ReactNode
}


export const AuthGuard = ({ children }: Props) => {
  return (
    <>
      <AuthLoading >
        <AuthLayout>
          <p className=" text-6xl text-muted">Loading....</p>
        </AuthLayout>
      </AuthLoading>
      <Authenticated>
        {children}
      </Authenticated>
      <Unauthenticated>
        <AuthLayout>
          <SingInView />
        </AuthLayout>
      </Unauthenticated>

    </>
  )
}