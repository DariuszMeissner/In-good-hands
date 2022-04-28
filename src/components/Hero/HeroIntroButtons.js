import React from 'react'
import { Button } from '../Button'
import './HeroIntroButtons.scss'

export const HeroIntroButtons = () => {
    return (
        <div className='hero-intro-buttons m-t-12 flex flex-column-s flex-row-m'>
            <Button
                to='/sign-in'
                name={
                    <>
                        <span className='block'>hand over the things</span>
                    </>}
                classRegular="block-s inline-m p-4 fs-4-5 fs-5-l bg-col-8 b-1 m-r-6-m m-b-8-s m-b-8-m center uppercase"></Button>
            <Button
                to='/sign-in'
                name={
                    <>
                        <span className='block'>organize a fundraiser</span>
                    </>
                }
                classRegular="block-s inline-m p-4 fs-4-5 fs-5-l bg-col-8 b-1 m-l-6-m m-b-8-s m-b-8-m center uppercase"></Button>
        </div>
    )
}
