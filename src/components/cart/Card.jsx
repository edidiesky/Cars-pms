import React from 'react'
import {BiPlus, BiMinus} from 'react-icons/bi'

export default function Card({x}) {
  return (
    <tr key={x.id}>
        <td>
            <div className="cartProduct">
                <div className="imageWrapper">
                    {x.image && x.image.map((x=> {
                        return <img src={x.image} alt='images'/>
                     }))}
                </div>
            </div>
        </td>
        <td className='title'>{x.title}</td>
        <td>{x.price}</td>
        <td>
            <div className="btnWrapper">
                 <button className='cartBtn'><BiPlus/></button>
                 <h3>1</h3>
                <button className='cartBtn'><BiMinus/></button>
            </div>
           
        </td>
        <td className='title'>{x.price}</td>
    </tr>
  )
}
