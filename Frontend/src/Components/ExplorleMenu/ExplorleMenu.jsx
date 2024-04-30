
import React from 'react'
import './ExplorleMenu.css'
import { menu_list } from '../../assets/assets'

export default function ExplorleMenu({ catagory, setcatagory}) {
    return (
        <div className='explorle-menu' id='explorle-menu'>
            <h1>Explore Menu</h1>
            <p className='explorle-menu-text'>Discover our diverse menu featuring appetizing starters, satisfying mains, and irresistible desserts. From savory classics to innovative creations, there's something for every palate.</p>
            <div className="explorle-menu-list">
     {menu_list.map((item,index)=>{
    return(
        <div onClick={()=>setcatagory(prev=>prev===item.menu_name? "All":item.menu_name)} key={index} className='explorle-menu-list-item'>
       <img className={catagory===item.menu_name?"active":""} src={item.menu_image} alt="" />
       <p>{item.menu_name}</p>
        </div>
    )
})}
            </div>
<hr/>
        </div>
    )
}
