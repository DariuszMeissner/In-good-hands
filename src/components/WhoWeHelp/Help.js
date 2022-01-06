import React from 'react'
import { HelpHeading, HelpWrapperCategory } from '.'
import './Help.scss'

export const Help = () => {
    return (
        <section className='whoWeHelp flex flex-column flex-align-center' id='whoWeHelp'>
            <HelpHeading />
            <HelpWrapperCategory />
        </section>
    )
}
