import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './ContactForm.scss'
import uniqid from 'uniqid'
import { Notification } from '..'
import { contactFormActions } from '../../../store/reducers/contactForm-slice'

export const ContactForm = () => {
    const dispatch = useDispatch()
    const notification = useSelector(state => state.ui.notification)

    const [form, setForm] = useState({
        id: '',
        name: '',
        email: '',
        message: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prev => {
            return {
                ...prev,
                id: uniqid(),
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(contactFormActions.addFormMessage(form))
        setForm({
            id: '',
            name: '',
            email: '',
            message: ''
        })
    }

    return (
        <>
            {/* contact form */}
            <form className='form flex flex-column'
                onSubmit={handleSubmit}>

                {/* name and email */}
                <div className='flex m-b-8'>
                    <label className='m-r-2'>
                        <div>Insert your name</div>
                        <input
                            id='name'
                            name='name'
                            type="text"
                            value={form.name}
                            onChange={handleChange} />
                    </label>
                    <label className='m-l-2'>
                        <div>Insert your email</div>
                        <input
                            id='email'
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange} />
                    </label>
                </div>
                <label>
                    <div>Your message(max. 200 mark)</div>
                    <textarea
                        maxlength="250"
                        rows="6"
                        id='message'
                        name='message'
                        className='c-s-12'
                        value={form.message}
                        onChange={handleChange} />
                </label>
                <div className='flex flex-justify-end flex-justify-center-s'>
                    <button className='b-1 bg-col-8 b-col-1 p-3 p-l-8 p-r-8'
                        type="submit">Send</button>
                </div>
            </form>
            {/* notification */}
            {notification &&
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message} />}
        </>
    )
}
