import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import uniqid from 'uniqid'
import { contactFormActions } from '../../store/reducers/contactForm-slice'
import './ContactForm.scss'

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
        <form className='form flex flex-column'
            onSubmit={handleSubmit}>
            <label>
                {console.log(notification)}
                <div>Insert your name</div>
                <input
                    id='name'
                    name='name'
                    type="text"
                    value={form.name}
                    onChange={handleChange} />
            </label>
            <label>
                <div>Insert your email</div>
                <input
                    id='email'
                    name="email"
                    type="text"
                    value={form.email}
                    onChange={handleChange} />
            </label>
            <label>
                <div>Your message</div>
                <textarea
                    id='message'
                    name='message'
                    value={form.message}
                    onChange={handleChange} />
            </label>
            <input
                type="submit"
                value="Send" />
        </form>
    )
}
