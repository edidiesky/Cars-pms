import React from 'react'
import Styled from 'styled-components'
import { productData } from '../../dummy'
import SmallCard from './SmallCard'

export default function SmallCartCard() {
  return (
    <SmallCartContainer>
      <h2>You have 4 items in your cart</h2>
      {productData.map(x=> {
        return <SmallCard x={x} key={x.id}/>
      })}
    </SmallCartContainer>
  )
}

const SmallCartContainer = Styled.div`
width:100%;
border:1px solid #ccc;
padding:2rem;
display:flex;
flex-direction:column;
gap:3.6rem;

  @media (min-width:780px) {
    display:none;
 }

 h2 {
  font-size:5rem;
  font-weight:700;
  color:var(--dark-1);
  border-bottom:1px solid #ccc;
  padding:1rem 0;
 }
`
