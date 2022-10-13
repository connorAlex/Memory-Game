import React, { useState, } from 'react'

const Card = (props) => {
  const {image, label} = props;
  return (
    <div className='card'>
      <div>
        <img src={image} alt='' />
        <div>{label}</div>
      </div>
      
    </div>
  )
}

export default Card;