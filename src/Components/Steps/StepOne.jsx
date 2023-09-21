import React, { useState, useEffect } from 'react'
import "../../App.css";


const StepOne = ({ stepsData, setStepsData, stepsCount, setStepsCount, isStepOneDisabled, setIsStepOneDisabled, setIsStepTwoDisabled}) => {  
    //Including Empty String
    const isValidName = (name) => /^(?:[A-Za-z]+(?:[ -][A-Za-z]+)*)?$/.test(name);
    const isValidEmail = (email) => /^(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,})?$/.test(email);
    const isValidPhoneNumber = (phoneNumber) => /^(?:(?:\+\d{1,3}\s?)?(?:\()?\d{1,4}(?:\))?[-\s]?\d{1,4}[-\s]?\d{1,9})?$/.test(phoneNumber);
    
    const [stepOneOutlineErrors, setStepOneOutlineErrors] = useState({
        "name-personal": false,
        "email-personal": false,
        "phone-personal": false,
    })

    const [stepOneRealTimeErrors, setStepOneRealTimeErrors] = useState({
        "name-personal": false,
        "email-personal": false,
        "phone-personal": false,
    });

    const [stepOneSubmitErrors, setStepOneSubmitErrors] = useState({
        "name-personal": false,
        "email-personal": false,
        "phone-personal": false,
    });

    const personalValidation = {
        "name-personal": {
            input: null,
            errorClass: "personal-name-error",
            requiredErrorClass: "name-error",
            isValid: isValidName,
        },
        "email-personal": {
            input: null,
            errorClass: "personal-email-error",
            requiredErrorClass: "email-error",
            isValid: isValidEmail,
        },
        "phone-personal": {
            input: null,
            errorClass: "personal-phone-error",
            requiredErrorClass: "phone-error",
            isValid: isValidPhoneNumber,
        },
    }

    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        setStepsData((prevState) => ({
            ...prevState,
            personalForm: {
              ...prevState.personalForm,
              [`${name}-personal`]: value,
            },
        }));

        
        setStepOneRealTimeErrors((prevErrors) => ({
            ...prevErrors,
            [`${name}-personal`]: !personalValidation[`${name}-personal`].isValid(value),
        }));

        setStepOneOutlineErrors(
            (prevErrors) => ({
                ...prevErrors,
                [`${name}-personal`]: !personalValidation[`${name}-personal`].isValid(value),
            })
        )

        setStepOneSubmitErrors((prevErrors) => ({
            ...prevErrors,
            [`${name}-personal`]: false,
        }))
    };
    

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const personalForm = e.target
        
        const personalNameName = (personalForm.elements.namedItem('name'));
        const personalEmailName = (personalForm.elements.namedItem('email'));
        const personalPhoneName = (personalForm.elements.namedItem('phone'));

        //Excluding empty string
        const isValidName = (name) => /^[A-Za-z]+(?:[ -][A-Za-z]+)*$/.test(name);
        const isValidEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
        const isValidPhoneNumber = (phoneNumber) => /^(\+\d{1,3}\s?)?(\()?\d{1,4}(\))?[-\s]?\d{1,4}[-\s]?\d{1,9}$/.test(phoneNumber);

        const personalNameValue = personalNameName?.value;
        const personalEmailValue = personalEmailName?.value;
        const personalPhoneValue = personalPhoneName?.value;

        const isNameValid = isValidName(personalNameValue || '');
        const isEmailValid = isValidEmail(personalEmailValue || '');
        const isPhoneNumberValid = isValidPhoneNumber(personalPhoneValue || '');

        if (isNameValid && isEmailValid && isPhoneNumberValid) {
            

            setStepsCount(stepsCount => {
                return stepsCount + 1
            })

            personalForm.reset();

            setIsStepOneDisabled(true)
            setIsStepTwoDisabled(false)
        } else {
            
            console.log(personalValidation['name-personal'].isValid(personalNameValue));
            
            setStepOneSubmitErrors((prevErrors) => ({
                ...prevErrors,
                'name-personal': personalNameValue === "" ? personalValidation['name-personal'].isValid(personalNameValue) : false,
                'email-personal': personalEmailValue === "" ? personalValidation['email-personal'].isValid( personalEmailValue) : false,
                'phone-personal': personalPhoneValue=== "" ? personalValidation['phone-personal'].isValid(personalPhoneValue) : false,
            }));

            setStepOneRealTimeErrors((prevErrors) => ({
                ...prevErrors,
                'name-personal': personalNameValue !== "" ? !personalValidation['name-personal'].isValid(personalNameValue) : false,
                'email-personal': personalEmailValue !== "" ? !personalValidation['email-personal'].isValid( personalEmailValue) : false,
                'phone-personal': personalPhoneValue !== "" ? !personalValidation['phone-personal'].isValid(personalPhoneValue) : false,
            }));


            setStepOneOutlineErrors(
                (prevErrors) => ({
                    ...prevErrors,
                    [`name-personal`]: personalNameValue === "" ? personalValidation['name-personal'].isValid(personalNameValue)  : !personalValidation['name-personal'].isValid(personalNameValue),
                    [`email-personal`]: personalEmailValue === "" ? personalValidation['email-personal'].isValid( personalEmailValue)  : !personalValidation['email-personal'].isValid( personalEmailValue),
                    [`phone-personal`]: personalPhoneValue === "" ? personalValidation['phone-personal'].isValid(personalPhoneValue)  : !personalValidation['phone-personal'].isValid(personalPhoneValue),
                })
            )
            

        }
    };


    return (
        <>
            <div className={`steps step1-container ${isStepOneDisabled ? 'disabled' : ''}`}>
                <div className="personal-form-subcontainer">
                    <form className="personal-form" onSubmit={handleFormSubmit}>
                        <h2 className="form-title">Personal Info</h2>
                        <p className="form-desc">Please provide your name, email address, and phone number.</p>

                        <div className="personal-input-container">
                            <div className="name-personal-input">
                                <label htmlFor="name-personal">
                                    <p className="name">Name</p>
                                    <p className={`personal-required-error name-error ${stepOneSubmitErrors['name-personal'] ? 'error' : ''}`}>This field is required</p>
                                    <p className={`personal-name-error personal-accurate-error ${stepOneRealTimeErrors['name-personal'] ? 'error' : ''}`}>Invalid Input</p>
                                </label>
                                <input type="text" name="name" id="name-personal" className={`name-personal personal-input ${stepOneOutlineErrors['name-personal'] ? 'error' : ''}`} placeholder="e.g. Stephen King" value={stepsData.personalForm["name-personal"]} onChange={handleInputChange} />
                            </div>

                            <div className="email-personal-input">
                                <label htmlFor="email-personal">
                                    <p className="email-address">Email Address</p>
                                    <p className={`personal-required-error email-error ${stepOneSubmitErrors['email-personal'] ? 'error' : ''}`}>This field is required</p>
                                    <p className={`personal-email-error personal-accurate-error ${stepOneRealTimeErrors['email-personal'] ? 'error' : ''}`}>Invalid Input</p>
                                </label>
                                <input type="text" name="email" id="email-personal" className={`email-personal personal-input ${stepOneOutlineErrors['email-personal'] ? 'error' : ''}`} placeholder="e.g. stephenking@lorem.com" value={stepsData.personalForm["email-personal"]} onChange={handleInputChange}/>
                            </div>

                            <div className="phone-personal-input">
                                <label htmlFor="phone-personal">
                                    <p className="phone-number">Phone Number</p>
                                    <p className={`personal-required-error phone-error ${stepOneSubmitErrors['phone-personal'] ? 'error' : ''}`}>This field is required</p>
                                    <p className={`personal-phone-error personal-accurate-error ${stepOneRealTimeErrors['phone-personal'] ? 'error' : ''}`}>Invalid Input</p>
                                </label>
                                <input type="text" name="phone" id="phone-personal" className={`phone-personal personal-input ${stepOneOutlineErrors['phone-personal'] ? 'error' : ''}`} placeholder="e.g. +1 234 567 890" value={stepsData.personalForm["phone-personal"]} onChange={handleInputChange}/>
                            </div>
                        </div>

                        <div className="next-back-btns personal-btns">
                            <button className="personal next-btn" type="submit">Next Step</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default StepOne