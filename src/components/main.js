import React, {useState, useEffect} from 'react'
import Card from './Card.js';
import Score from './Score.js';
import { cardArray } from '../cardInfo.js';
import uniqid from 'uniqid';


const Main = () => {
    const [cards, setCards] = useState(cardArray);
    const [history, setHistory] = useState([]);
    const [score, setScore] = useState(-1);
    const [highscore, setHighscore] = useState(0);
    
    useEffect(() => {
        setScore(score +1);
    }, [history]);

    // this is the Fisher-Yates Shuffle Algorithm.
    const shuffle = (arr) => {
        
        let currentIndex = arr.length, randomIndex;

        while (currentIndex > 0) {
            // pick any remaining element
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex --;

            //swap it with the current element
            [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
        };
        return arr;
    };

    const resetGame = () => {
        setHistory([]);
        setCards(shuffle([...cards]));
        setScore(-1);
        
    };

    const handleClick = (e) => {
        e.preventDefault();
        const id = e.currentTarget.id;
        const shuffledCards = shuffle([...cards]);

        if (checkHistory(id)) {
            setCards(shuffledCards);
            setHistory(history.concat([id]));
        } else {
            
            if (highscore < score) {
                setHighscore(score);
            };
            resetGame();
            
            console.log(history);
            console.log(score);
        }
        
        
    };

    const checkHistory = (id) => {
        if (history.indexOf(id) !== -1){
            return false;
        }
        return true;
    } ;
    
    return (
        <div className='main'>
            <Score score={score} highscore={highscore}/>
            <div className='cardHolder'>
                {cards.map(item => {
                    return <Card onClick={handleClick} image={item.src} id={item.id} key={uniqid()} label={item.label}/>
                })
                }
            </div>
            
            
           
        </div>
    )
}

export default Main;