import React from 'react'
import { Link } from 'react-router-dom'

export const Button = ({ name, classRegular, classSpecial, to }) => {
    return (
        <button className={`btn ${classRegular} ${classSpecial}`}>
            <Link to={to}>{name}</Link>
        </button>
    )
}
