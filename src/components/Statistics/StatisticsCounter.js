import React from 'react'
import './StatisticsCounter.scss'

export const StatisticsCounter = ({ counter }) => {
    return (
        <>
            <span className='fs-15-s fs-20-ml m-b-12'>{counter}</span>
        </>
    )
}
