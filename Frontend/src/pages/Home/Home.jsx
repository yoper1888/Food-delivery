import React, { useState } from 'react'
import './Home.css'

import Header from '../../Components/Header/Header'
import ExplorleMenu from '../../Components/ExplorleMenu/ExplorleMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import Appdownload from '../../Components/AppDownload/Appdownload'

export default function Home() {
  const [catagory, setcatagory] = useState("All")
  return (
    <div>
      <Header />
      <ExplorleMenu catagory={catagory} setcatagory={setcatagory} />
      <FoodDisplay catagory={catagory} setcatagory={setcatagory} />
      <Appdownload/>

    </div>
  )
}
