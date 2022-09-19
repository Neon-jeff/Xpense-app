import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './items.css'

export default function Item (props) {
    let Items=props.list
    let priceList=Items.map(item=>item.price*1)
    let expense=priceList.reduce((a, b) => a + b, 0)
    console.log(expense)
    useEffect(()=>{
        props.updateExpense(expense)
    },[expense])
    
   
  return (
    <div className='cont1'>
        {Items.map((item,id)=>{
            return(
                <div className="item" key={id}>
                    <div>
                    <p className='itemName'>{item.item}</p>
                    <p className='itemPrice'>{item.price}</p>
                    </div>
                    <button onClick={()=>props.deleteItem(item.id)}>Delete</button>
                </div>
            )
        })}
    </div>
  )
}
