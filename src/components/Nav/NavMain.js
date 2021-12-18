import React from 'react'
import { Link } from 'react-scroll'
import './NavMain.scss'


export const NavMain = () => {
    return (
        <ul className='flex-l'>
            <li><Link to="start" spy={true} smooth={true} dusration={500}>Start</Link></li>
            <li><Link to="whatGoingOn" spy={true} smooth={true} dusration={500}>What's going on?</Link></li>
            <li><Link to="aboutUs" spy={true} smooth={true} dusration={500}>About us?</Link></li>
            <li><Link to="organizations" spy={true} smooth={true} dusration={500}>Foundations and organizations</Link></li>
            <li><Link to="contact" spy={true} smooth={true} dusration={500}>Contact</Link></li>
        </ul>
    )
}
