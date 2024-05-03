import React, { useContext } from 'react'
import './placeorder.css'
import { StoreContext } from '../../Context/StoreContext'
function Placeholder() {
  const { gettotalcartamount } = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fild">
          <input type="text" placeholder='firstname' />
          <input type="text" placeholder='lastname' />
        </div>
        <input type="email" placeholder='email' />
        <input type="text" placeholder='street' />
        <div className="multi-fild">
          <input type="text" placeholder='city' />
          <input type="text" placeholder='state' />
        </div>
        <div className="multi-fild">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='phone' />
      </div>
      <div className="place-order-right" />
      <div className="cart-total">
        <h2>Cart Total</h2>
        <div>
          <div className='cart-total-detail'>
            <p>sub total</p>
            <p>${gettotalcartamount()}</p>
          </div>
          <hr />
          <div className='cart-total-detail'>
            <p>delevery fee</p>
            <p>${gettotalcartamount() === 0 ? 0 : 2}</p>
          </div>
          <hr />
          <div className='cart-total-detail'>
            <b>Total</b>
            <b>${gettotalcartamount() === 0 ? 0 : gettotalcartamount() + 2}</b>
          </div>
          <button className='b1'>PROCCED TO PAYMENT</button>
        </div>
      </div>
    </form>

  )
}

export default Placeholder
