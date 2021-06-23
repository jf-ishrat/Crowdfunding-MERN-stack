import React from "react";
import '../StartACampaign.css';


const BasicStep = ({ handleChange }) => {
    return (
        <div>
            <fieldset>
                <div className="form-card">
                    <div className="row">
                        <div className="col-7">
                            <h2 className="fs-title">Basic Information:</h2>
                        </div>
                        <div className="col-5">
                            <h2 className="steps">Step 1/3</h2>
                        </div>
                    </div> <label className="fieldlabels">Campaign Title: *</label>
                    <input type="text" name="ctitle" placeholder="Campaign Title" onChange={handleChange("ctitle")} />
                    <label className="fieldlabels">Category: *</label>
                    <select className="form-select" aria-label="Default select example" name="category" onChange={handleChange("category")}>
                        <option selected>Select a category</option>
                        <option value="1">Education</option>
                        <option value="2">Innovative products</option>
                        <option value="3">Wellness</option>
                    </select>
                    <label className="fieldlabels">Campaign Tagline: *</label>
                    <input type="text" name="ctagline" placeholder="Short Description" onChange={handleChange("ctagline")} />
                    <label className="fieldlabels">Location: *</label>
                    <input type="text" name="location" placeholder="Country Name" onChange={handleChange("location")} />
                    <label className="fieldlabels">Tags: *</label>
                    <input type="text" name="location" placeholder="Tags" onChange={handleChange("tags")} />
                    <label className="fieldlabels">Campaign Duration: *</label>
                    <input type="number" name="duration" placeholder="Campaign Duration" onChange={handleChange("duration")} />
                    <label className="fieldlabels">Campaign Image: *</label>
                    <input type="file" name="cimage" placeholder="Campaign image" onChange={handleChange("cimage")} />
                </div>

            </fieldset>
        </div>


    )
};

export default BasicStep;
