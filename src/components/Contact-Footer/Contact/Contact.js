import React from 'react'
import { ContactForm, ContactHeading } from '..'
import { Footer } from '../Footer/Footer'
import { ClientSize } from '../../UI/clientSize'
import './Contact.scss'


export const Contact = () => {
    const { isML, isXL } = ClientSize()

    return (
        <>
            <section id='contact' className='contact row flex flex-justify-end'>
                <div className={'flex flex-column flex-align-center flex-justify-center ' + (isML || isXL ? 'c-s-6' : 'c-s-12')}>
                    <div className='m-b-6'>
                        <ContactHeading />
                    </div>
                    <ContactForm />
                </div>
            </section>
            <div className='row flex flex-justify-center p-b-3'>
                <Footer />
            </div>
        </>
    )
}
