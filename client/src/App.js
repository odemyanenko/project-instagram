import React from 'react';
import {Route} from "react-router-dom";

import Header from "../src/components/header";
import Sidebar from "../src/components/sidebar";
import HomePage from "../src/components/pages/homePage";
import PersonalPage from "../src/components/pages/personalPage";

import './fontawesome';
import classes from "./App.module.scss"

function App() {
    return (
        <div className={classes.appWrapper}>
            <Header/>
            <Sidebar/>
            <div className={classes.content}>
                <Route path="/home" component={HomePage}/>
                <Route path="/personal" component={PersonalPage}/>
            </div>
        </div>

    );
}

export default App;
