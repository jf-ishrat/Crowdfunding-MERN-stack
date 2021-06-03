const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
require('../db/connection')
const User = require("../model/userSchema")
const authenticate = require("../middleware/authenticate");
const cookieparser = require('cookie-parser');



router.get('/', (req, res) => {
    res.send('Hello World from router')
});






// router.post('/register', (req, res) => {

//     const { name, email, phone, password, cpassword } = req.body;
//     if (!name || !email || !phone || !password || !cpassword) {
//         return res.status(422).json({ error: "plz fill the form correctly" });
//     }
//     User.findOne({ email: email }).then((userExist) => {
//         if (userExist) {
//             return res.status(422).json({ error: "Email already exist" });
//         }
//         const user = new User({ name, email, phone, password, cpassword });
//         user.save().then(() => {

//             res.status(201).json({ message: "Resisterd successfuly" })
//         }).catch((err) => { res.status(500).json({ error: "failed to registered" }) });

//     }).catch((err) => { console.log(err) });
//     //res.send('Hello World from router')
// });


router.post('/register', async (req, res) => {

    const { name, email, phone, password, cpassword } = req.body;
    if (!name || !email || !phone || !password || !cpassword) {
        return res.status(422).json({ error: "plz fill the form correctly" });
    }

    try {

        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email already exist" });
        }

        const user = new User({ name, email, phone, password, cpassword });
        //const userRegister =
        await user.save();
        // if (userRegister) {

        //     res.status(201).json({ message: "Resisterd successfuly" })
        // }
        // else {
        //     res.status(500).json({ error: " failed to register" });
        // }

        res.status(201).json({ message: "Resisterd successfuly" });



    } catch (err) {
        console.log(err);

    }

    //res.send('Hello World from router')
});


router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "please fill the data" });

        }
        const userLogin = await User.findOne({ email: email });
        console.log(userLogin);
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);
            const token = await userLogin.generateAuthToken();
            console.log(token);
            res.cookie("webcookie", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });
            if (isMatch) {
                res.json({ message: "user signin succesfully" });

            }
            else {
                res.status(400).json({ error: "user error pass" });

            }

        } else {
            res.status(400).json({ error: "user error" });

        }


    } catch (err) {
        console.log(err);
    }
});

router.use(cookieparser());

router.get('/what-we-do', authenticate, (req, res) => {
    //console.log("hello my about ");
    res.send(req.rootUser);
    //     res.send('Hello World') router.use(cookieparser);
});

router.get('/logout', (req, res) => {

    res.clearCookie('webcookie', { path: '/' });
    res.status(200).send('user logout');

});

module.exports = router;
