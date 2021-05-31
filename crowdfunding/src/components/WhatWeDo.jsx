import React, { useEffect } from 'react';
//import { Route } from 'react-router';
import { useHistory } from 'react-router-dom';
import tumpa from '../images/tumpa.jpeg';



const WhatWeDo = () => {
    const history = useHistory();

    const callWhatWeDoPage = async () => {
        try {
            const res = await fetch('/what-we-do', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "cpplication/json"
                },
                credentials: "include"

            });
            const data = await res.json();
            console.log(data);
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
        callWhatWeDoPage();

    }, []);

    return (
        <>
            <div className="container">
                <form method="POST">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={tumpa} alt="tumpa" />

                        </div>

                        <div className="col-md-4">
                            <div>
                                <h5>Tumpa</h5>
                            </div>

                        </div>

                    </div>

                </form>
            </div>
        </>
    );
};

export default WhatWeDo;