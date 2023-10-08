import React from 'react'
import "./styles/card.css"

export default function cards(props) {
  return (
    <div className='tarjet'>
        <img className='icon' src={props.imagen} alt='icono'/>
        <p className="titlecard">{props.titlecard}</p>
        <p className='infocard'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis quid</p>

    </div>
  )
}
