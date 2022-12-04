import React, {useEffect} from 'react'
import Styled from 'styled-components'

import DeatailsTopindex from '../components/details/top'
import DetailsBottomindex from '../components/details/bottom'
import RecentProductindex from '../components/details/recent'
export default function Details() {
  useEffect(()=> {
    window.scrollTo({top:0, left:0, behavior:'smooth'})
  },[])
  return (
    <DetailsContainer>
      <DeatailsTopindex/>
      <DetailsBottomindex/>
      <RecentProductindex/>
    </DetailsContainer>
  )
}

const DetailsContainer = Styled.div`
width:100%;
`