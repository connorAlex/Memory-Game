import React, {useState} from 'react'
import Card from './Card.js';
import { cardArray } from '../cardInfo.js';
import uniqid from 'uniqid';


const Main = () => {
    const [cards, setCards] = useState(cardArray);

    return (
        <div className='Main'>
            {cards.map(item => {
                return <Card image={item.src} key={uniqid()} label={item.label}/>
            })}
           
        </div>
    )
}

export default Main;