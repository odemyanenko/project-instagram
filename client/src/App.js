import React from 'react';
//import logo from './logo.svg';
import './App.css';


import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import Header from "../src/components/header";
import {BrowserRouter as Router, Route} from "react-router-dom";

import HomePage from "../src/components/pages/homePage";
import PersonalPage from "../src/components/pages/personalPage";

library.add(fab, fas, far, faInfoCircle);


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
