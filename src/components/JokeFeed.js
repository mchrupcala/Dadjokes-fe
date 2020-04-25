import React from 'react';
import NewJoke from './NewJoke';

const JokeFeed = () => {

//GET JOKES
    // http://dadjokes-test.herokuapp.com/jokes


    return(
        <div className="feed">
        Hello from Jokesfeed
        <NewJoke />
        </div>
    )
}

export default JokeFeed;