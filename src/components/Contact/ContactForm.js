import React, { useState, useSelector } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'
import { contactFormActions } from '../../store/reducers/contactForm-slice'
import './ContactForm.scss'

export const ContactForm = () => {
    const dispatch = useDispatch()

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
        <div>
            <form onSubmit={handleSubmit}>
                <label>Insert your name
                    <input
                        id='name'
                        name='name'
                        type="text"
                        value={form.name}
                        onChange={handleChange} />
                </label>
                <label>Insert your email
                    <input
                        id='email'
                        name="email"
                        type="text"
                        value={form.email}
                        onChange={handleChange} />
                </label>
                <label>Your message
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
        </div>
    )
}
