import React from 'react'
import styled from 'styled-components/macro'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPinterest
} from 'react-icons/fa'

const data = [
  {id:1, title:'32 Stimple Rd, Grand Pierce, FL'},
  {id:2, title:'cars@avada-dealers.com'},
]
const iconsListData = [
  {id:1, icon:<FaFacebook/>},
  {id:2, icon:<FaInstagram/>},
  {id:3, icon:<FaYoutube/>},
  {id:4, icon:<FaPinterest/>}
]


export default function HeaderBottom() {
  return (
    <HeaderBottomContainer>
      <ul className="locationListWrapper">
         {data.map(x=> {
          return <li key={x.id}>{x.title}</li>
         })}
         <li>Monday-Friday: {" "} 8am to 9pm</li>
       </ul>
       <ul className="socialListWrapper">
         {iconsListData.map(x=> {
          return <li className='icons' key={x.id}>{x.icon}</li>
         })}
       </ul>
    </HeaderBottomContainer>
  )
}


const HeaderBottomContainer = styled.div`
width:90%;
margin:0 auto;
padding:1.6rem 0;
max-width:1600px;
display:flex;
align-items:center;
justify-content:space-between;
@media (max-width:780px) {
  width:90%;
}

 @media (max-width:480px){
  width:100%;
  flex-direction:column;
  padding:3rem 2.4rem;
  gap:2rem;
  align-items:flex-start;
}
.socialListWrapper {
  display:flex;
  align-items:center;
  gap:2rem;
    .icons {
       width:3rem;
       height:3rem;
       display:flex;
       align-items:center;
       justify-content:center;
       border-radius:3px;
       background:var(--blue-2);
       &:nth-child(2) {
        background:#55acee;
       }
       &:nth-child(3) {
        background:#3f729b;
       }
       &:nth-child(4) {
        background:var(--red);
       }
       svg {
        color:#fff;
        width:50%;
        height:50%;
       }
       &::child(1) {
        background:#fff;
       }
    }
  }
 .locationListWrapper{
  width:55%;
  margin:0 auto;
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
  grid-gap:1.6rem;
  @media (max-width:480px) {
    margin:0;
    text-align:start;
  }
  li {
    font-size:1.4rem;
    font-weight:600;
    color:var(--dark-1);
    transition:all .5s;
    text-align:start;
    &:hover {
      color:var(--red);
    }
  }
 }
`

