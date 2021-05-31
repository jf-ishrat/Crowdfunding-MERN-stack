import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Home from './Home'
import Login from './Login'
import SignUp from './SignUp'
import Explore from './Explore'
import StartACampaign from './StartACampaign'
import Navbar from './Navbar'
//import Navigation from './Navigation'
import WhatWeDo from './WhatWeDo'
import '../App.css'



import { Redirect, Route, Switch } from 'react-router';

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/explore" component={Explore} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/what-we-do" component={WhatWeDo} />

                <Route exact path="/start-a-campaign" component={StartACampaign} />
                <Redirect to="/" />
            </Switch>
        </>

    );
};


export default App;
