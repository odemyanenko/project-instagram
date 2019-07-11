import React from 'react';
import './fontawesome';
import './App.css';

import Header from "../src/components/header";
import {BrowserRouter as Router, Route} from "react-router-dom";

import HomePage from "../src/components/pages/homePage";
import PersonalPage from "../src/components/pages/personalPage";

function App() {
    return (
        <div>
            <Router>
                <Header/>
                {/* <HomePage/>
            <PersonalPage/>*/}
                <Route path="/home" component={HomePage}/>
                <Route path="/personal" component={PersonalPage}/>

            </Router>
        </div>
    );
}

export default App;
