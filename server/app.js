const dotenv = require('dotenv');
const mongoose = require('mongoose');

const express = require('express');
const cors = require('cors');
const stripe = require("stripe")("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")
const { v4: uuidv4 } = require('uuid');
const app = express();
//const cookieparser = require("cookie-parser");



dotenv.config({ path: './config.env' });
require('./db/connection');

app.use(express.json());
app.use(cors)


app.use(require('./router/auth'))



const PORT = process.env.PORT;



app.post("/payment", (req, res) => {
    const { product, token } = req.body;
    console.log("PRODUCT ", product);
    console.log("PRICE ", product.price);
    const idempontencyKey = uuidv4();

    return stripe.customers
        .create({
            email: token.email,
            source: token.id
        })
        .then(customer => {
            stripe.charges.create(
                {
                    amount: product.price * 100,
                    currency: "usd",
                    customer: customer.id,
                    receipt_email: token.email,
                    description: `purchase of ${product.name}`,
                    shipping: {
                        name: token.card.name,
                        address: {
                            country: token.card.address_country
                        }
                    }
                },
                { idempontencyKey }
            );
        })
        .then(result => res.status(200).json(result))
        .catch(err => console.log(err));
});

// const middleware = (req, res, next) => {
//     console.log(`hello middleware`);
//     next();
// }



// app.get('/', (req, res) => {
//     res.send('Hello World')
// })


// app.get('/about', middleware, (req, res) => {
//     res.send('Hello World')
// })

// app.get('/contact', (req, res) => {
//     res.cookie("Test", 'tumpa');
//     res.send('Hello World from server');

// })

// app.get('/home', (req, res) => {
//     res.send('Hello World')
// })

// app.get('/signin', (req, res) => {
//     res.send('Hello World')
// })

// app.get('/signup', (req, res) => {
//     res.send('Hello World')
// })





app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);

})