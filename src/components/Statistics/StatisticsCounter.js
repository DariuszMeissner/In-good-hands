import React from 'react'
import './StatisticsCounter.scss'

export const StatisticsCounter = ({ counter }) => {
    return (
        <>
            <span className='fs-25 m-b-12'>{counter}</span>
        </>
    )
}
