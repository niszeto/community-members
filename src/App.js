import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/App.css';

// List of members
const MONTE_AVATAR = 'https://avatars2.githubusercontent.com/u/7840686?s=400&v=4'
const GIRISH_AVATAR = 'https://avatars2.githubusercontent.com/u/6697235?s=460&v=4'

export default class App extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="title"><a href="http://mobilespace.xyz/" className="link">MobileSpace</a> Community Members</div>
        <div className="landing-page-avatar-container">
          <Link to="/monte">
            <img className="landing-page-avatar" src={MONTE_AVATAR} />
          </Link>
          <Link to="/girish">
            <img className="landing-page-avatar" src={GIRISH_AVATAR} />
          </Link>
        </div>
      </div>
    );
  }
}