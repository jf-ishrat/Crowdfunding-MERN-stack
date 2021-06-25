import React, { useEffect, useState } from 'react';
//import { Route } from 'react-router';
import { NavLink, useHistory, useParams } from 'react-router-dom';

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
                <div className="container" style={{ marginTop: "58px" }}>
                    <div className="row">
                        <div className="card mb-3" style={{ maxWidth: "1000px" }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={projectProfile.project.url} className="img-fluid" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{projectProfile.project.title}</h5>
                                        <h5 className="card-title">{projectProfile.user.name}</h5>

                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small>Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                : <h6>Lodding...</h6>}



        </>

    );
}

export default CampaignDetails;
