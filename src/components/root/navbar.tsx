import React from 'react'
import { LogoCommon } from '../common'
import { NavLink } from 'react-router-dom'
import { Avatar } from '../ui/avatar'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-4 px-4'>
        <LogoCommon className=''/>
        <ul className='text-popover'>
            <li>
                <NavLink to={'/'}>Home</NavLink>
            </li>
        </ul>
        <div>
            
        </div>
    </nav>
  )
}

export default Navbar