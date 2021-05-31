import React, { useState } from 'react';
//import { Route } from 'react-router';
import { NavLink, useHistory } from 'react-router-dom';

const SignUp = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [allEntry, setAllEntry] = useState([]);

    // const SubmitForm = (e) => {
    //     e.preventDefault();

    //     const newEntry = { email, password };
    //     setAllEntry([...allEntry, newEntry]);
    //     console.log(allEntry);
    //     setEmail("");
    //     setPassword("");


    const history = useHistory();

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        cpassword: ""
    });
    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    const PostData = async (e) => {
        e.preventDefault();
        const { name, email, phone, password, cpassword } = user;
        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, password, cpassword

            })


        });
        const data = await res.json();
        if (data.status === 401 || !data) {
            window.alert("Registeration successful");
            console.log("Registeration successful");
            history.push("/login");

        } else {
            window.alert("Invalid Registeration");
            console.log("Invalid Registeration");

        }

    }




    return (
        <>
            <div >
                <div class="signup-form">

                    <h2>Sign Up</h2>
                    <p>Please fill in this form to create an account!</p>
                    <hr />
                    <form method="post" >
                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <span class="fa fa-user"></span>
                                    </span>
                                </div>
                                <input type="text" class="form-control" name="name" value={user.name} onChange={handleInputs} placeholder="Username" required="required" />
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="fa fa-paper-plane"></i>
                                    </span>
                                </div>
                                <input type="email" class="form-control" name="email" value={user.email} onChange={handleInputs} placeholder="Email Address" required="required" />
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="fa fa-phone"></i>
                                    </span>
                                </div>
                                <input type="number" class="form-control" name="phone" value={user.phone} onChange={handleInputs} placeholder="Phone Number" required="required" />
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="fa fa-lock"></i>
                                    </span>
                                </div>
                                <input type="text" class="form-control" name="password" value={user.password} onChange={handleInputs} placeholder="Password" required="required" />
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="fa fa-lock"></i>
                                        <i class="fa fa-check"></i>
                                    </span>
                                </div>
                                <input type="text" class="form-control" name="cpassword" value={user.cpassword} onChange={handleInputs} placeholder="Confirm Password" required="required" />
                            </div>
                        </div>

                        <div class="form-group form-button">
                            <input type="submit" name="signup" className="form-submit btn btn-primary btn-lg" value="register"
                                onClick={PostData}
                            />


                        </div>


                        <div class="text-center">Already have an account? <NavLink to="/login">Login here</NavLink></div>

                    </form>

                </div>

            </div>

        </>


    );
};

export default SignUp;