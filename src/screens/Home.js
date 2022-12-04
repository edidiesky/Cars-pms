import React, { useEffect } from 'react'
import InventoryIndex from '../components/home/inventory'
import Heroindex from '../components/home/hero'
import SearchIndex from '../components/home/search'
import ServicesIndex from '../components/home/services'
import Blogindex from '../components/home/blog'
import Styled from 'styled-components'
import Brandindex from '../components/home/brands'
export default function Home() {
  useEffect(()=> {
    window.scrollTo({top:0, left:0, behavior:'smooth'})
  },[])
  return (
    <HomeContainer>
      <Heroindex/>
      <SearchIndex/>
      <ServicesIndex/>
      <Brandindex/> 
      <InventoryIndex/>
      <Blogindex/>
    </HomeContainer>
  )
}

const HomeContainer = Styled.div`
width:100%;
background:#fff;
`
