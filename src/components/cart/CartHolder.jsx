import React from 'react'
import Styled from 'styled-components'
export default function CartHolder() {
  return (
    <CartHolderContainer>
        <h2>Cart Holder</h2>
        <h3 className='subtotal'>Subtotal <span className="subspan">$1479,00</span></h3>
        <h3 className='total'>Total <span className="subspan span1">$1479,00</span></h3>
        <div className="btnWrapper">
            <button className="btn">Proceed to Checkout</button>
        </div>
    </CartHolderContainer>
  )
}


const CartHolderContainer = Styled.div`
padding:4rem;
border:1px solid #ccc;
width:clamp(45%, 220px, 90%);
display:flex;
flex-direction:column;
gap:2rem;
margin-bottom:2rem;
@media (max-width:980px) {
  width:100%;
}
 h2 {
  font-size:5rem;
  font-weight:700;
  color:var(--dark-1);
 }

 .btnWrapper {
    width:100%;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    .btn {
        border:none;
      outline:none;
      padding:2rem 4rem;
      background:var(--red);
      color:#fff;
      font-size:1.9rem;
      color:#fff;
      cursor:pointer;
      &:hover {
        background:var(--blue-1);
      }
      @media (max-width:980px){
        padding:1.6rem 4rem;

      }
    }
 }

 h3 {
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    font-size:2rem;
    font-weight:700;
    color:var(--dark-1);
    padding:1.6rem 0;
    &.subtotal {
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc; 
    padding:2rem 0;
    }
    

    .subspan {
        font-size:1.8rem;
        font-weight:400;
        color:var(--grey);
        &.span1 {
            color:var(--blue-2);
            font-weight:700;
        }
    }
 }

`