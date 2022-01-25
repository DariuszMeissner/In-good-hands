import React from 'react'
import { ContactForm, ContactHeading } from '.'
import { ClientSize } from '../UI/clientSize'
import './Contact.scss'


export const Contact = () => {
    const { isML, isXL } = ClientSize()

    return (
        <section id='contact' className='contact row flex flex-justify-end'>
            <div className={'flex flex-column flex-align-center flex-justify-center ' + (isML || isXL ? 'c-s-6' : 'c-s-12')}>
                <ContactHeading />
                <ContactForm />
            </div>
        </section>
    )
}
