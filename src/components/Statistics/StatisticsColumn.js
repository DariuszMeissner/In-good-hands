import React from 'react'
import { StatisticsCounter, StatisticsDescription, StatisticsTitle } from '.'
import './StatisticsColumn.scss'

export const StatisticsColumn = ({ counter, title, description }) => {
    return (
        <div className='c-s-12 c-l-4 flex flex-column flex-align-center'>
            <StatisticsCounter counter={counter} />
            <StatisticsTitle title={title} />
            <StatisticsDescription description={description} />
        </div>
    )
}
