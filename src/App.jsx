// App.tsx
import React from "react";
import "./App.css"; 
import bgSideBarMobile from './assets/images/bg-sidebar-mobile.svg'

import SideBar from "./Components/Forms/SideBar";
import StepOne from "./Components/Steps/StepOne";
import { useGlobalContext } from "./Components/Forms/FormContext";
import StepTwo from "./Components/Steps/StepTwo";
import StepThree from "./Components/Steps/StepThree";
import StepFour from "./Components/Steps/StepFour";
import StepFive from "./Components/Steps/StepFive";



function App() {

  const {stepsCount, setStepsCount, stepsData, setStepsData,isStepOneDisabled, setIsStepOneDisabled ,isStepTwoDisabled, setIsStepTwoDisabled, checkBoxState, setCheckBoxState, activePlan, setActivePlan, isStepThreeDisabled, setIsStepThreeDisabled, activeAddOns, setActiveAddOns, isStepFourDisabled, setIsStepFourDisabled, isStepFiveDisabled, setIsStepFiveDisabled} = useGlobalContext()
  return (
    <>
      <img src={bgSideBarMobile} className="sidebar-bg"></img>
      <main className="app">
        <div className="form-container">
          <SideBar stepsCount={stepsCount} setStepsCount={setStepsCount}/>

          {stepsCount === 0 && !isStepOneDisabled && <StepOne stepsData={stepsData} setStepsData={setStepsData}  stepsCount={stepsCount} setStepsCount={setStepsCount} isStepOneDisabled={isStepOneDisabled} setIsStepOneDisabled={setIsStepOneDisabled} setIsStepTwoDisabled ={setIsStepTwoDisabled}/>}

          {stepsCount === 1 && !isStepTwoDisabled && <StepTwo stepsData={stepsData} setStepsData={setStepsData}  stepsCount={stepsCount} setStepsCount={setStepsCount} isStepTwoDisabled={isStepTwoDisabled} setIsStepTwoDisabled={setIsStepTwoDisabled}  setIsStepOneDisabled={setIsStepOneDisabled} checkBoxState={checkBoxState} setCheckBoxState={setCheckBoxState} activePlan={activePlan} setActivePlan={setActivePlan} setIsStepThreeDisabled = {setIsStepThreeDisabled} activeAddOns={activeAddOns} setActiveAddOns={setActiveAddOns}/>}

          {stepsCount === 2 && !isStepThreeDisabled && <StepThree stepsData={stepsData} setStepsData={setStepsData}  stepsCount={stepsCount}  setStepsCount={setStepsCount} checkBoxState={checkBoxState} setIsStepTwoDisabled={setIsStepTwoDisabled}  setIsStepOneDisabled={setIsStepOneDisabled} isStepThreeDisabled={isStepThreeDisabled} setIsStepThreeDisabled ={setIsStepThreeDisabled} activeAddOns={activeAddOns} setActiveAddOns={setActiveAddOns} isStepFourDisabled={isStepFourDisabled} setIsStepFourDisabled={setIsStepFourDisabled}/>}

          {stepsCount === 3 && !isStepFourDisabled && <StepFour stepsData={stepsData} setStepsData={setStepsData}  stepsCount={stepsCount}  setStepsCount={setStepsCount} checkBoxState={checkBoxState} activePlan={activePlan} setActivePlan={setActivePlan} isStepTwoDisabled={isStepTwoDisabled} setIsStepTwoDisabled={setIsStepTwoDisabled} isStepThreeDisabled={isStepThreeDisabled} setIsStepThreeDisabled ={setIsStepThreeDisabled} isStepFourDisabled={isStepFourDisabled} setIsStepFourDisabled={setIsStepFourDisabled} isStepFiveDisabled={isStepFiveDisabled} setIsStepFiveDisabled={setIsStepFiveDisabled}/>}

          {!isStepFiveDisabled && <StepFive isStepFiveDisabled={isStepFiveDisabled} setIsStepFiveDisabled={setIsStepFiveDisabled}/>}
        </div>
      </main>
    </>
  );
}

export default App
