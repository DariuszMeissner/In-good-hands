import { useState, useEffect } from 'react'

export const ClientSize = () => {

    // Handle width size of screen
    const getWindowDimensions = () => {
        const client = {
            isS: false,
            isM: false,
            isL: false,
            isXL: false,
        }

        let { innerWidth: width } = window;
        width < 576 ? client.isS = true : client.isS = false
        width > 576 && width < 768 ? client.isM = true : client.isM = false
        width > 768 && width < 1140 ? client.isL = true : client.isL = false
        width > 1140 ? client.isXL = true : client.isXL = false
        return client
    }

    // Set screen size afetr loaded app
    const [windowDimension, setWindowDimension] = useState(getWindowDimensions());

    useEffect(() => {
        const handleResize = () => { setWindowDimension(getWindowDimensions()) }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return windowDimension
}
