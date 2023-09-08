import React from 'react'
import "../../App.css";
import iconCheckMark from '../../assets/images/icon-thank-you.svg'

const StepFive = ({isStepFiveDisabled, setIsStepFiveDisabled}) => {
    return (
        <div className={`steps step5-container ${isStepFiveDisabled ? 'disabled' : ''}`}>
            <div className={`thank-you-container`}>
                <img src={iconCheckMark} className={`icon-thank-you`} alt={`icon-thank-you`} />
                <h1>Thank You!</h1>
                <p>Thanks for confirming your subscription! We hope you have <br /> fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
            </div>
        </div>

    )
}

export default StepFive