import React from 'react'
import Styled from 'styled-components'
import { AccordionData } from '../../../dummy'
import AccordionCard from './AccordionCard'
export default function Accordion() {
  return (
    <AccordionContainer>
      {AccordionData.map(x=> {
        return <AccordionCard key={x.id} x={x}/>
      })}
    </AccordionContainer>
  )
}

const AccordionContainer = Styled.div`
width:100%;
display:flex;
flex-direction:column;
gap:1.4rem;

`
