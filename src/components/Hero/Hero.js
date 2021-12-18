import React from 'react'
import { Button } from '../Button'
import { ReactComponent as DecorationSvg } from '../../assets/images/Decoration.svg'
import HeroImage from '../../assets/images/Home-Hero-Image.jpg'
import './Hero.scss'

const Hero = () => {
    return (
        <>
            <div className="row hero">
                <div className="c-s-6">
                    <img className="hero__image" src={HeroImage} alt="hero" />
                </div>
                <div className="c-s-6 hero__cta">
                    <div className="hero__box">
                        <h1>Start helping! Put your unwanted items in trusted hands</h1>
                        <DecorationSvg />
                        <div>
                            <Button
                                to='/sign-in'
                                name='hand over the things'></Button>
                            <Button
                                to='/sign-in'
                                name='organize a fundraiser'></Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero