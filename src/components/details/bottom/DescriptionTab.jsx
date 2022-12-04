import React from 'react'
import Styled from 'styled-components'
export default function DescriptionTab({tabIndex}) {
  return (
     <DescriptionTabContainer className={tabIndex === 0? 'active':""}>
        <h2>Description</h2>
        <p>
            Risus commodo viverra maecenas accumsan lacus vel facilisis. Odio ut enim blandit volutpat maecenas.
             Nascetur ridiculus mus mauris vitae ultricies leo. Est lorem ipsum dolor sit amet. Fames ac turpis egestas integer eget aliquet.
             Accumsan sit amet nulla facilisi morbi. Ut diam quam nulla porttitor massa id neque aliquam vestibulum.
        </p>
     </DescriptionTabContainer>
  )
}

const DescriptionTabContainer = Styled.div`
background:#fff;
padding:6rem 4rem;
display:flex;
flex-direction:column;
gap:3rem;
display:none;
&.active {
    display:flex;
}
 h2 {
    font-size:3.8rem;
    font-weight:700;
    color:var(--dark-1);
   }
 p {
    font-size:2rem;
    color:var(--blue-2);
    line-height:1.7;
    font-family:"Montserrat", sans-serif;
    @media (max-width:680px) {
      font-size:1.8rem;
  }
 }
`
