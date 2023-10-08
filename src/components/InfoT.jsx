import React from 'react';
import "./styles/InfoT.css"

export default function InfoT(props) {
  return (
    <div className='square'>
        <h4>{props.info}</h4>
        <p className='data'>{props.data}</p>
      
        <ul className='list'>
          <li>{props.lista}</li>
          <li>{props.lista2}</li>
          <li>{props.lista3}</li>
        </ul>
        <a href={props.direccion}>Learn more</a>
      </div>
  );
}
