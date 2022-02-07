import React from 'react';
import './Notification.scss'

export const Notification = (props) => {

    let cssClasses = [
        "notification flex flex-column flex-align-center",
        props.status === "success" ? 'col-9' : '' +
            props.status === "error" ? 'col-10' : '' +
                props.status === "pending" ? 'col-1' : ''
    ]

    return (
        <>
            <section className={cssClasses.join(' ')}>
                <h2>{props.title}</h2>
                <p>{props.message}</p>
            </section>
        </>
    );
};
