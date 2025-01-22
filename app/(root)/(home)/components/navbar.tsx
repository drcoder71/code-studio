'use client'
import { Button } from '@/components/ui/button'
import { Loader } from '@/components/ui/laoder'
import { SignInButton, SignOutButton, useAuth } from '@clerk/nextjs'
import { useConvexAuth } from 'convex/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const router = useRouter()
    const { isLoading, isAuthenticated } = useConvexAuth()

    const toHome = () => {
        router.push('/')
    }

    return (
        <div className='w-full max-w-[1440px] mx-auto'>
            <div className='w-[95%] mx-auto'>
                <nav className='flex items-center justify-between py-2'>
                    <div className=''>
                        <div role='button' className='text-2xl' onClick={toHome}>Code Studio</div>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        {isLoading && <Loader size={'lg'} />}
                        {
                            isAuthenticated && !isLoading && (
                                <SignOutButton>
                                    <Button variant='default' className='w-16'>
                                        log out
                                    </Button>
                                </SignOutButton>
                            )
                        }
                        {

                            !isAuthenticated && !isLoading && (
                                <SignInButton mode='redirect'>
                                    <Button variant='default' className='w-16'>
                                        sign in
                                    </Button>
                                </SignInButton>
                            )
                        }
                    </div>
                </nav>
            </div >
        </div >
    )
}

export default Navbar