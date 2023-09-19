import React from 'react'
import './AdvantageCard.css'

function AdvantageCard({ align, title, description }) {
    const leftStyledCard = {
        alignItems: 'flex-start',
        borderLeft: '1px solid rgb(0,255,240)',
        textAlign: 'left',
        ubackground: 'linear-gradient(to right, rgb(33, 33, 33), transparent)'
    }

    const rightStyledCard = {
        alignItems: 'flex-end',
        borderRight: '1px solid rgb(0,255,240)',
        textAlign: 'right',
        background: 'linear-gradient(to right, transparent, rgb(33, 33, 33))'
    }

    return (
        <div className='adv-card' style={align === 'left' ? leftStyledCard : rightStyledCard}>
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    )
}

export default AdvantageCard