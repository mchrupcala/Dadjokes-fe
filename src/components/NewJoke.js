import React, {useState} from 'react';
import axios from 'axios';

const NewJoke = () => {
    const [jokeQuestion, setJokeQuestion] = useState('');
    const [jokeAnswer, setJokeAnswer] = useState('');


const sendJoke = (e) => {
    e.preventDefault();
    axios.post('http://dadjokes-test.herokuapp.com/jokes', {
        "jokequestion": jokeQuestion,
        "jokeanswer": jokeAnswer,
        "isprivate": false
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })

}

// const jokeHandler = (e) => {
//     e.target.name = e.target.value;
// }


    return (
        <div>
            <form onSubmit={sendJoke}>
                <input type="text" placeholder="'Knock knock?'"  onChange={e => {
                    console.log(e.target.value);
                    setJokeQuestion(e.target.value);
                }}/>
                <input type="text" placeholder="Who's there?" onChange={e => {
                    console.log(e.target.value);
                    setJokeAnswer(e.target.value);
                }}/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default NewJoke;