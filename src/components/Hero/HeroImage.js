import React from 'react'
import './HeroImage.scss'
import ImgHero from '../../assets/images/Home-Hero-Image.jpg'
import { ClientSize } from '../UI/clientSize'

export const HeroImage = () => {
    const { isML, isXL } = ClientSize()
    return (
        <>
            {(isML || isXL)
                ?
                <div className="heroImage c-ml-6">
                    <img src={ImgHero} alt="hero" />
                </div>
                : 
                <div className="img c-s-12">
                    <img src={ImgHero} alt="hero" />
                </div>
            }
        </>

    )
}
