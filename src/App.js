import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import FrontPage from './components/FrontPage.js';
import AboutUs from './components/AboutUs.js';
import FrontPageCover from './images/FrontPageCover.svg'

const App = (props) => (
  <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={FrontPage}/>
      <Route path="/about" component={AboutUs} />
      <img src={FrontPageCover} className="coverPhoto"/>
    </div>
  </BrowserRouter>
);

export default App;
