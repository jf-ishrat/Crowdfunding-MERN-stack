import React, { useState } from 'react';
import './StartACampaign.css'
import BasicStep from './Steps/BasicStep';
import Contents from './Steps/Contents';
import Funding from './Steps/Funding';
//import { Route } from 'react-router';

const StartACampaign = () => {
    const [values, setValues] = useState({
        ctitle: "",
        category: "",
        ctagline: "",
        location: "",
        tags: [],
        duration: "",
        cimage: "",
        story: "",
        amount: "",
        rnumber: "",
        anumber: "",
        re_anumber: "",

    });
    const [step, setStep] = useState(1);

    const nextStep = () => {
        if (step < 3) {
            setStep(step + 1);
        } else if (step === 3) {
            console.log(values);
        }
    };
    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleChange = (name) => (e) => {
        setValues({ ...values, [name]: e.target.value });
      };




    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-11 col-sm-9 col-md-7 col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2">
                    <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                        <h2 id="heading">Get Started!</h2>
                        <p>Fill all form field to go to the next step</p>
                        <form id="msform">
                            <ul id="progressbar">
                                <li className="active" id="account"><strong>Basics</strong></li>
                                <li id="personal"><strong>Contents</strong></li>
                                <li id="payment"><strong>Funding</strong></li>
                            </ul>
                            </form>
                            
                            <div className="bg-light vh-100" id="msform" >
                                <div className="container d-flex justify-content-center align-items-center">
                                    <div className="card p-3 w-200 mt-5">
                                        {
                                            {
                                                1: <BasicStep handleChange={handleChange} />,
                                                2: <Contents handleChange={handleChange} />,
                                                3: <Funding handleChange={handleChange} />,
                                                
                                            }[step]
                                        }
                                        <div className="d-flex justify-content-around px-5 mt-5">
                                            {step > 1 ? (
                                                <button className="action-button-previous btn-warning" onClick={prevStep}>
                                                Back
                                              </button>
                                            ) : null}
                                            <button className="action-button btn-warning" onClick={nextStep}>
                                                {step === 3 ? "Submit" : "Next"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartACampaign;