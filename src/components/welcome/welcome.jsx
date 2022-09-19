import React from 'react'
import Nav from '../static/nav'
import './welcome.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Welcome() {
  const[balance,setBalance]=useState("")
  function Updatebal(e){
    let val=e.target.value
    setBalance(val)
  }
   function submitFunc(e){
    e.preventDefault()
    Updatebal(e)
  }
  const[showModal,setModal]=useState(false)
  let toggleModal=()=>{
    let val=!showModal
    setModal(val)
    if(val){
      setText('Close Form')
    }
    else{
      setText('Get Started')
    }
  }
  const [text,setText]=useState('Get Started')
   return (
    <div className='welcome'>
        <Nav/>
        <div className="sect">
        <header>
            <h3>Plan Expense Easily <br/> And Accountably </h3>
            <p>Real time calculations and track records of all expenses</p>
            <button onClick={toggleModal}>{text}</button>
        </header>
        <div className={showModal?'input-balance':'hide'}>
          <h3>Set Balance</h3>
          <form action="" onSubmit={submitFunc}>
            <input type="text" name='balance' placeholder='Input Balance' onChange={Updatebal}/>
            <Link to={'/dashboard'} state={{bal:balance}}>
              <button>Set Balance</button></Link>
          </form>
        </div>
        </div>
    </div>
  )
}
