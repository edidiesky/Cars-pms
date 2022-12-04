import React from 'react'
import Styled from 'styled-components'
import { Banner } from '../../common'
import DetailsTopLeft from './DetailsTopLeft'
import DetailsTopRight from './DetailsTopRight'
export default function DeatailsTopindex() {
  const x = {price:'1500', percentage:'5'}
  return (
    <DetailsTopIndexContainer>
      <Banner title='Ford EcoSport 2021' step1={'Home'} step2='New Cars' step3={'Ford EcoSport 2021'}/>
      <div className="detailsTopWrapper">
        <DetailsTopLeft/>
        <DetailsTopRight/>
      </div>
    </DetailsTopIndexContainer>
  )
}


const DetailsTopIndexContainer = Styled.div`
width:100%;
 .detailsTopWrapper {
  width:90%;
  margin:0 auto;
  max-width:1600px;
  padding:5rem 0;
  position:relative;
  display:grid;
  grid-template-columns:repeat(2, 1fr);
  grid-gap:6rem;
  @media (max-width:980px) {
    grid-template-columns:repeat(1, 1fr);
  }
 }
`
