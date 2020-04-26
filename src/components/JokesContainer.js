import React, {useEffect, useState} from 'react';
import JokeCard from './JokeCard.js'

const JokesContainer = (props) => {
    // const [allJokes, setAllJokes] = useState(null);

// useEffect(() => {
//     containerDisplay();
        //     console.log('length', Object.keys(props.jokes).length);
        // if (Object.keys(props.jokes).length > 0) {
        //     console.log('found em');
        //     return (
        //         props.jokes.map(j => {
        //                 return (
        //                 <JokeCard />
        //                 );
        //             })
        //     )
        // } else {
        //     console.log("Nope nothing yet");
        //     return (
        //         <div className="waiting...">
        //         </div>
        //     )
        // }
// })
    const containerDisplay = () => {
        // console.log(props)
        // console.log('length', Object.keys(props.jokes).length);
        // console.log(props.jokes);
        if (Object.keys(props.jokes).length > 1) {
            console.log(props.jokes)
        // if (Object.keys(props.jokes).length > 0) {
            return props.jokes.map(j => 
                        <JokeCard 
                        key={j.jokeid}
                        question={j.jokequestion}
                        answer={j.jokeanswer}
                        isprivate={j.isprivate}
                            />
                    )
            
        } else {
            console.log(props.jokes);
            return (
                <div className="waiting...">
                </div>
            )
        }
    }

    return (
        <div className="container">
            {containerDisplay()}
        </div>
    )
}

export default JokesContainer;