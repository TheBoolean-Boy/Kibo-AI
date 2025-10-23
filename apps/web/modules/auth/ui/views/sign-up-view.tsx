import { SignUp } from "@clerk/nextjs"




export const SignUpView = () => {
  return (
    <div>
      <SignUp routing="hash" />
    </div>
  )
}

