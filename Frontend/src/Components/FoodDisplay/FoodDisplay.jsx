import React, { useContext } from 'react'
import './FoodDisplay.css'
// import { useContext } from 'react'
import FoodItem from '../FoodItem/FoodItem'
import { food_list } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

function FoodDisplay({ catagory }) {
  const {food_list} = useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
      <hr />
      <h2>Top dishs near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {

          if (catagory === "All" || catagory === item.catagory) {
            return <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} />
          }
        }
        )}
      </div>
    </div>
  )
}

export default FoodDisplay
