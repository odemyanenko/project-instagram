import React from 'react';
import './fontawesome';

import Header from "../src/components/header";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Sidebar from "../src/components/sidebar";

import HomePage from "../src/components/pages/homePage";
import PersonalPage from "../src/components/pages/personalPage";
import classes from "./App.module.scss"

function App() {
    return (
        <Router>
            <div className={classes["app-wrapper"]}>
                <Header/>
                <Sidebar/>
                <div>
                    <Route path="/home" component={HomePage}/>
                    <Route path="/personal" component={PersonalPage}/>
                </div>
            </div>
        </Router>
    );
}

export default App;
