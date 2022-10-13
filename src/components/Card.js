import React, { useState, } from 'react'

const Card = (props) => {
  const {image, label, onClick} = props;
  return (
    <div onClick={onClick}>
      <div>
        <img src={image} alt='' />
        <div>{label}</div>
      </div>
      
    </div>
  )
}

export default Card;