import { ButtonCommon, LogoCommon } from '../common'
import { Link, NavLink, useLocation, useNavigate, useNavigation, useRoutes } from 'react-router-dom'
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
            <Link to={'auth/sign-in'}>
                <ButtonCommon label='sign in' className=' text-popover bg-primary' clickHandler={() => {}}/>
            </Link>
            <Link to={'auth/sign-up'}>
                <ButtonCommon label='sign up' className=' text-popover border border-primary' clickHandler={() => {}} />
            </Link>
            {/* <Button className='p-3 rounded-sm bg-popover text-primary hover:bg-primary hover:text-popover'>
                <FaUser className='text-3xl' />
            </Button> */}
        </div>
    </nav>
  )
}

export default Navbar