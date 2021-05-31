const dotenv = require('dotenv');
const mongoose = require('mongoose');

const express = require('express');
const app = express();
const cookieparser = require("cookie-parser");



dotenv.config({ path: './config.env' });
require('./db/connection');

app.use(express.json());

app.use(require('./router/auth'))
app.use(cookieparser());


const PORT = process.env.PORT;





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