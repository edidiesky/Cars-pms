import React from 'react'
import styled from 'styled-components'
import Filters from './Filters'
export default function FilterOptionsindex() {
  return (
    <FilterOptionsContainer>
      <h2>Filter By Options</h2>
      <Filters/>
    </FilterOptionsContainer>
  )
}

const FilterOptionsContainer = styled.div`
width:95%;
margin:0 auto;
display:flex;
flex-direction:column;
gap:4rem;
position:sticky;
top:10%;
height:100vh;
@media (max-width:760px) {
  position: relative;
  height: 60rem;
}
 h2 {
  font-size:2.2rem;
  font-weight:700;
  color:var(--dark-1);
 }
`