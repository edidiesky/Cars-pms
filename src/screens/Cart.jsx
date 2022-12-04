import React, { useEffect } from 'react'
import Styled from 'styled-components'
import Cartindex from '../components/cart'
export default function Cart() {
  useEffect(()=> {
    window.scrollTo({top:0, left:0, behavior:'smooth'})
  },[])
  return (
    <CartContainer>
        <Cartindex/>
    </CartContainer>
  )
}


const CartContainer = Styled.div`
width:100%;
`