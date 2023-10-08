import React from 'react'
import "./styles/tutorialCards.css"
export default function Tutorialcards(props) {
  return (
    <a href={props.direccion} className='container-card-tutorial'>
        <img src={props.img_tutorial} alt='img-tutorial'/>
        <h4>{props.title}</h4>
    </a>
  )
}
