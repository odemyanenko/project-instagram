import React from 'react';
//import logo from './logo.svg';
import './App.css';


import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas,faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import Header from "../src/components/header";

import HomePage from "../src/components/pages/homePage";
import PersonalPage from "./components/pages/personalPage/personalPage";
library.add(fab, fas, far, faInfoCircle);


function App() {
    return (
        <div className="App">
            <Header/>

            <HomePage/>
            <PersonalPage/>

        </div>
    );
}

export default App;
