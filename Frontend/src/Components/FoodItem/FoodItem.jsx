import React, { useContext} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'


function FoodItem({ name, id, price, description, image }) {

  const { Cartitem, addtoCart, removefromCart } = useContext(StoreContext)
  return (
    <div>
      <div className="food-item">
        <div className="food-item-img-continer">
          <img className='food-item-img' src={image} alt="" />
          {Cartitem[id] ?
            <img className='add' onClick={() => addtoCart(id)} src={assets.add_icon_white} alt='' />
            : <div className='food-item-counter'>
              <img onClick={() => removefromCart(id)} src={assets.remove_icon_red} />
              <p>{Cartitem[id]}</p>
              <img onClick={() => addtoCart(id)} src={assets.add_icon_green} />
            </div>
          }
        </div>
        <div className="food-item-info">
          <div className="food-item-name-rateing">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
          </div>
          <p className='food-item-desc'> {description}</p>
          <p className='food-item-price'>${price}</p>
        </div>
      </div>
    </div>
  )
}

export default FoodItem
