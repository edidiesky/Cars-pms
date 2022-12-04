import React, { useEffect } from 'react'
import Styled from 'styled-components'
import Contactindex from '../components/contact'
export default function Contact() {
  useEffect(()=> {
    window.scrollTo({top:0, left:0, behavior:'smooth'})
  },[])
  return (
    <ContactContainer>
        <Contactindex/>
    </ContactContainer>
  )
}

const ContactContainer = Styled.div`
width:100%;
`
