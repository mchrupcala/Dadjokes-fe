import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import Jokefeed from './components/JokeFeed.js';
import UserProfile from './components/UserProfile.js';
import RightSidebar from './components/RightSidebar.js';

function App() {
  return (
    <div className="App">
      <UserProfile />
      <Jokefeed />
      <RightSidebar />
    </div>
  );
}


  const mapStateToProps = state => {
  return {
    title: 'a title'
  }
}

//with 'connect', App is now connected to the Redux store thanks to react-redux
export default connect(mapStateToProps, {})(App);