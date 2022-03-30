import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { FaTimes } from 'react-icons/fa'
import { HiMenuAlt3 } from 'react-icons/hi'
import './Navbar.css'
import Logo from '../../../components/Logo'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const CloseMobileMenu = () => setClick(false)

    const history = useHistory()

    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <Logo to="/" onClick={() => CloseMobileMenu()} />

                    <div className="menu-icon" onClick={() => setClick(!click)}>
                        {click == false ? <HiMenuAlt3 /> : <FaTimes />}
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                        <li className='nav-btn ' onClick={() => history.push('./signin')}>
                            <button className="btn">Giriş Yap</button>
                        </li>
                        <li className='nav-btn' onClick={() => window.innerWidth <= 960 ? CloseMobileMenu() : null}>
                            <button className="btn-border">Kayıt Ol</button>
                        </li>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default Navbar
