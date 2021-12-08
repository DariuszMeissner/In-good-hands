import React, { useState, useEffect } from 'react'
import { NavAuth, NavMain, NavMobile } from '.'
import './Nav.scss'

export const Nav = () => {

    // Handle width size of screen
    const getWindowDimensions = () => {
        let { innerWidth: width } = window;
        width < 720 ? width = true : width = false
        return width
    }

    // Set screen size afetr loaded app
    const [isMobile, setIsMobile] = useState(getWindowDimensions());


    useEffect(() => {
        const handleResize = () => { setIsMobile(getWindowDimensions()) }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav>
            {isMobile ? <NavMobile /> : (
                <>
                    <NavAuth />
                    <NavMain />
                </>
            )}
        </nav>
    )
}
