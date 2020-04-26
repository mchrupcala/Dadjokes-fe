import React from 'react';


const JokeCard = (props) => {
    return (
        <div className="joke-card">
            <p>{props.question}</p>
            <p>{props.answer}</p>
        </div>
    )
}

export default JokeCard;