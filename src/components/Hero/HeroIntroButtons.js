import React from 'react'
import { Button } from '../Button'
import './HeroIntroButtons.scss'

export const HeroIntroButtons = () => {
    return (
        <div className='m-t-12 flex flex-column-s flex-row-m'>
            <Button
                to='/sign-in'
                name={
                    <>
                        <span className='block'>hand over</span>
                        <span className='block'>the things</span>
                    </>}
                classRegular="block-s inline-m p-4 fs-4-5 fs-5-l bg-col-8 b-1 m-r-6-m m-b-8-s m-b-8-m center"></Button>
            <Button
                to='/sign-in'
                name={
                    <>
                        <span className='block'>organize</span>
                        <span className='block'>a fundraiser</span>
                    </>
                }
                classRegular="block-s inline-m p-4 fs-4-5 fs-5-l bg-col-8 b-1 m-l-6-m m-b-8-s m-b-8-m center"></Button>
        </div>
    )
}