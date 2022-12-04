import React, { useEffect } from 'react'
import Styled from 'styled-components'
import Productindex from '../components/product'

export default function ProductList() {
  useEffect(()=> {
    window.scrollTo({top:0, left:0, behavior:'smooth'})
  },[])
  return (
    <ProductListContainer>
       <Productindex/>
    </ProductListContainer>
  )
}
const ProductListContainer = Styled.div`
width:100%;

`
