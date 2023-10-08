import React from 'react'

export default function Nav(props) {
  return (
    <nav className="navegacion">
        <img className="log" src={props.logoimg} alt="logo" />
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/'>Advertise</a></li>
          <li><a href='/'>Support</a></li>
          <li><a href='/'>Contact</a></li>
          <li><a href='/'>About us</a></li>
        </ul>
        <a href='/' className="register">Register Now</a>
      </nav>
  )
}
