import React from 'react'
import './AdvantageCard.css'

function AdvantageCard({ align, title, description }) {
    const leftStyledCard = {
        alignItems: 'flex-start',
        borderLeft: '1px solid rgb(0,255,240)'
    }

    const rightStyledCard = {
        alignItems: 'flex-end',
        borderRight: '1px solid rgb(0,255,240)'
    }

    return (
        <div className='adv-card' style={align === 'left' ? leftStyledCard : rightStyledCard}>
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    )
}

export default AdvantageCard