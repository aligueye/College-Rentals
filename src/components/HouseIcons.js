import React from 'react';
import { houseData } from "../data"
import '../css/Googlemaps.css'
import icon from '../img/gnome_go_home.png'

export default function HouseIcons() {
    return (
        <div>
            {houseData.map((data, key) => {
                return (
                    <div className="home-icon" key={key}
                         lat={data.lat}
                         lng={data.lng}>

                        <div><img src={data.icon} /></div>
                    </div>
                )
            })}
                
        </div>
    )
}