import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Item from '../src/components/item'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import Header from "../src/components/header";
library.add(fab, fas, far);


function App() {
  return (
    <div className="App">
        <Header/>

      <Item />


    </div>
  );
}

export default App;
