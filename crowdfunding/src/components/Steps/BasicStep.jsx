import React from "react";
import '../StartACampaign.css';


const BasicStep = (props) => {
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
                    <input type="text" name="ctitle" placeholder="Campaign Title" value={props.values.ctitle} onChange={props.handleChange("ctitle")} />
                    <label className="fieldlabels">Category: *</label>
                    <select className="form-select" aria-label="Default select example" name="category" value={props.values.catagory} onChange={props.handleChange("category")}>
                        <option>Select a category</option>
                        <option value="Education">Education</option>
                        <option value="Innovative products">Innovative products</option>
                        <option value="Wellness">Wellness</option>
                    </select>
                    <label className="fieldlabels">Campaign Tagline: *</label>
                    <input type="text" name="ctagline" placeholder="Short Description" value={props.values.ctagline} onChange={props.handleChange("ctagline")} />
                    <label className="fieldlabels">Location: *</label>
                    <input type="text" name="location" placeholder="Country Name" value={props.values.location} onChange={props.handleChange("location")} />
                    <label className="fieldlabels">Tags: *</label>
                    <input type="text" name="tags" placeholder="Tags" value={props.values.tags} onChange={props.handleChange("tags")} />
                    <label className="fieldlabels">Campaign Duration: *</label>
                    <input type="number" name="duration" placeholder="Campaign Duration" value={props.values.duration} onChange={props.handleChange("duration")} />
                    <label className="fieldlabels">Campaign Image: *</label>
                    <input type="file" name="cimage" placeholder="Campaign image" value={props.values.cimage} onChange={props.handleChange("cimage")} />
                </div>

            </fieldset>
        </div>


    )
};

export default BasicStep;