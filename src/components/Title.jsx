import React from 'react'
import "./styles/title.css"
export default function Title(props) {

const { op , op2 } = props

  return (
    <div className='title-info'>
          <p className='min'>{op}</p>
          <p className='neg'><strong>{op2}</strong></p>
    </div>
  )
}
