import React from 'react'
import { HelpHeading, HelpWrapperCategory } from '.'
import './Help.scss'

export const Help = () => {
    return (
        <section className='whoWeHelp flex flex-column flex-align-center container m-t-8 m-b-8' id='whoWeHelp'>
            <HelpHeading />
            <HelpWrapperCategory />
        </section>
    )
}
