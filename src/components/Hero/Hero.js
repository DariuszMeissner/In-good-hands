import React from 'react'
import { Button } from '../Button'

const Hero = () => {
    return (
        <>
            <h1>Start helping! Put your unwanted items in trusted hands</h1>
            <i></i>
            <div>
                <Button
                    to='/sign-in'
                    name='hand over the things'></Button>
                <Button
                    to='/sign-in'
                    name='organize a fundraiser'></Button>
            </div>
        </>
    )
}

export default Hero