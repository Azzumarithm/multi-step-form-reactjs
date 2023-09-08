import React, { useState, createContext, useContext, ReactNode } from "react";
import "../../App.css";



const GlobalContext = createContext(undefined);


// custom hook


export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalContext must be used within a GlobalContextProvider");
    }
    return context;
};


const FormContext = ({ children }) => { 

    const [stepsCount, setStepsCount] = useState(0)
    
    const [stepsData, setStepsData] = useState({

        personalForm: {
            "name-personal": '',
            "email-personal": '',
            "phone-personal": '',
        },
        plan: {
            "price": ''
        },
        addOns: {
            "online-service": {
                "addOns-name": "",
                "price": ''
            },
            "larger-storage": {
                "addOns-name": "",
                "price": ''
            },
            "custom-profile": {
                "addOns-name": "",
                "price": ''
            }
        },
    });

    const [checkBoxState, setCheckBoxState] = useState({
        isMonthlyChecked: true,
        isYearlyChecked: false
    })
    
    const [activePlan, setActivePlan] = useState('')

    const [activeAddOns, setActiveAddOns] = useState({
        "online-service": false,
        "larger-storage": false,
        "custom-profile": false
    })

    const [isStepOneDisabled, setIsStepOneDisabled] = useState(false)
    const [isStepTwoDisabled, setIsStepTwoDisabled] = useState(true)
    const [isStepThreeDisabled, setIsStepThreeDisabled] = useState(true)
    const [isStepFourDisabled, setIsStepFourDisabled] = useState(true)
    const [isStepFiveDisabled, setIsStepFiveDisabled] = useState(true)
    

    return (
        <GlobalContext.Provider value={{stepsCount, setStepsCount,stepsData, setStepsData, isStepOneDisabled, setIsStepOneDisabled, isStepTwoDisabled, setIsStepTwoDisabled,checkBoxState, setCheckBoxState,activePlan, setActivePlan, isStepThreeDisabled, setIsStepThreeDisabled, activeAddOns, setActiveAddOns, isStepFourDisabled, setIsStepFourDisabled, isStepFiveDisabled, setIsStepFiveDisabled}}>
            {children}
        </GlobalContext.Provider>


    )

}





export default FormContext