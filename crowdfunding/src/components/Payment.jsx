import React, { useEffect, useState } from 'react';
//import { Route } from 'react-router';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import './CampaignDetails.css';
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
            <StripeCheckout
                stripeKey="pk_live_51J6aoDKc0TZv9NwK4nOMUJh3FeDxqb6DytxLbm9bhXcs4ERDjyjkXWvcrMMzJxkl4U8S5TIAuXNhtsSfrJ6UWYEB00aqcTi8hp"
                token={makePayment}
                name="Buy React"
                amount={product.price * 100}
                shippingAddress
                billingAddress
            >
                <button className="btn-large blue">
                    Buy react is just {product.price} $
                </button>
            </StripeCheckout>

        </>
    );
};

export default Payment;