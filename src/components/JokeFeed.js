import React, {useEffect, useState} from 'react';
import axios from 'axios';
import NewJoke from './NewJoke';
import JokesContainer from './JokesContainer';

const JokeFeed = () => {
    const [jokesObj, setJokesObj] = useState([]);

//GET JOKES
useEffect(() => {
    axios.get('http://dadjokes-test.herokuapp.com/jokes')
        .then(res => {
            //Think I HAVE to change state here after the API call's finished...THAT will re-render this component, also the children, and then all the jokes will show up.
            setJokesObj(res.data);
        })
        .catch(err => {
            console.log(err);
        })
}, [])



    return(
        <div className="feed">
            <NewJoke />
            <JokesContainer 
            jokes={jokesObj}
            />
        </div>
    )
}

export default JokeFeed;