import React from 'react'
import { StatisticsColumn } from '../Statistics'
import './HomeStatistics.scss'
import { ClientSize } from '../UI/clientSize'

export const HomeStatistics = () => {
    const { isML, isXL } = ClientSize();

    const cssClasses = [
        'statistics container',
        isML || isXL
            ? 'no-max-width'
            : null
    ]

    return (
        <section className={cssClasses.join(' ')}>
            <div className='row p-t-8 p-b-8'>
                <StatisticsColumn
                    counter={10}
                    title="Given bags"
                    description="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat." />
                <StatisticsColumn
                    counter={5}
                    title="Supported organizations"
                    description="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat." />
                <StatisticsColumn
                    counter={7}
                    title="Organized harvest"
                    description="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat." />
            </div>
        </section>
    )
}
