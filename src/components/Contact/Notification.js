import React, { useState, useEffect } from 'react';
import './Notification.scss'

export const Notification = (props) => {
    const [hide, setHide] = useState(false)

    useEffect(()=> {
        
    },[])

    return (
        <>
            <section>
                <h2>{props.title}</h2>
                <p>{props.message}</p>
            </section>
        </>
    );
};
