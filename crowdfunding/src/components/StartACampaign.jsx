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
    const [file, setFile] = useState("");
    const [filename, setFilename] = useState("Choose File");

    const [faqList, setfaqList] = useState([
        {question: "", answer: ""}

    ]);
    const [step, setStep] = useState(1);

    const nextStep = () => {
        if (step === 1) {
            if (values.ctitle && values.category && values.ctagline && values.location && values.tags && values.duration) {
                setStep(step + 1);
            }
            else {
                window.alert("Please fill up the fields!");
            }

        } else if (step === 2) {
            if (values.story && faqList[0].question && faqList[0].answer) {
                setStep(step + 1);
            }
            else {
                window.alert("Please fill up the fields!");
            }

        }
        else if (step === 3) {
            if (values.amount && values.rnumber && values.anumber && values.re_anumber) {
                if(values.anumber === values.re_anumber){
                    console.log(values);
                console.log(faqList);
                }
                else{
                    window.alert("Account number did not match!");
                }
                

            }
            else {
                window.alert("Please fill up the fields!");
            }

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


    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    };

    const props = { faqList, setfaqList, values, setValues, handleChange }




    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-13 col-sm-9 col-md-7 col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2">
                    <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                        <h2 id="heading">Get Started!</h2>
                        <p>Fill all form field to go to the next step</p>

                        <div className="bg-light vh-200" id="msform" >
                            <div className="container d-flex justify-content-center align-items-center">
                                <div className="card p-3 w-300 mt-5">
                                    {
                                        {
                                            1: <BasicStep handleChange={handleChange} values={values} />,
                                            2: <Contents {...props} />,
                                            3: <Funding handleChange={handleChange} values={values} />,

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