import React, { useState, } from 'react'

const Card = (props) => {
  const {image, label} = props;

  return (
    <div className='card'>
      <div>
        Image
        <img src={image} alt=''></img>
      </div>
      <div>{label}</div>
    </div>
  )
}

export default Card;