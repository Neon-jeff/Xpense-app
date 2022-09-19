import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function AddItem(props) {
    let add=props.add
    let stateList={
      item:'Item',
      price:'Price'
    }

  let additem=(e)=>{
    stateList.item=e.target.value
  }
  let addprice=(e)=>{
    stateList.price=e.target.value
  }
  const [newItem,setNewItem]=useState(stateList)
  let subMitFunc=(e)=>{
    e.preventDefault()
    stateList.id=Math.random()*10
    console.log(stateList)
    setNewItem(stateList)
    props.setAdd(!add)
    e.target.item.value=''
    e.target.price.value=''
  }
    useEffect(()=>{
    props.addItem(newItem)
  },[newItem])  


    

  return (
    <div>
        <div className={add?"form":'hide'}>
          <form action="" onSubmit={subMitFunc}>
            <label htmlFor="">Item</label>
            <input type="text" placeholder='Input Item'  name='item' onInput={additem}/>
            <label htmlFor="">Price</label>
            <input type="text" placeholder='Input Price'  name='price' onInput={addprice}/>
            <button>Add</button>
          </form>
        </div>
    </div>
  )
}
