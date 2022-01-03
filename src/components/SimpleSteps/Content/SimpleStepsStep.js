import React from 'react'
import './SimpleStepsStep.scss'
import { SimpleStepsStepIcon } from './SimpleStepsStepIcon'
import { SimpleStepsStepDesc } from './SimpleStepsStepDesc'
import { SimpleStepsStepTitle } from './SimpleStepsStepTitle'
import { SimpleStepsStepLine } from './SimpleStepsStepLine'

export const SimpleStepsStep = ({ iconClass, title, desc }) => {
    return (
        <div className='c-s-12 c-ml-3 p-l-6 p-r-6 flex flex-column flex-align-center'>
            <SimpleStepsStepIcon iconClass={iconClass} />
            <SimpleStepsStepTitle title={title} />
            <SimpleStepsStepLine/>
            <SimpleStepsStepDesc desc={desc} />
        </div>
    )
}
