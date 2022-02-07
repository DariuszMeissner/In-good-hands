import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './ContactForm.scss'
import uniqid from 'uniqid'
import { Notification, ErrorMessage } from '..'
import { contactFormActions } from '../../../store/reducers/contactForm-slice'

export const ContactForm = () => {
    const dispatch = useDispatch()
    const notification = useSelector(state => state.ui.notification)
    const [isShow, setIsShow] = useState(false)
    const [form, setForm] = useState({
        id: '', name: '', email: '', message: ''
    })
    const [valNameLength, setValNameLength] = useState(false)
    const [valNameWord, setValNameWord] = useState(false)
    const [valEmail, setValEmail] = useState(false)
    const [valMessage, setValMessage] = useState(false)

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

    const handleName = () => {
        (form.name.length < 3) ? setValNameLength(true) : setValNameLength(false)
        form.name.includes(' ') ? setValNameWord(true) : setValNameWord(false)
    }

    const handleMessage = () => {
        form.message.length < 60 ? setValMessage(true) : setValMessage(false);
    }

    const handleEmail = () => {
        (form.email.match(/\S+@\S+\.\S+/) || form.email.length === 0) ? setValEmail(false) : setValEmail(true)
    }

    const validation = () => {
        return (valMessage || valNameLength || valNameWord || valEmail)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (validation()) {
            return
        } else {
            dispatch(contactFormActions.addFormMessage(form))
            setIsShow(true)
            setTimeout(() => {
                setIsShow(false)
            }, 4000)
            setForm({
                id: '',
                name: '',
                email: '',
                message: ''
            })
            return
        }
    }

    return (
        <>
            {/* notification */}
            {isShow &&
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message} />}
            {/* contact form */}
            <form
                className='form flex flex-column'
                onSubmit={handleSubmit}
                noValidate>
                {/* name and email */}
                <div className='flex m-b-8'>
                    <label className='m-r-2'>
                        <div>Insert your name</div>
                        <input
                            id='name'
                            name='name'
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            onBlur={handleName} />
                        {/* validation error name */}
                        {(valNameLength || valNameWord) && <ErrorMessage />}
                    </label>
                    <label className='m-l-2'>
                        <div>Insert your email</div>
                        <input
                            id='email'
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            onBlur={handleEmail} />
                        {/* validation error email */}
                        {valEmail && <ErrorMessage />}
                    </label>
                </div>
                {/* text area message */}
                <label>
                    <div>Your message(min. 60 mark)</div>
                    <textarea
                        rows="6"
                        id='message'
                        name='message'
                        className='c-s-12'
                        value={form.message}
                        onChange={handleChange}
                        onBlur={handleMessage} />
                    {/* validation error message */}
                    {valMessage && <ErrorMessage />}
                    {/* realtime number of marks */}
                    <span className='fs-3'>Number of marks: {form.message.length}</span>
                </label>
                {/* submit button */}
                <div className='flex flex-justify-end flex-justify-center-s'>
                    <button className='b-1 bg-col-8 b-col-1 p-3 p-l-8 p-r-8'
                        type="submit">Send</button>
                </div>
            </form>
        </>
    )
}
