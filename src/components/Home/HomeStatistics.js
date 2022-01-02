import React from 'react'
import { StatisticsColumn } from '../Statistics'

export const HomeStatistics = () => {
    return (
        <section className='statistic row'>
            <StatisticsColumn counter={10} title="a" description="a" />
            <StatisticsColumn counter={10} title="a" description="a" />
            <StatisticsColumn counter={10} title="a" description="a" />
        </section>
    )
}
