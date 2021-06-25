import React, { useEffect, useState } from 'react';
//import { Route } from 'react-router';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import './CampaignDetails.css';
import './Discussion.css';

const CampaignDetails = () => {
    const [projectProfile, setProjectProfile] = useState(null);
    const { id } = useParams();

    const history = useHistory();




    const callcampaigndetails = async () => {

        // fetch(`/projectdetails/${id}`, {
        //     method: "GET",
        //     headers: {
        //         Accept: "application/json",
        //         "Content-Type": "application/json"
        //     },
        //     credentials: "include"

        // }).then(res => res.json())
        //     .then(result => {
        //         //console.log(result)

        //         setUser(result.projectde)
        //         console.log(user1)
        //         console.log(result.projectde)

        //     })



        //try {
        fetch(`/projectdetails/${id}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }
        ).then(res => res.json())
            .then(result => {
                console.log(result)


                setProjectProfile(result)
                console.log(projectProfile)
            })
    }

    //     });
    //     //console.log(res);

    //     const data = await res.json();

    //     setUser(data);
    //     console.log(data);
    //     //console.log(user1);
    //     if (res.status !== 201) {
    //         const error = new Error(res.error);
    //         throw error;
    //     }

    // } catch (err) {
    //     console.log(err);
    // }

    //}

    useEffect(() => {
        callcampaigndetails();

    }, []);


    return (

        <>
            {projectProfile ?
                <div className="container">
                    <div className="row justify-content-center">
                        <div id="row" className="about-section" style={{ borderBottom: "2px solid grey", marginBottom: "20px" }}>
                            <div className="about-img">
                                <div className="img-box inner-shadow">
                                    <img src={projectProfile.project.url} className="outer-shadow" alt="profile-pic" />
                                </div>
                            </div>
                            <div className="about-info">
                                <span style={{ color: "#ff00ff", fontSize:"20px"}}>{projectProfile.project.category}</span>
                                <h3 id="title">{projectProfile.project.ctitle}</h3>
                                <p id="tagline-text">{projectProfile.project.ctagline}</p>
                                <div style={{ maxWidth: "400px", margin: "0px 0px" }}>
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "space-in-between",
                                        margin: "10px 5px",

                                    }}>
                                        <div>
                                            <img style={{ width: "60px", height: "60px", borderRadius: "30px", marginRight: "10px" }}
                                                src="https://picsum.photos/100"
                                            />
                                        </div>
                                        <div>
                                            <span id="user-name">{projectProfile.user.name}</span>
                                            <p>{projectProfile.project.location}</p>


                                        </div>
                                        
                                    </div>
                                </div>

                                <span>koto uthche</span>
                                <div className="progress" id="progressbar">

                                    <div className="progress-bar bg-success" role="progressbar" style={{ "width": "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                </div>
                                <div>
                                    <span>${projectProfile.project.amount} (Goal)</span>

                                    <span style={{ marginLeft: "320px" }}>{projectProfile.project.duration} days left</span>
                                </div>

                                <button className="action-button">Back it</button>

                            </div>
                        </div>

                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Story</button>
                                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">FAQ</button>
                                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Discussion</button>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <p style={{ "height": "500px", fontSize:"25px" }}> {projectProfile.project.story} </p>
                            </div>
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <div className="accordion" id="accordionPanelsStayOpenExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                {projectProfile.project.faqList[0].question}
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                            <div className="accordion-body">
                                                <strong> {projectProfile.project.faqList[0].answer}</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                                Accordion Item #2
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                            <div className="accordion-body">
                                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                                Accordion Item #3
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                            <div className="accordion-body">
                                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                <div className="container mt-5">
                                    <div className="d-flex justify-content-center row">
                                        <div className="col-md-8">
                                            <div className="d-flex flex-column comment-section">
                                                <div className="bg-white p-2">
                                                    <div className="d-flex flex-row user-info"><img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" />
                                                        <div className="d-flex flex-column justify-content-start ml-2"><span className="d-block font-weight-bold name">Marry Andrews</span><span className="date text-black-50">Shared publicly - Jan 2020</span></div>
                                                    </div>
                                                    <div className="mt-2">
                                                        <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                    </div>
                                                </div>
                                                <div className="bg-white">
                                                    <div className="d-flex flex-row fs-12">
                                                        <div className="like p-2 cursor"><i className="fa fa-thumbs-o-up"></i><span className="ml-1">Like</span></div>
                                                        <div className="like p-2 cursor"><i className="fa fa-commenting-o"></i><span className="ml-1">Comment</span></div>
                                                        <div className="like p-2 cursor"><i className="fa fa-share"></i><span className="ml-1">Share</span></div>
                                                    </div>
                                                </div>
                                                <div className="bg-light p-2">
                                                    <div className="d-flex flex-row align-items-start"><img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" /><textarea className="form-control ml-1 shadow-none textarea"></textarea></div>
                                                    <div className="mt-2 text-right"><button className="btn btn-primary btn-sm shadow-none" type="button">Post comment</button><button className="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button">Cancel</button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div ></div>

                    </div>

                </div>

                : <h6>Lodding...</h6>}



        </>

    );
}

export default CampaignDetails;
