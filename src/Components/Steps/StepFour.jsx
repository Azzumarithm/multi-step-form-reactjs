import React from 'react'
import "../../App.css";

const StepFour = ({ stepsData, setStepsData, stepsCount, setStepsCount, checkBoxState,isStepTwoDisabled, setIsStepTwoDisabled, setCheckBoxState,isStepThreeDisabled,activePlan, setActivePlan, setIsStepThreeDisabled, isStepFourDisabled, setIsStepFourDisabled, isStepFiveDisabled, setIsStepFiveDisabled}) => {

    const handleBackToStepThreeBtn = () => {
        setStepsCount(stepsCount => {
            return stepsCount - 1
        })

        setIsStepThreeDisabled(false)
        setIsStepFourDisabled(true)
    }

    const handleChangeButton = () => {
        setStepsCount(stepsCount => {
            return stepsCount - 2
        })

        setIsStepTwoDisabled(false)
        setIsStepFourDisabled(true)
    }

    let totalAddOnsPrice = 0;

    Object.keys(stepsData.addOns).forEach((addOnKey) => {
        const price = parseFloat(stepsData.addOns[addOnKey]["price"]);
        if (!isNaN(price)) {
            totalAddOnsPrice += price;
        }
    });

    
    const planPrice = parseFloat(stepsData.plan["price"]);
    const totalPrice = isNaN(planPrice) ? totalAddOnsPrice : planPrice + totalAddOnsPrice;
    
    const handleFormSubmit = (e) => {
        const responses = JSON.parse(localStorage.getItem('responses')) || []
        e.preventDefault()
        localStorage.setItem(responses, JSON.stringify(stepsData))

        setIsStepFourDisabled(true)
        setIsStepFiveDisabled(false)
    }
    
    return (
        <div className={`steps step4-container ${isStepFourDisabled ? 'disabled' : ''}`}>
            <div className={`summary-form-subcontainer`}>
                <form className={`summary-form`} onSubmit={handleFormSubmit}>
                    <h2 className={`form-title`}>Finishing Up</h2>
                    <p className={`form-desc`}>Double-check everything looks OK before confirming.</p>

                    <div className={`summary-container`}>
                        <div className={`plan-summary-container`}>

                            <div className={`change-price-container`}>
                                <div className={`change-plan-price-subcontainer monthly`}>
                                    <p>{checkBoxState.isMonthlyChecked ? `${activePlan} (Monthly)` : `${activePlan} (Yearly)`}</p>
                                    <button className={`btn change-monthly-price`} onClick={handleChangeButton}>Change</button>
                                </div>
                            </div>

                            <div className={`change-price-plan-desc monthly`} price-month={`9`}>
                                {checkBoxState.isMonthlyChecked ? `+$${stepsData.plan["price"]}/mo` : `+$${stepsData.plan["price"]}/yr`}
                            </div>

                        </div>

                        <hr />

                        <div className={`addons-summary-container`}>

                            {Object.keys(stepsData.addOns).map((addOnKey) => {
                                const addOn = stepsData.addOns[addOnKey]
                                if (addOn["addOns-name"] !== ""){

                                    return (
                                        <div className={`addons-price-container`} key={addOnKey}>
                                            <p className={`addons-price-subcontainer`}>{addOn["addOns-name"]}</p>
                                            <div className={`change-price-addons-desc`} price-month={`1`}>
                                                {checkBoxState.isMonthlyChecked ? `+$${addOn["price"]}/mo` : `+$${addOn["price"]}/yr`}
                                            </div>
                                        </div>
                                    );
                                } 
                            })}


                        </div>
                    </div>

                    <div className={`total-summary-container`}>

                        <p className={`total-text`}>{checkBoxState.isMonthlyChecked ? `Total (Monthly)` : `Total (Yearly)`}</p>
                        <div className={`total-price`}>
                            {checkBoxState.isMonthlyChecked ? `$${totalPrice}/mo` : `$${totalPrice}/yr`}
                        </div>

                    </div>

                    <div className={`next-back-btns summary`}>
                        <button type={`button`} className={`summary back-btn`} onClick={handleBackToStepThreeBtn}>Go back</button>
                        <button type={`submit`} className={`summary next-btn`}>Confirm</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default StepFour