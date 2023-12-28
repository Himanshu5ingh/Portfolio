import React from 'react'
import './NavBar.css'
import logo from '../Assets/logo.png'
import { Link } from 'react-scroll'
import contactus from '../Assets/contactus.png'
// import MobileMenu from '../Assets/menu.png'

const NavBar = () => {
    //     const [showMenu, setShowMenu] = useState(false)


    return (
        <nav className='navbar'>
            <button id='Homebtn' onClick={() => {
                document.getElementById('intro').scrollIntoView({ behavior: 'smooth' })
            }}>
                <img src={logo} alt='logo' className='logo' />
            </button>

            <div className='desktopMenu'>
                <Link activeClass='active' to='intro' spy={true} offset={-75} duration={500} className='destopMenuListItem'>Home</Link>
                <Link activeClass='active' to='skills' spy={true} offset={-50} duration={500} className='destopMenuListItem'>About</Link>
                <Link activeClass='active' to='works' spy={true} offset={-50} duration={500} className='destopMenuListItem'>Projects</Link>

            </div>
            <button className='desktopMenuBtn' onClick={() => {
                document.getElementById("contact").scrollIntoView({ behavior: 'smooth' })
            }}>
                <img src={contactus} alt='contactimage' className='desktopMenuBtnImg' />
                Contact Me
            </button>

            {/* <img src={MobileMenu} alt='Menu' className='mobileMenu' />
            <div className='MobileMenu'>
                <Link activeClass='active' to='intro' spy={true} offset={-75} duration={500} className='mobileMenuListItem'>Home</Link>
                <Link activeClass='active' to='skills' spy={true} offset={-50} duration={500} className='mobileMenuListItem'>About</Link>
                <Link activeClass='active' to='works' spy={true} offset={-50} duration={500} className='mobileMenuListItem'>Projects</Link>
                <Link activeClass='active' to='Contact' spy={true} offset={-50} duration={500} className='mobileMenuListItem'>Contact</Link>

            </div> */}
        </nav >
    )
}

export default NavBar