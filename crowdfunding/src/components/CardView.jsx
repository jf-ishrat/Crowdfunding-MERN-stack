import React from 'react';
import './StartACampaign.css';

const CardView = (props) => {
    return (
        <div className="card" style={{ "width": "22rem" }}>
            <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." height="200px" />
            <div className="card-body" id="card-text">
                <div>
                    <h5 className="card-title">{props.ctitle}</h5>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="category">
                    <span>Education</span>

                </div>

                <div className="progress" id="progressbar">
                    <div className="progress-bar bg-success" role="progressbar" style={{ "width": "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                </div>

                <a href="" className="btn card-button">View Detail</a>
            </div>
        </div>
    );
}

export default CardView;

