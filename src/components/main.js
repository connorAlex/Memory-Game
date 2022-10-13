import React, {useState} from 'react'
import Card from './Card.js';

const Main = () => {
    const [cards, setCards] = useState([1]);

    return (
        <div className='Main'>
            {cards.map(item => {
                return <Card label="test"/>
            })}
        </div>
    )
}

export default Main;