import React from 'react'
import Styled from 'styled-components'
import { productData } from '../../dummy'
import Card from './Card'
export default function CartContent() {
  return (
    <CartContentContainer>
        <h2>You have 4 items in your cart</h2>
        <table>
            <thead>
            <tr>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
            </tr>
            </thead>
            <tbody>
                {productData.slice(0, 4).map(x=> {
                    return <Card key={x.id} x={x}/>
                })}
            </tbody>
        </table>
    </CartContentContainer>
  )
}


const CartContentContainer = Styled.div`
width:100%;
border:1px solid #ccc;
padding:2rem;
display:flex;
flex-direction:column;
gap:2rem;

 @media (max-width:780px) {
    display:none;
 }
 
 h2 {
  font-size:5rem;
  font-weight:700;
  color:var(--dark-1);
  border-bottom:1px solid #ccc;
  padding:1rem 0;
 }

 table {
    width:100%;
    padding:2rem 0;
    border-collapse:collapse;
    table-layout:fixed;
    thead{
        width:100%;
        tr {
            width:100%;
            padding:2rem 0;
            th {
                width:100%;
                font-size:1.6rem;
                padding:2rem 0;
                border-bottom:1px solid #ccc;
                font-weight:700;
                color:var(--dark-1);
            }
        }
    }
    tbody {
        width:100%;
        tr {
            width:100%;
            td {
                text-align:center;
                padding:2rem 0;
                border-bottom:1px solid #ccc;
                font-size:1.6rem;
                font-weight:400;
                color:var(--grey);
                &.title {
                        font-size:1.8rem;
                        font-weight:400;
                        color:var(--blue-1);
                    }
                .cartProduct {
                    width:100%;
                    display:flex;
                    align-items:center;
                    gap:2rem;
                    justify-content:center;
                    
                    .imageWrapper {
                    width:15rem;
                    position:relative;
                    height:7rem;
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
                &:nth-child(2), &:nth-child(3), &:nth-child(4) {
                    width:auto;
                }
                .btnWrapper {
                    width:100px;
                    border:1px solid #ccc;
                    display:flex;
                    align-items:center;
                    height:4rem;
                    justify-content:center;
                    margin:0 auto;
                    border-radius:6px;
                    h3 {
                        fon-size:1.4rem;
                        font-weight:600;
                        color:#333;
                        flex:1;
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
                            width:1.4rem;
                            height:1.4rem;
                            color:#333;
                        }
                    }

                }
            }
        }
    }
 }
`