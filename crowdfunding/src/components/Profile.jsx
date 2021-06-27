import React, { useEffect, useState } from 'react';

//import { Route } from 'react-router';
import { NavLink, useHistory, useParams } from 'react-router-dom';

import './Profile.css'


const Profile = () => {



    return (
        <>

            <div className="Container">
                <div className="row justify-content-center">
                    <div className="col-13 col-sm-11 col-md-7 col-lg-7 col-xl-7 text-center p-0 mt-3 mb-2">
                        <div className="card vh-100 px-0 pt-4 pb-0 mt-3 mb-3">
                            <div>
                                <img style={{ width: "160px", height: "160px", borderRadius: "80px",marginTop:"40px" }}
                                    src="https://picsum.photos/100" />
                            </div>
                            <div className="label-text">
                                <label>
                                    Name : 
                                </label>
                                <br/>
                                <label>
                                    Email : 
                                </label>
                                <br/>
                                <label>
                                    Mobile number : 
                                </label>
                            </div>




                        </div>
                    </div>
                </div>

            </div>



        </>
    );

}

export default Profile;