import React, { useState, useEffect } from 'react'
import { NavAuth, NavMain, NavMobile } from '.'
import './Nav.scss'

export const Nav = () => {

    // Handle width size of screen
    const getWindowDimensions = () => {
        const { innerWidth: width } = window;
        return width
    }

    // Set screen siez afetr loaded app
    const [isMobile, setIsMobile] = useState(getWindowDimensions());

    
    useEffect(() => {
        const handleResize = () => { setIsMobile(getWindowDimensions() < 720 ? true : false) }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav>
            {isMobile ? <NavMobile /> : (
                <>
                    <NavMain />
                    <NavAuth />
                </>
            )}

        </nav>
    )
}
