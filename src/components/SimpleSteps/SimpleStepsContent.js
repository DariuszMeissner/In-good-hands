import React from 'react'
import './SimpleStepsContent.scss'
import { SimpleStepsStep } from './SimpleStepsStep'


export const SimpleStepsContent = () => {
    

    return (
        <div className='container bg-col-3 m-t-8 m-b-8'>
            <div className='row'>
                <SimpleStepsStep iconClass="icon-step1 is-25" title="Choose things" desc="cloths, toys, eauipment and others" />
                <SimpleStepsStep iconClass="icon-step2 is-25" title="Pack them" desc="use garbage bags" />
                <SimpleStepsStep iconClass="icon-step3 is-25" title="Decide who you want to help" desc="choose a trusted place" />
                <SimpleStepsStep iconClass="icon-step4 is-25" title="Order a courier" desc="the courier will arrive at a convenient time" />
            </div>
        </div>
    )
}
