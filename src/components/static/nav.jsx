import React from 'react'
import './nav.css'

export default function Nav(props) {
  console.log(props)
  return (
    <div className='nav'>
        <p>X-pens</p>  
        {props.children}      
    </div>
  )
}
