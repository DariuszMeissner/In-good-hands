import React from 'react'
import './SimpleSteps.scss'
import { SimpleStepsHeading } from './SimpleStepsHeading'
import { SimpleStepsContent } from './Content/SimpleStepsContent'
import { SimpleStepsCta } from './SimpleStepsCta'
import { ClientSize } from '../UI/clientSize'

export const SimpleSteps = () => {
    const { isML, isXL } = ClientSize();

    const cssClasses = [
        'simpleSteps container m-t-16 m-b-10 flex flex-column flex-align-center',
        isML || isXL
            ? 'no-max-width'
            : null
    ]

    return (
        <section className={cssClasses.join(' ')} id='whatGoingOn'>
            <SimpleStepsHeading />
            <SimpleStepsContent />
            <SimpleStepsCta />
        </section>
    )
}
