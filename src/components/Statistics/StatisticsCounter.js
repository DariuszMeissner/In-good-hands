import React from 'react'
import './StatisticsCounter.scss'

export const StatisticsCounter = ({ counter }) => {
    return (
        <>
            <span className='fs-10 m-b-4'>{counter}</span>
        </>
    )
}
