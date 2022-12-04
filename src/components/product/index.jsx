import React from 'react'
import Styled from 'styled-components'
import { productData } from '../../dummy'
import Card from './Card'
import { Banner } from '../common'
import FilterOptionsindex from './filteroptions'
import SelectOptions from './SelectOptions'

export default function Productindex() {
  return (
    <ProductIndexContainer>
      <Banner title={'Avanda Collections'} subtitle='Product' step1={'Home'} step2={'Products'}/>
      <div className="productIndexWrapper">
        <FilterOptionsindex/>
        <div className="productCardWrapper">
          <SelectOptions/>
          <div className="productCardContainer">
        {productData.map(x=> {
        return <Card x={x} key={x.id}/>
      })}
        </div>
        
      </div>
      </div>
      
    </ProductIndexContainer>
  )
}

const ProductIndexContainer = Styled.div`
width:100%;
.productIndexWrapper {
  width:90%;
  margin:0 auto;
  max-width:1600px;
  padding:6rem 0;
  display:grid;
  grid-template-columns:20vw 1fr;
  grid-gap:10rem;
  @media (max-width:980px) {
    grid-template-columns:30vw 1fr;
    grid-gap:2rem;
  }
  @media (max-width:580px) {
    grid-template-columns:1fr;
  }
  .productCardWrapper {
    width:100%;
    display:flex;
    flex-direction:column;
    gap:2rem;
    .productCardContainer {
   display:grid;
  grid-template-columns:repeat(2, 1fr);
  grid-gap:2rem;
  @media (max-width:980px) {
    grid-template-columns:1fr;
  }
}
  }
  
}

`