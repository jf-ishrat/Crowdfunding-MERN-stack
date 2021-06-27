const express = require('express');

const stripe = require("stripe")("sk_test_51J6aoDKc0TZv9NwK4iBPEs9bMK2eknweXnjrlMSYGcx74nNBeGWfTZExeXvLVJAEdKzMdOfrkBf4iZimMj2lA98B00XI6BwpT1");
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

router.get('/',(req, res, next)=>{
    console.log("GET Response from backend");
    res.json({
       message: 'It works' 
    });
});

router.post("/pay", (req,res,next)=>{
    console.log(req.body.token);
    const {token, amount} = req.body;
    const idempotencyKey = uuidv4();

    return stripe.customers.create({
        email:token.email,
        source: token
    }).then(customer =>{
        stripe.charges.create({
            amount: amount*100,
            currency: 'usd',
            customer: customer.id,
            receipt_email:token.email
        }, {idempotencyKey})
    }).then(result=>{
        res.status(200).json(result)
    }).catch(err=>{
        console.log(err);
    });
});

module.exports = router;