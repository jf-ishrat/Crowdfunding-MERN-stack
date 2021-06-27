import React, { useEffect, useState } from 'react';
//import { Route } from 'react-router';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import './CampaignDetails.css';
import './payment.css'
import './Discussion.css';
import StripeCheckout from "react-stripe-checkout";


const Payment = () => {

    const [product, setProduct] = useState({
        name: "React from FB",
        price: 10,
        productBy: "facebook"
    });

    const makePayment = token => {
        const body = {
            token,
            product
        };
        const headers = {
            "Content-Type": "application/json"
        };

        return fetch(`/payment`, {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        })
            .then(response => {
                console.log("RESPONSE ", response);
                const { status } = response;
                console.log("STATUS ", status);
            })
            .catch(error => console.log(error));
    };


    return (
        <>
            <div className="container" style={{ height: "100vh" }}>
                <div className="row justify-content-center">
                    <div className="top-div" id="part">
                        <div className="left-div" style={{ marginTop: "80px", float:"left"}}>
                            <span>YOU ARE CONTRIBUTING TO</span>
                            <h3>camp title</h3>

                            <div>
                                <img style={{ width: "80px", height: "80px", borderRadius: "40px", marginRight: "15px" }}
                                    src="https://picsum.photos/100"
                                />
                            </div>
                            <div>
                                <span id="user-name">backer name</span>
                                <p>backer location</p>


                            </div>

                        </div>

                        <div className="top-div">
                            <div>
                                <input type="number" name="bamount" placeholder="Amount" />
                            </div>
                            <StripeCheckout
                                stripeKey="pk_test_51J6aoDKc0TZv9NwKZZSNcS3gVZ1MwVfm6VKsOo5OCxup4GQjNHXwlZAAK4GQr7QFmtiX8spQdkuqOzeTo5USbSM400IWNwUBtU"
                                token={makePayment}
                                name="Buy React"
                                amount={product.price * 100}
                            /* shippingAddress
                            billingAddress */
                            >
                                <button className="btn-large blue">
                                    Buy react is just {product.price} $
                                </button>
                            </StripeCheckout>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Payment;