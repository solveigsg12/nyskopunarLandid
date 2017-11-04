import React, { Component } from 'react';
import './FrontPage.css';
import AboutUs from './AboutUs'

class FrontPage extends Component {
  render() {
    return (
      <div className="FrontPage">
        hallo front page
        <AboutUs/>
      </div>
    );
  }
}

export default FrontPage;
