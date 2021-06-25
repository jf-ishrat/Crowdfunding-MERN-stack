import React from 'react';
import './StartACampaign.css';
import { NavLink, useHistory } from 'react-router-dom';
import CampaignDetails from './CampaignDetails';
const CardView = (props) => {

    const handleDetails=(e)=>{
          <CampaignDetails />

    }
    return (
        <div className="card" style={{ "width": "22rem" }}>
            <img src={props.item.url} className="card-img-top" alt="..." height="200px" />
            <div className="card-body" id="card-text">
                <div>
                    <h5 className="card-title">{props.item.ctitle}</h5>
                    <p>{props.item.ctagline}</p>
                </div>
                <div className="category">
                    <span>{props.item.category}</span>

                </div>

                <div className="progress" id="progressbar">
                    <div className="progress-bar bg-success" role="progressbar" style={{ "width": "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                </div>
                <NavLink to="/camp-details" type="button" className="btn card-button" onClick={handleDetails()}> View Details</NavLink>
                
            </div>
        </div>
    );
}

export default CardView;

