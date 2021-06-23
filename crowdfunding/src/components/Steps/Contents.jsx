import React from "react";
import '../StartACampaign.css';


const Contents = ({ handleChange }) => {
    return (
        <div>
            <fieldset>
                <div className="form-card">
                    <div className="row">
                        <div className="col-7">
                            <h2 className="fs-title">Contents:</h2>
                        </div>
                        <div className="col-5">
                            <h2 className="steps">Step 2/3</h2>
                        </div>
                    </div> 
                    <label className="fieldlabels">Story: *</label>
                    <textarea
                        className="form-control"
                        id="story"
                        style ={{ "height": "200px" }}
                        name="story"
                        onChange={handleChange("story")}
                    />
                    <div>
                    <label className="fieldlabels">FAQ</label>
                    <input type="text" name="question" placeholder="Question" />
                    <input type="text" name="answer" placeholder="Answer" />
                    </div>
                  
                </div>

            </fieldset>
        </div>


    )
};

export default Contents;
