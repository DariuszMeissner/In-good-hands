import React from 'react'
import { Link } from 'react-router-dom'
import './NavAuth.scss'
import { ClientSize } from '../UI/clientSize'

export const NavAuth = () => {
    const { isS, isM, isL } = ClientSize()
    return (
        <ul className='nav-auth flex m-b-4 fs-3'>
            {isS || isM || isL
                ?
                <>
                    <Link to="/sign-in"><li className='icon-sign-in is-7'></li></Link>
                    <Link to="/register"><li className='icon-register is-7'></li></Link>
                </>

                :
                <>
                    <li className='b-col-2-l'><Link to="/sign-in" className='p-l-3 p-r-3'>Sign In</Link></li>
                    <li className=''><Link to="/register">Register</Link></li>
                </>
            }
        </ul>
    )
}
