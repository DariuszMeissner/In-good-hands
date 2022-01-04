import React from 'react'
import './AboutUs.scss'
import { AboutUsContent } from './AboutUsContent'
import { AboutUsImage } from './AboutUsImage'

export const AboutUs = () => {
    return (
        <section className='aboutUs row' id='aboutUs'>
            <AboutUsContent />
            <AboutUsImage />
        </section>
    )
}
