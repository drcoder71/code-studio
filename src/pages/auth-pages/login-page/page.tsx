import { SignIn } from '@clerk/clerk-react'

const Page = () => {
  return (
    <div className='flex items-center justify-center text-popover'>
      sign in
        <SignIn />
    </div>
  )
}

export default Page