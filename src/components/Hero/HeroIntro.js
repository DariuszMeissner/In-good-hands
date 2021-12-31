import React from 'react'
import { HeroIntroButtons, HeroIntroHeading } from '.'
import './HeroIntro.scss'

export const HeroIntro = () => {
    return (
        <div className="c-s-12 c-ml-6 flex flex-column flex-align-center flex-justify-center">
                <HeroIntroHeading />
                <HeroIntroButtons />
        </div>
    )
}
