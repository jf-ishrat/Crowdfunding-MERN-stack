import React from "react";
import '../StartACampaign.css';


const Contents = ({ handleChange }) => {
    return (
        <div>
            <fieldset>
                <div className="form-card">
                    <div className="row">
                        <div className="col-7">
                            <h2 className="fs-title">Funding Information:</h2>
                        </div>
                        <div className="col-5">
                            <h2 className="steps">Step 3/3</h2>
                        </div>
                    </div> 
                    <label className="fieldlabels">Campaign Goal Amount: *</label>
                    <input type="number" name="amount" placeholder="Goal Amount" onChange={handleChange("amount")} />

                    <div>
                        <label className="fieldlabels" style={{ "fontSize": "20px" }}>Bank Information *</label>
                        <br/>
                        <label className="fieldlabels">Routing Number: *</label>
                        <input type="number" name="rnumber" placeholder="Bank Routing Number" onChange={handleChange("rnumber")} />
                        <label className="fieldlabels">Account Number: *</label>
                        <input type="number" name="anumber" placeholder="Bank Account Number" onChange={handleChange("anumber")} />
                        <input type="number" name="re_anumber" placeholder="Re-type Account Number" onChange={handleChange("re_anumber")} />
                    </div>

                </div>

            </fieldset>
        </div>


    )
};

export default Contents;
