import React, { useState } from 'react'
import Order from './Order'

const showOrders = (props) => {
    let summa = 0
    props.orders.forEach(el => {
        summa += Number.parseFloat(el.price)
    });
    return(<div>
        {props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
    ))}
    <p className='sum'>Сумма: {summa} ₽</p>
    </div>)
}

const showNothing = () => {
    return(<div className='empty'><p>Товары в корзине отсутствуют</p></div>)
}
export default function Header(props) {
    let[cartOpen, setCartOpen] = useState(false)
  return (
    <header className="header-main">
         <div className="header-logo">
            <a href="#">
                <img src='./image/logo.png' alt="logo" width="100" height="42"/>
            </a>
    </div>
  
        <div className="search-box">
            <form action="#">
                <input className="search" type="text"placeholder="искать"name="search"/>
            </form>
        </div>

        <div class='busket-button' >
            <button className={`to-busket${cartOpen && 'active'}`} onClick={() => setCartOpen(cartOpen = !cartOpen)}>
               <img src="./image/busket.png" alt="busket" width="40" height="40"/>
            </button>
            {cartOpen && (
                <div className='shop-cart'>
                    {props.orders.length > 0 ? 
                        showOrders(props) : showNothing()}
                </div>
            )}
        </div>
</header>
  )
}
