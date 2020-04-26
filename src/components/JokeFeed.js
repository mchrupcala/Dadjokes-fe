import React, {useEffect, useState} from 'react';
import axios from 'axios';
import NewJoke from './NewJoke';
import JokesContainer from './JokesContainer';

const JokeFeed = () => {
    const [jokesObj, setJokesObj] = useState([]);
    // const jokesObj = {};


//GET JOKES

useEffect(() => {
    axios.get('http://dadjokes-test.herokuapp.com/jokes')
        .then(res => {
            console.log(res.data);
            setJokesObj(res.data);
            // res.data.forEach(joke => {
            //     jokesObj[joke.jokeid] = {
            //         question: joke.jokequestion,
            //         answer: joke.jokeanswer,
            //         isprivate: joke.isprivate
            //     }

            // })
            //Think I HAVE to change state here after the API call's finished...THAT will re-render this component, also the children, and then all the jokes will show up.
                // res.data.forEach(joke => {
                //     console.log('check it: ', joke);
                //     setJokesObj(
                //         ...jokesObj, 
                //         [joke.jokeid]: {
                //                 question: joke.jokequestion,
                //                 answer: joke.jokeanswer,
                //                 isprivate: joke.isprivate
                //             }
                //     )
                // })
            console.log(jokesObj)
            
            
        })
        .catch(err => {
            console.log(err);
        })
}, [])



    return(
        <div className="feed">
        Hello from Jokesfeed
        
        <NewJoke />
        <JokesContainer 
        jokes={jokesObj}
        //pass jokesObj as prop. When it's filled, Container re-renders. When it re-renders, call a forEach and render every joke as its own card.
        />
        </div>
    )
}

export default JokeFeed;