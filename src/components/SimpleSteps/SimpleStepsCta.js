import React from 'react'
import { Button } from '../Button/Button'
import './SimpleStepsCta.scss'

export const SimpleStepsCta = () => {
    return (
        <Button
            to='/sign-in'
            name={
                <>
                    <span className='block'>hand over</span>
                    <span className='block'>the things</span>
                </>}
            classRegular="block-s inline-m p-4 fs-4-5 fs-5-l bg-col-8 b-1 m-b-8-s m-b-8-m center uppercase"></Button>
    )
}
