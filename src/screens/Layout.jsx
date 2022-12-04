import React from 'react'
import {Outlet} from 'react-router-dom'
import Styled from 'styled-components'
import { Banner3, Banner4, Newsletter, Footer} from '../components/common'
import HeaderIndex from '../components/home/header'
export default function Layout() {
  return (
    <LayoutContainer>
      <HeaderIndex/>
      <Outlet/>
      <Banner3/>
      <Banner4/>
      <Newsletter/>
      <Footer/>
    </LayoutContainer>
  )
}

const LayoutContainer = Styled.div`
width:100%;
`
