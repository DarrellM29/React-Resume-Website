import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  return (
    <>
        <nav className='navbar'>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                DM <i className="fas fa-dice-d6"></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fa fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/skills' className='nav-links' onClick={closeMobileMenu}>
                            Skills
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Jobs
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                            Projects
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar