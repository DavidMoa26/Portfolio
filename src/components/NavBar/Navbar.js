import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>About Me</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#projects' onClick={closeMenu}>Projects</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#experience' onClick={closeMenu}>Experience</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#education' onClick={closeMenu}>Education</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
