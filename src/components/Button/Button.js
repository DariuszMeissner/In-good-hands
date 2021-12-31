import React from 'react'
import { Link } from 'react-router-dom'

export const Button = ({ name, classRegular, to }) => {
    return (
        <button className={`btn ${classRegular}`}>
            <Link to={to}>{name}</Link>
        </button>
    )
}
