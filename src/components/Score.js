import React from 'react'

const Score = (props) => {
    const {score, highscore} = props;


    return (
        <div className='score'>
            <div>Score:<div>{score}</div></div>
            <div>HighScore:<div>{highscore}</div></div>
        </div>
    )
    }

export default Score;