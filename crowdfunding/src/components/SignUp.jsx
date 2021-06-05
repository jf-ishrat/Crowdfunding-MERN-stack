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
        try {

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

            if (res.status === 422 || !data) {
                window.alert(data.error);
                console.log("Invalid Registeration");



            } else {

                window.alert("Registeration successful");
                console.log("Registeration successful");
                history.push("/login");


            }

        } catch (err) {
            console.log(err);
        }


    }




    return (
        <>
            <div >
                <div className="signup-form">

                    <h2>Sign Up</h2>
                    <p>Please fill in this form to create an account!</p>
                    <hr />
                    <form method="post" >
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <span className="fa fa-user"></span>
                                    </span>
                                </div>
                                <input type="text" className="form-control" name="name" value={user.name} onChange={handleInputs} placeholder="Username" required="required" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="fa fa-paper-plane"></i>
                                    </span>
                                </div>
                                <input type="email" className="form-control" name="email" value={user.email} onChange={handleInputs} placeholder="Email Address" required="required" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="fa fa-phone"></i>
                                    </span>
                                </div>
                                <input type="number" className="form-control" name="phone" value={user.phone} onChange={handleInputs} placeholder="Phone Number" required="required" />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="fa fa-lock"></i>
                                    </span>
                                </div>
                                <input type="text" className="form-control" name="password" value={user.password} onChange={handleInputs} placeholder="Password" required="required" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="fa fa-lock"></i>
                                        <i className="fa fa-check"></i>
                                    </span>
                                </div>
                                <input type="text" className="form-control" name="cpassword" value={user.cpassword} onChange={handleInputs} placeholder="Confirm Password" required="required" />
                            </div>
                        </div>

                        <div className="form-group form-button">
                            <input type="submit" name="signup" className="form-submit btn btn-primary btn-lg" value="register"
                                onClick={PostData}
                            />


                        </div>


                        <div className="text-center">Already have an account? <NavLink to="/login">Login here</NavLink></div>

                    </form>

                </div>

            </div>

        </>


    );
};

export default SignUp;