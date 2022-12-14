import React from 'react'
import Styled from 'styled-components'
import Links from './Links'
export default function Banner2({title, step1, step2, step3}) {
  return (
    <CartBannerContainer>
      <h2>{title}</h2>
      <img src="../images/heroImage.jpg" alt="images" className='banner3Image' />
      <Links step1={step1} step2={step2} step3={step3}/>
    </CartBannerContainer>
  )
}
const CartBannerContainer = Styled.div`
min-height:40rem;
width:100%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
gap:2.5rem;
position:relative;
.banner3Image {
  position:absolute;
  height:100%;
  width:100%;
  object-fit:cover;
}
 h2 {
  font-size:6.5rem;
  font-weight:700;
  color:#fff;
  text-align:center;
  z-index:70;
  
 }
`