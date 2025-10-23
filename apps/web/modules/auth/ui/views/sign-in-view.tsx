import { SignIn } from "@clerk/nextjs"




export const SingInView = () => {
  return (
    <div>
      <SignIn routing="hash"/>
    </div>
  )
}

 