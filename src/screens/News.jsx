import React, { useEffect } from 'react'
import Newsindex from '../components/news'
import Styled from 'styled-components'
export default function News() {
  useEffect(()=> {
    window.scrollTo({top:0, left:0, behavior:'smooth'})
  },[])
  return (
    <NewsContainer>
        <Newsindex/>
    </NewsContainer>
    
  )
}


const NewsContainer = Styled.div`
width:100%;
`