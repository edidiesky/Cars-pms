import React from 'react'
import Styled from 'styled-components'
import {Link} from 'react-router-dom'

const data = [
  {id:1, title:'Home', path:''},
  {id:2, title:'Product', path:'/product'},
  {id:3, title:'About Us', path:""},
  {id:4, title:'Latest News', path:"auto-news"},
  {id:5, title:'Contact', path:'avada/contact'},
]
export default function HeaderTop() {
  const HeaderTopLeft = ()=> {
    return (
      <img className='imageIcon' src='/images/carlogo.png' alt='images'/>
    )
  }

   const HeaderTopRight = ()=> {
    return (
       <button className='callBtn'>Call (3033) 1155-20999</button>
    )
  }

   const HeaderTopCenter = ()=> {
    return (
      <div className='headerTopWrapper'>
        {data.map((x)=> {
          return <Link to={`${x.path}`} key={x.id}>{x.title}</Link>
        })}
      </div>
    )
  }
  return (
    <HeaderTopContainer>
      <div className='headerTopWrapperContainer'>
        <HeaderTopLeft/>
        <HeaderTopCenter/>
        <HeaderTopRight/>
      </div>
      
    </HeaderTopContainer>
  )
}


const HeaderTopContainer = Styled.div`
min-height:10rem;
width:100%;
border:.3px solid rgba(0,0,0,.08);
display:flex;
align-items:center;
.headerTopWrapperContainer {
margin:0 auto;
width:90%;
max-width:1600px;
display:flex;
align-items:center;
justify-content:space-between;

@media (max-width:980px){
  padding:0 6rem;
}
 @media (max-width:780px){
  padding:2rem 0;
  gap:2rem;
}
img {
  width:auto;
  height:6rem;
}
 .headerTopWrapper {
  display:flex;
  align-items:center;
  gap:3rem;
   @media (max-width:1080px){
     display:none;
    }
  a {
    font-size:1.8rem;
    font-weight:400;
    color:var(--dark-1);
    transition:all .5s;
    &:hover {
      color:var(--red);
    }
  }
 }
.callBtn {
  border:none;
  outline:none;
  padding:2rem 4rem;
  border-radius:40px;
  background:var(--red);
  font-size:1.7rem;
  font-weight:700;
  color:#fff;
  transition:all .5s;
  cursor:pointer;
  &:hover {
    background:var(--blue-1);
  }
   @media (max-width:980px){
     font-size:1.8rem;
     padding:2rem 3rem;
    }
}
}
`

