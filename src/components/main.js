import React, {useState, useEffect} from 'react'
import Card from './Card.js';
import Score from './Score.js';
import { cardArray } from '../cardInfo.js';
import uniqid from 'uniqid';


const Main = () => {
    const [cards, setCards] = useState(cardArray);
    const [history, setHistory] = useState([]);
    

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
    
    const handleClick = (e) => {
        e.preventDefault();
        const shuffledCards = shuffle([...cards]);
        setCards(shuffledCards);
        console.log(e.target);
       
    }
    
    
    return (
        <div className='Main'>
            <Score onClick={() => {
                console.log("this is a test");
            }}/>
            {cards.map(item => {
                return <Card onClick={handleClick} image={item.src} id={item.id} key={uniqid()} label={item.label}/>
            })
            }
           
        </div>
    )
}

export default Main;