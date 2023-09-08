import React, { useEffect, useState } from 'react';

import "../../App.css";



const SideBar = ({ stepsCount, setStepsCount }) => {

    useEffect(() => {
        updateStepCircles();
    }, [stepsCount]);

    const updateStepCircles = () => {
        const stepCircles = document.querySelectorAll('.step-circle');
        stepCircles.forEach((stepCircle, index) => {
            if (index === stepsCount) {
                stepCircle.classList.add("current");
            } else {
                stepCircle.classList.remove("current");
            }
        });
    }


    return (
        <>
            <div className="steps-container">
                <ul>
                    <li className="step1 step-indicator">
                        <div className="step-circle one">1</div>
                        <div className="step-desc">
                            <p>STEP 1</p>
                            <h4>YOUR INFO</h4>
                        </div>
                    </li>
                    <li className="step2 step-indicator">
                        <div className="step-circle two">2</div>
                        <div className="step-desc">
                            <p>STEP 2</p>
                            <h4>SELECT PLAN</h4>
                        </div>
                    </li>
                    <li className="step3 step-indicator">
                        <div className="step-circle three">3</div>
                        <div className="step-desc">
                            <p>STEP 3</p>
                            <h4>ADD-ONS</h4>
                        </div>
                    </li>
                    <li className="step4 step-indicator">
                        <div className="step-circle four">4</div>
                        <div className="step-desc">
                            <p>STEP 4</p>
                            <h4>SUMMARY</h4>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default SideBar;
