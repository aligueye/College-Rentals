import React from 'react';
import { houseData } from "../data"
import '../css/Houses.css'

export default function Houses() {
    return (
        <div className='house-container'>
            {houseData.map((data, key) => {
                return (
                    <div className="house-card" key={key}>
                        <div className="house-details">
                            <p className='rent'>${data.rent}</p>
                            <p>{data.address}</p>
                            <p>Bed: {data.bed}</p>
                            <p>Bath: {data.bath}</p>
                        </div>
                        <div><img src={data.img} /></div>
                    </div> 
                )                
            })}

        </div>
    )
}