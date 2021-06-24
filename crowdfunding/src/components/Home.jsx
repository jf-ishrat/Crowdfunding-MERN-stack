import React from 'react';
import '../App.css';
import HeroSection from './HeroSection'
import CardView from './CardView'
//import { Route } from 'react-router';

const Home = () => {
    return (
        <>
            <HeroSection />
            <div>
                <h2 style={{ "color" : "#ff00ff" }}>Available Campaigns</h2>
            </div>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <CardView />
                    </div>
                    <div className="col-sm">
                        <CardView />
                    </div>
                    <div className="col-sm">
                        <CardView />
                    </div>
                </div>
            </div>


        </>
    );
};

export default Home;

