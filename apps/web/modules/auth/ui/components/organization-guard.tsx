'use client'

import { useOrganization } from "@clerk/nextjs"
import { AuthLayout } from "../layouts/auth-layout"
import { OrgSelectView } from "../views/org-select-view"

type Props = {
  children: React.ReactNode
}

export const OrganizationGuard = ({ children }: Props) => {
  const { organization } = useOrganization()

  if (!organization) {
    return (
      <AuthLayout>
        <OrgSelectView />
      </AuthLayout>
    )
  }
  return (
    <>
      {children}
    </>
  )
}