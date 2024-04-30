import React from 'react'
import './Appdownload.css'
import { assets } from '../../assets/assets'
function Appdownload() {
    return (
        <div className='app-download' id='app-download'>
            <p>For Better Exprince <br /> Tomato APP</p>
            <div className='app-download-platform'>
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>

        </div>
    )
}

export default Appdownload
