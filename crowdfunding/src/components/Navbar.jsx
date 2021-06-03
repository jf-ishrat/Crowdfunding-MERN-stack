import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div clasName="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">

                        <nav className="navbar navbar-expand-lg navbar-light  " id="ftco-navbar">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">
                                Crowdfunding
                    
                                </NavLink>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="oi oi-menu"></span> Menu
                               </button>

                                <div className="collapse navbar-collapse" id="ftco-nav">
                                    <form className="d-flex">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

                                    </form>
                                    <ul className="navbar-nav ml-auto">

                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                                Explore
</a>

                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><a className="dropdown-item" href="/explore">Tech & Innovation</a></li>
                                                <li><a className="dropdown-item" href="/explore">Creative Work</a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><a className="dropdown-item" href="/explore">Community Project</a></li>
                                            </ul>
                                        </li>




                                        <li className="nav-item "><NavLink aria-current="page" to="/" className="nav-link active"></NavLink></li>
                                        <li className="nav-item"><NavLink to="/what-we-do" className="nav-link">What We Do</NavLink></li>
                                        <li className="nav-item"><NavLink to="/start-a-campaign" className="nav-link">Start a Campaign</NavLink></li>


                                        <li className="nav-item"><NavLink to="/login" className="nav-link">Login</NavLink></li>
                                        <li className="nav-item"><NavLink to="/signup" className="nav-link">Sign Up</NavLink></li>
                                        <li className="nav-item"><NavLink to="/logout" className="nav-link">Logout</NavLink></li>


                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>



        </>
    );
};


export default Navbar;
