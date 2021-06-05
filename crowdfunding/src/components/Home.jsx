import React from 'react';
import '../App.css';
import HeroSection from './HeroSection'
import Cards from './Cards'
//import { Route } from 'react-router';

const Home = () => {
    return (
        <>
        <HeroSection />
        <div>
            <span>Available projects</span>
        </div>
        <Cards />
        

        </>
    );
};

export default Home;

