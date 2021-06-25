import React, { useEffect, useState } from 'react';
import '../App.css';
import HeroSection from './HeroSection'
import CardView from './CardView'
import { useHistory } from 'react-router-dom';
//import { Route } from 'react-router';

const Home = () => {

    const history = useHistory();
    const [userData, setuserData] = useState([]);
    let data;

    const callHomePage = async () => {
        try {
            const res = await fetch('/allproject', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"

            });
            //console.log(res);

            data = await res.json();
            console.log(data.project);
            setuserData(data.project);
            if (res.status === 401) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);
            history.push('/login');
        }

    }

    useEffect(() => {
        callHomePage();

    }, []);









    return (
        <>
            <div className="mt-5">
                <HeroSection />
                <div>
                    <h2 style={{ "color": "#ff00ff" }}>Available Campaigns</h2>
                </div>
                <br />
                <div className="container">
                    <div className="row">
                        {
                            userData.map(item => {
                                return (
                                    <>
                                        <div className="col-sm">
                                            <CardView item={item} />
                                        </div>


                                    </>

                                )
                            })
                        }

                    </div>
                </div>

            </div>

        </>
    );
};

export default Home;

