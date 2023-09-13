import React from 'react'
import AdvantageImage1 from '../../Assets/images/advantage.svg'
import AdvantageImage2 from '../../Assets/images/advantage2.svg'
import AdvantageCard from '../AdvantageCard/AdvantageCard'
import advantageData1 from './Data1'
import advantageData2 from './Data2'
import './Advantage.css'
function Advantage() {

    return (
        <div className='advantage-section'>
            <h3>Our Advantages</h3>
            <div className="advantage-container">
                <div className="adv-left-part">
                    {advantageData1.map((item, index) => {
                        return (
                            <AdvantageCard
                                key={`advantage-left-${index}`}
                                align={item.align}
                                title={item.title}
                                description={item.description}
                            />
                        )
                    }
                    )}
                </div>
                <div className="adv-right-part">
                    <img src={AdvantageImage1} alt="advantage" />
                </div>
            </div>
            <div className="advantage-container">
                <div className="adv-right-part">
                    <img src={AdvantageImage2} alt="advantage" />
                </div>
                <div className="adv-left-part">
                    {advantageData2.map((item, index) => {
                        return (
                            <AdvantageCard
                                key={`advantage-left-${index}`}
                                align={item.align}
                                title={item.title}
                                description={item.description}
                            />
                        )
                    }
                    )}
                </div>
            </div>

        </div>
    )
}

export default Advantage