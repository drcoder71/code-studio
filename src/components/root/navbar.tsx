import { ButtonCommon, LogoCommon } from '../common'
import { NavLink } from 'react-router-dom'
import { NavData } from '@/constants'
import { NavDataType } from '@/constants/nav-data'

const Navbar = () => {

  return (
    <nav className='container mx-auto flex items-center justify-between py-4 px-4 border-b border-gray-500/25'>
        <LogoCommon className=''/>
        <ul className='text-popover inline-flex items-center gap-2'>
            {
                NavData.map(({label, link}: NavDataType) => (
                    <li className='' key={label}>
                        <NavLink to={link} className={'inline-block py-1 px-2 rounded-sm hover:bg-popover hover:text-background capitalize'}>{label}</NavLink>
                    </li>
                ))
            }
        </ul>
          <div className='inline-flex items-center gap-2'>
              <ButtonCommon label={'login'} className='text-popover bg-card' isDisabled={true} clickHandler={() => { }} />
              <ButtonCommon label={'start now'} className='text-popover bg-card' isDisabled={true} clickHandler={() => { }} />
              {/* <SignInButton>
              </SignInButton> */}
        </div>
    </nav>
  )
}

export default Navbar