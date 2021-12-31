import React from 'react'
import './Hero.scss'
import { HeroIntro, HeroImage } from '.'

export const Hero = () => {
    return (
        <>
            <div className="hero row">
                <HeroImage/>
                <HeroIntro/>
            </div>
        </>
    )
}