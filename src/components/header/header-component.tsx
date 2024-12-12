import React from 'react'
import { FaCode } from 'react-icons/fa'

const HeaderComponent = () => {
  return (
    <div className='flex flex-col items-center justify-center p-20 gap-6'>
        <div className='py-2 px-4 inline-flex items-center gap-2 rounded-sm bg-[#aaaaaa1c] text-sm text-gray-400'>
            <FaCode/>
            <p >Learning with Coding</p>
        </div>
        <div className='text-center'>
            <h1 className='text-5xl'>Code Studio Platform.</h1>
            <p className='text-gray-500 text-lg md:text-xl lg:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolor quia ipsa repudiandae, sit porro.</p>
        </div>
    </div>
  )
}

export default HeaderComponent