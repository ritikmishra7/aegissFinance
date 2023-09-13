import React from 'react'
import './AdvantageCard.css'

function AdvantageCard({ align, title, description }) {
    const leftStyledCard = {
        alignItems: 'flex-start',
        borderLeft: '1px solid rgb(0,255,240)',
        textAlign: 'left',
        background: 'linearGradient(-90deg, rgb(34, 34, 34) 0%, rgba(40, 38, 38, 0) 100%)',
    }

    const rightStyledCard = {
        alignItems: 'flex-end',
        borderRight: '1px solid rgb(0,255,240)',
        textAlign: 'right',
        background: 'linearGradient(0deg, rgb(34, 34, 34) 0%, rgba(40, 38, 38, 0) 100%)'
    }

    return (
        <div className='adv-card' style={align === 'left' ? leftStyledCard : rightStyledCard}>
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    )
}

export default AdvantageCard