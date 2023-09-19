import React from 'react'
import './Button.css'
function Button({ tittle, className }) {
    return (
        <button type='button' className={`btn-primary ${className}`}>{tittle}</button>
    )
}

export default Button