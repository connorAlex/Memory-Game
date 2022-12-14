import React, { useState, } from 'react'

const Card = (props) => {
  const {image, label, onClick, id} = props;
  return (
    <div className='card' onClick={onClick} id={id}>
        <img src={image} alt='' />
        <div>{label}</div>
    </div>
  )
}

export default Card;