import React from 'react'

const Score = (props) => {
    const {score, highscore} = props;


    return (
        <div className='Main'>
            <div>Score:{score}</div>
            <div>HighScore:{score}</div>
        </div>
    )
    }

export default Score;