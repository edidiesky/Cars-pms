import React from 'react'
import Styled from 'styled-components'
import {BiPlus, BiMinus} from 'react-icons/bi'

export default function SmallCard({x}) {
  return (
    <SmallCardContent>
        <div className="cartProduct">
                <div className="imageWrapper">
                    {x.image && x.image.map((x=> {
                        return <img src={x.image} alt='images'/>
                     }))}
                </div>
                <h3>{x.title}</h3>
                <p>${x.price}</p>
                <div className="btnWrapper">
                 <button className='cartBtn'><BiPlus/></button>
                 <h3>1</h3>
                <button className='cartBtn'><BiMinus/></button>
                
            </div>
            <p>${x.price}</p>
        </div>
    </SmallCardContent>
  )
}

const SmallCardContent = Styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:center;
gap:2rem;
.cartProduct {
    width:100%;
                    display:flex;
                    align-items:center;
                    gap:2rem;
                    justify-content:center;
                    flex-direction:column;
                    gap:2rem;
                    h3 {
                        font-size:3rem;
                        font-weight:600;
                        color:var(--dark-1);
                    }
                    p {
                        font-size:2.4rem;
                        color:var(--grey);
                        font-weight:400;
                    }
                    .btnWrapper {
                    border:1px solid #ccc;
                    display:flex;
                    width:150px;
                    align-items:center;
                    height:4.5rem;
                    justify-content:center;
                    margin:0 auto;
                    border-radius:6px;
                    h3 {
                        fon-size:1.4rem;
                        font-weight:600;
                        color:#333;
                        flex:1;
                        text-align:center;
                    }
                    .cartBtn {
                        border:none;
                        outline:none;
                        flex:1;
                        height:100%;
                        background:rgb(0 0 0 / 8%);
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        cursor:pointer;
                        &:hover {
                            background:rgb(0 0 0 / 13%);
                            svg {
                                color:var(--dark-1);
                            }
                        }
                        svg {
                            width:2rem;
                            height:2rem;
                            color:#333;
                        }
                    }

                }
 
                    
                    .imageWrapper {
                    width:25rem;
                    position:relative;
                    height:20rem;
                    border-radius:5px;
                    img {
                        position:absolute;
                        top:0;
                        width:100%;
                        height:100%;
                        left:0;
                        border-radius:5px;
                        object-fit:cover;
                    }
                    }
                     
}
`
