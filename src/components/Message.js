import React, { useEffect } from 'react'
import emailjs from 'emailjs-com';
import { useState } from 'react'

const Message = (props) => {

    const [messageIsSent, setMessageIsSent] = useState(false)

    const sendMessage = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_qdtmsjf', 'template_kz0g9zd', e.target, 'user_XD28BXcclgzQH1blQgWsR').then((result) => {
            setSendMessage()
        },
            (error) => {
                alert('An error has ocurred' + error.text)
            })
    }

    const setSendMessage = () => {
        setMessageIsSent(!messageIsSent)
    }

    useEffect(() => {
        if (messageIsSent === true) {
            const timer = setTimeout(() => {
                props.onSelect('profile')
            }, 5000);
            return () => clearTimeout(timer);
        }
    })

    return (
        <div className='message-cont'>
            <form onSubmit={(e) => sendMessage(e)}>
                <div className='message-from-cont'>
                    <label htmlFor='from_name' className='message-label'>From (Email):</label>
                    <input className='message-from' type='text' name='from_name' />
                </div>
                <div className='title-cont'>
                    <label htmlFor='title' className='message-label'>Title:</label>
                    <input className='message-title' type='text' name='title' />
                </div>
                <div className='content-cont'>
                    <label htmlFor='content' className='message-label'>Message:</label>
                    <textarea className='message-content' name='message' />
                </div>
                <div className='message-buttons'>
                    <button type='submit' className='card-button'>Send</button>
                    <button className='cancel-button' onClick={() => props.onSelect('profile')}>Cancel</button>
                </div>
                {
                    messageIsSent === true
                        ? <div className='message-confirm-cont'>
                            <p className='message-sent-heading'>Email has beed successfully sent. I will replay to you in the next 24-48h.</p>
                            <p className='message-sent-heading'>Redirecting to profile page...</p>
                        </div>
                        : <></>
                }
            </form>
        </div>
    )
}

export default Message
