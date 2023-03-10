import React from 'react';

export default function CheckoutItem(props){
  //destructure props
  const [name,quantity,price] = [props.name,props.quantity,props.price];
  return(
    <div className='cart-item'>
      <div className='cart-item-name'>{name}</div>
      <div className='cart-item-info'>
        <div className='cart-item-quantity'>{quantity} item(s)</div>
        <div className='cart-item-cost'>${(Math.round(100*(price*quantity))/100)}</div>
      </div>
    </div>
  )
}