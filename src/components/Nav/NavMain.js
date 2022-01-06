import React from 'react'
import { Link } from 'react-scroll'
import './NavMain.scss'


export const NavMain = ({ onClick }) => {
    return (
        <ul className='navMain flex-ml'>
            <li className='b-col-1-ml'
                onClick={onClick}>
                <Link to="start" onClick={onClick} spy={true} smooth={true} dusration={500}>
                    Start
                </Link></li>
            <li onClick={onClick}>
                <Link to="whatGoingOn" onClick={onClick} spy={true} smooth={true} dusration={500}>
                    What's going on?
                </Link></li>
            <li onClick={onClick}>
                <Link to="aboutUs" onClick={onClick} spy={true} smooth={true} dusration={500}>
                    About us?
                </Link></li>
            <li onClick={onClick}>
                <Link to="whoWeHelp" onClick={onClick} spy={true} smooth={true} dusration={500}>
                    Foundations and
                    organizations
                </Link></li>
            <li onClick={onClick}>
                <Link to="contact" onClick={onClick} spy={true} smooth={true} dusration={500}>
                    Contact
                </Link></li>
        </ul>
    )
}
