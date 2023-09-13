import React from 'react'
import './Button.css'
function Button({ tittle }) {
    return (
        <button type='button' className='btn-primary'>{tittle}</button>
    )
}

export default Button