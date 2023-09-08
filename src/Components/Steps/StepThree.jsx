import React from 'react'
import "../../App.css";

const StepThree = ({ stepsData, setStepsData, stepsCount, setStepsCount, isStepThreeDisabled, setIsStepThreeDisabled, isStepTwoDisabled, setIsStepTwoDisabled , activeAddOns, setActiveAddOns, checkBoxState, isStepFourDisabled, setIsStepFourDisabled}) => {


    const handleBackToStepTwoBtn = () => {
        setStepsCount(stepsCount => {
            return stepsCount - 1
        })

        setIsStepTwoDisabled(false)
        setIsStepThreeDisabled(true)
    }

    const handleAddOnsContainerClick = (e) => {
        let target = e.target;

        let addOnsType = target.getAttribute("input-type")
        let addOnsName = target.getAttribute("name")
        setActiveAddOns((prevState) => ({
            ...prevState,
            [addOnsType]: target.checked
        }))

        setStepsData((prevState) => ({
            ...prevState,
            addOns: {
                ...prevState.addOns,
                [addOnsType]:  {
                    ...prevState.addOns.addOnsType,
                    "addOns-name": target.checked ? [addOnsName] : "",
                    "price": target.checked ? target.getAttribute("data-price") : ''
                },
            },
        }));
        


    };

    const handlePlanFormSubmit = (e) => {
        e.preventDefault()

        setStepsCount(stepsCount => {
            return stepsCount + 1
          })
          
        setIsStepThreeDisabled(true)
        setIsStepFourDisabled(false)

    }


    return (
        <div className={`steps step3-container ${isStepThreeDisabled ? 'disabled' : ''}`}>
            <div className={`addons-form-subcontainer`}>
                <form className={`addons-form`} onSubmit={handlePlanFormSubmit}>
                    <h2 className={`form-title`}>Pick add-ons</h2>
                    <p className={`form-desc`}>Add-ons help enhance your gaming experience.</p>

                    <div className={`addons-container`} onChange={handleAddOnsContainerClick}>
                        <div className={`addons-subcontainer online-service ${activeAddOns["online-service"] ? "active" : " "}`}>
                            <label htmlFor={`addons-online-service`}>
                                <input type="checkbox" className={`addons-input online-service`} id={`addons-online-service`} name={`Online Service`} input-type={`online-service`} defaultChecked={activeAddOns["online-service"]} data-price={checkBoxState.isMonthlyChecked ? 1 : 10}/>
                                <span className={`checkbox online-service`}></span>
                                <div className={`addons-desc online-service`}>
                                    <p>Online Service</p>
                                    <p>Access to multiplayer games</p>
                                </div>
                            </label>

                            <div className={`addons-price monthly online-service ${checkBoxState.isMonthlyChecked ? '' : 'disabled'}`}>+$1/mo</div>
                            <div className={`addons-price yearly online-service ${checkBoxState.isMonthlyChecked ? 'disabled' : ''}`}>+$10/yr</div>
                        </div>
                        <div className={`addons-subcontainer larger-storage ${activeAddOns["larger-storage"] ? "active" : " "}`}>
                            <label htmlFor={`addons-larger-storage`}>
                                <input type="checkbox" className={`addons-input larger-storage`} id={`addons-larger-storage`} name={`Larger Storage`} input-type={`larger-storage`} defaultChecked={activeAddOns["larger-storage"]} data-price={checkBoxState.isMonthlyChecked ? 2 : 20}/>
                                <span className={`checkbox larger-storage`}></span>
                                <div className={`addons-desc larger-storage`}>
                                    <p>Larger storage</p>
                                    <p>Extra 1TB of cloud save</p>
                                </div>
                            </label>

                            <div className={`addons-price monthly larger-storage ${checkBoxState.isMonthlyChecked ? '' : 'disabled'}`}>+$2/mo</div>
                            <div className={`addons-price yearly larger-storage ${checkBoxState.isMonthlyChecked ? 'disabled' : ''}`}>+$20/yr</div>
                        </div>
                        <div className={`addons-subcontainer custom-profile ${activeAddOns["custom-profile"] ? "active" : " "}`}>
                            <label htmlFor={`addons-custom-profile`}>
                                <input type="checkbox" className={`addons-input custom-profile`} id={`addons-custom-profile`} name={`Custom Profile`}  input-type={`custom-profile`}defaultChecked={activeAddOns["custom-profile"]} data-price={checkBoxState.isMonthlyChecked ? 2 : 20}/>
                                <span className={`checkbox custom-profile`}></span>
                                <div className={`addons-desc custom-profile`}>
                                    <p>Customizable Profile</p>
                                    <p>Custom theme on your profile</p>
                                </div>
                            </label>

                            <div className={`addons-price monthly custom-profile ${checkBoxState.isMonthlyChecked ? '' : 'disabled'}`}>+$2/mo</div>
                            <div className={`addons-price yearly custom-profile ${checkBoxState.isMonthlyChecked ? 'disabled' : ''}`}>+$20/yr</div>
                        </div>
                    </div>

                    <div className={`next-back-btns add-ons`}>
                        <button className={`add-ons back-btn`} type="button" onClick={handleBackToStepTwoBtn}>Go back</button>
                        <button className={`add-ons next-btn`} type="submit">Next Step</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default StepThree