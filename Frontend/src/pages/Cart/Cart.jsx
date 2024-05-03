import React from 'react'
import './Cart.css'
import { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'
function Cart() {
  const { Cartitem, food_list, removefromCart, gettotalcartamount } = useContext(StoreContext)
     const navigate=useNavigate()
  return (
    <div>

      <div className='Cart'>
        <div className="Cart-item">
          <div className="Cart-item-title">
            <p>Items</p>
            <p>Title</p>
            <p>price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (Cartitem[item._id] > 0) {
            return (
              <div>
                <div className='Cart-item-title cart-item-items'>
                  <img src={item.image} alt="" />
                  <b>{item.name}</b>
                  <b>${item.price}</b>
                  <p>{Cartitem[item._id]}</p>
                  <b>${item.price * Cartitem[item._id]}</b>
                  <p onClick={() => removefromCart(item._id)} className='cross'>X</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className='cart-bottom'>
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
              <p>${gettotalcartamount()===0?0:2}</p>
            </div>
            <hr />
            <div className='cart-total-detail'>
              <b>Total</b>
              <b>${gettotalcartamount()===0?0:gettotalcartamount() + 2}</b>
            </div>
            <button onClick={()=>navigate('/order')} className='b1'>PROCCED TO CHECKOUT</button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>if you promocode,enter is here</p>
              <div className="cart-promocode-input">
                <input type='text' placeholder='promo code' />
                <button>submit</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart
