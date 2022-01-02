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
                <div className="heroImage c-ml-6 m-b-0">
                    <img src={ImgHero} alt="hero" />
                </div>
                :
                <div className="image c-s-12 ">
                    <img src={ImgHero} alt="hero" />
                </div>
            }
        </>

    )
}
