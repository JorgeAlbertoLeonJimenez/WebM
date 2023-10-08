import React from 'react'
import "./styles/title.css"
export default function Title(props) {
  return (
    <div className='title-info'>
          <p className='min'>{props.op}</p>
          <p className='neg'><strong>{props.op2}</strong></p>
    </div>
  )
}
