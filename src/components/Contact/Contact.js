import React from 'react'
import { ContactForm, ContactHeading } from '.'
import './Contact.scss'


export const Contact = () => {
    return (
        <section id='contact' className='contact'>
            <ContactHeading />
            <ContactForm />
        </section>
    )
}
