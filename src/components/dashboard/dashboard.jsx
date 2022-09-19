import React from 'react'
import Nav from '../static/nav'
import { useLocation } from 'react-router-dom'
import './dashboard.css'
import { useState } from 'react'
import Item from './items/items'
import AddItem from './addItem'

export default function Dashboard(props) {
  let[Items,updateItems]=useState([{
    item:"Item",
    price:200,
    id:1
}])
    let location=useLocation()
    let balance=location.state.bal
    const [add,setAdd]=useState(false)
    let [expense,setExpense]=useState(0)
    let updateExpense=(exp)=>{
        setExpense(exp)
    }
    let diff=balance-expense
  
    function toggleAdd(){
      let val=!add
      setAdd(val)
       }
    function newItem(list){
      let newList=[...Items,list]
      updateItems(newList)
    }
    let deleteItem=(id)=>{
      let newItems=Items.filter((list)=>list.id!==id)
      updateItems(newItems)
  }  
    let filteredItem=Items.filter(list=>list.item!="Item")
  return (
    <div>
        <div className="dashboard">
            <Nav>
              <span>Amount: N{balance}</span>
            </Nav>
            <div className={(diff>=0?'hide':'notify')}>
              <p>*Expense exceeds balance</p>
            </div>
            <div className="cont">
            <div className="bal">
                <h4 className='balance'>Balance</h4>
                <p>N{diff}</p>
            </div>
            <div className="bal">
                <h4 className='exp'>Expenses</h4>
                <p>N{expense}</p>
            </div>
            </div>
            <button onClick={toggleAdd}>Add Item</button>
        <AddItem add={add} addItem={newItem.bind(this)} setAdd={setAdd}/>
        <Item list={filteredItem} updateExpense={updateExpense} deleteItem={deleteItem}/>
        </div>
    </div>
  )
}
