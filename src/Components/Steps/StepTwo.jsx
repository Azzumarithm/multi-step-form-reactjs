import React, { useEffect, useState } from 'react'
import "../../App.css";
import iconArcade from '../../assets/images/icon-arcade.svg'
import iconAdvanced from '../../assets/images/icon-advanced.svg'
import iconPro from '../../assets/images/icon-pro.svg'

const StepTwo = ({ stepsData, setStepsData, stepsCount, setStepsCount, isStepTwoDisabled, setIsStepTwoDisabled, setIsStepOneDisabled, checkBoxState, setCheckBoxState, activePlan, setActivePlan, isStepThreeDisabled, setIsStepThreeDisabled, activeAddOns, setActiveAddOns }) => {



  useEffect(() => {
    const addOnsPrice = {
      'online-service': {
        name: 'Online Service',
        monthly: 1,
        yearly: 10,
      },
      'larger-storage': {
        name: 'Larger Storage',
        monthly: 2,
        yearly: 20,
      },
      'custom-profile': {
        name: 'Custom Profile',
        monthly: 2,
        yearly: 20,
      },

    };

    const planPrices = {
      'Arcade': {
        monthly: 9,
        yearly: 90,
      },
      'Advanced': {
        monthly: 12,
        yearly: 120,
      },
      'Pro': {
        monthly: 15,
        yearly: 150,
      },

    };

    if (activePlan !== '' && activePlan !== 'pick a plan') {
      const price = planPrices[activePlan][
        checkBoxState.isMonthlyChecked ? 'monthly' : 'yearly'
      ];

  
      setStepsData((prevState) => ({
        ...prevState,
        plan: {
          ...prevState.plan,
          price: price,
        },
      }));
    }

    Object.keys(activeAddOns).forEach((activeAddOn) => {
      if (activeAddOns[activeAddOn] !== false) {
        const price = addOnsPrice[activeAddOn][
          checkBoxState.isMonthlyChecked ? 'monthly' : 'yearly'
        ];

        setStepsData((prevState) => ({
          ...prevState,
          addOns: {
            ...prevState.addOns,
            [activeAddOn]: {
              ...prevState.addOns[activeAddOn],
              "price": price
            },
          },
        }));

        console.log(activeAddOn);

      }
    });
  }, [checkBoxState.isMonthlyChecked, activePlan]);


  const handleBackToStepOneBtn = () => {
    setStepsCount(stepsCount => {
      return stepsCount - 1
    })

    setIsStepTwoDisabled(true)
    setIsStepOneDisabled(false)
  }

  const handleMonthYearToggle = (e) => {
    setCheckBoxState(prevState => ({
      ...prevState,
      isMonthlyChecked: !e.target.checked,
      isYearlyChecked: e.target.checked,
    }))
  }

  const handlePlanButton = (planName) => {
    setActivePlan(planName); // Update the active plan when a button is clicked
  };

  const handlePlanContainerClick = (e) => {
    let target = e.target;
    while (target && !target.classList.contains('plan-subcontainer')) {
      target = target.parentElement;
    }
    // Check if the clicked element has the "plan-subcontainer" class
    if (target && target.classList.contains('plan-subcontainer')) {
      const price = target.getAttribute('data-price');
      // Extract the plan name from the parent plan-subcontainer's class
      const planName = target.classList[0]; // Assumes the plan name is the first class
      
      // Call the handle function with the plan name
      handlePlanButton(planName);
      

      setStepsData((prevState) => ({
        ...prevState,
        plan: {
          ...prevState.plan,
          price: price,
        },
    }));
    }

  };

  const handlePlanFormSubmit = (e) => {
    e.preventDefault()

    if (activePlan !== '' && activePlan !== 'pick a plan') {
      setStepsCount(stepsCount => {
        return stepsCount + 1
      })
      setIsStepTwoDisabled(true)
      setIsStepThreeDisabled(false)
    }
    else {
      setActivePlan('pick a plan')
    }

  }


  return (
    <div className={`steps step2-container ${isStepTwoDisabled ? 'disabled' : ''}`}>
      <div className={`selectplan-form-subcontainer`}>
        <form className={`plan-form`} onSubmit={handlePlanFormSubmit}>
          <h2 className={`form-title`}>Select Your Plan</h2>
          <p className={`form-desc`}>You have the option of monthly or yearly billing.</p>
          <div className={`plan-container`} onClick={handlePlanContainerClick}>
            <div className={`Arcade plan-subcontainer ${activePlan === 'Arcade' ? 'active' : ''}`} data-price={checkBoxState.isMonthlyChecked ? 9 : 90} >
              <div className={`plan-image`}>
                <img src={iconArcade} alt={`arcade`} />
              </div>
              <div className={`arcade plan-desc month ${checkBoxState.isMonthlyChecked ? '' : 'disabled'}`}>
                <p className={`plan-name`}>Arcade</p>
                <div className={`price`}>$9/mo</div>
              </div>
              <div className={`arcade plan-desc year ${checkBoxState.isMonthlyChecked ? 'disabled' : ''}`}>
                <div>
                  <p className={`plan-name`}>Arcade</p>
                  <div className={`price`}>$90/yr</div>
                </div>
                <p className={`two-months-free`}>2 months free</p>
              </div>
            </div>
            <div className={`Advanced plan-subcontainer ${activePlan === 'Advanced' ? 'active' : ''}`} data-price={checkBoxState.isMonthlyChecked ? 12 : 120}>
              <div className={`plan-image`}>
                <img src={iconAdvanced} alt={`advanced`} />
              </div>
              <div className={`advanced plan-desc month ${checkBoxState.isMonthlyChecked ? '' : 'disabled'}`}>
                <p className={`plan-name`}>Advanced</p>
                <div className={`price`}>$12/mo</div>
              </div>
              <div className={`advanced plan-desc year ${checkBoxState.isMonthlyChecked ? 'disabled' : ''}`}>
                <div>
                  <p className={`plan-name`}>Advanced</p>
                  <div className={`price`}>$120/yr</div>
                </div>
                <p className={`two-months-free`}>2 months free</p>
              </div>
            </div>
            <div className={`Pro plan-subcontainer ${activePlan === 'Pro' ? 'active' : ''}`} data-price={checkBoxState.isMonthlyChecked ? 15 : 150}>
              <div className={`plan-image`}>
                <img src={iconPro} alt={`pro`} />
              </div>
              <div className={`pro plan-desc month ${checkBoxState.isMonthlyChecked ? '' : 'disabled'}`}>
                <p className={`plan-name`}>Pro</p>
                <div className={`price`}>$15/mo</div>
              </div>
              <div className={`pro plan-desc year ${checkBoxState.isMonthlyChecked ? 'disabled' : ''}`}>
                <div>
                  <p className={`plan-name`}>Pro</p>
                  <div className={`price`}>$150/yr</div>
                </div>
                <p className={`two-months-free`}>2 months free</p>
              </div>
            </div>
          </div>

          <div className={`month-yearly-btncontainer`}>
            <p className={`monthly-button ${checkBoxState.isMonthlyChecked ? 'enabled' : 'disabled'}`}>Monthly</p>

            <input type="checkbox" id={`check`} className={`month-yearly-btn-input`} onClick={handleMonthYearToggle} defaultChecked={checkBoxState.isMonthlyChecked ? false : true}/>
            
            <label htmlFor={`check`} className={`month-yearly-btn`}></label>

            <p className={`yearly-button ${checkBoxState.isMonthlyChecked ? 'disabled' : 'enabled'}`}>Yearly</p>
          </div>

          <div className={`next-back-btns select-plan-btns`}>
            <button className={`select-plan back-btn`} type="button" onClick={handleBackToStepOneBtn}>
              Go back
            </button>
            <button className={`select-plan next-btn`} type="submit">
              Next Step
            </button>
          </div>

          <p className={`plan-error ${activePlan === 'pick a plan' ? `` : `disabled`}`}>Please select a plan before submitting.</p>
        </form>
      </div>
    </div>
  );

}

export default StepTwo