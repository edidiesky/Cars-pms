import React from 'react'
import Styled from 'styled-components'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPinterest
} from 'react-icons/fa'

const iconsListData = [
  {id:1, icon:<FaFacebook/>},
  {id:2, icon:<FaInstagram/>},
  {id:3, icon:<FaYoutube/>},
  {id:4, icon:<FaPinterest/>}
]

const data = [
  {id:1, title:'Home', path:''},
  {id:2, title:'Product', path:'/product'},
  {id:3, title:'About Us', path:""},
  {id:4, title:'Latest News', path:"auto-news"},
  {id:5, title:'Contact', path:'avada/contact'},
  {id:6, title:'Car Buying Guide', path:'avada/contact'},
  {id:7, title:'WorkShop Services', path:'avada/contact'},
  {id:8, title:'Investor Relations', path:'avada/contact'},
]

export default function Footer() {
  return (
    <FooterContainer>
        <div className="footerWrapper">
            <div className="footerTop">
              <button className='callBtn'>Call (3033) 1155-20999</button>
                <img src="../images/car-dealer-footer-logo-2x.png" alt="images" />
              <ul className="socialListWrapper">
                 {iconsListData.map(x=> {
                  return <li className='icons' key={x.id}>{x.icon}</li>
                 })}
              </ul>
            </div>
            <ul className="footerCenter">
              {data.map(x=> {
                return <li key={x.id}>{x.title}</li>
              })}
            </ul>
            <div className="footerBottom"></div>
        </div>
    </FooterContainer>
  )
}

const FooterContainer = Styled.div`
width:100%;
padding:10rem 0;
background:var(--gradient1);
z-index:70;
.footerWrapper {
    width:90%;
    margin:0 auto;
    .footerCenter {
      padding:6rem 0;
      border-bottom:.7px solid #777;
      display:grid;
      grid-template-columns:repeat(auto-fit, minmax(150px, 1fr));
      grid-gap:2rem;
      @media (max-width:1080px) {
        grid-template-columns:1fr;
        grid-row-gap:4rem;
      }
      li {
        font-size:2rem;
        font-weight:400;
        color:#fff;
      }
    }
    .footerTop {
      padding:6rem 0;
      border-bottom:.7px solid #777;
      display:grid;
      grid-template-columns:repeat(auto-fit, minmax(300px,1fr));
      grid-gap:3rem;

      .callBtn {
  border:none;
  outline:none;
  border-radius:40px;
  background:transparent;
  font-size:2.7rem;
  font-weight:700;
  color:#fff;
  transition:all .5s;
  cursor:pointer;
  text-align:start;
   
}
.socialListWrapper {
  display:flex;
  align-items:center;
  gap:2rem;
  justify-content:flex-end;
  @media (max-width:1080px) {
    justify-content:flex-start;
      }
    .icons {
       width:5rem;
       height:5rem;
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
    img {
      width:20rem;
      margin:0 auto;
       @media (max-width:1080px) {
        margin:0;
      }
    }
    }
}
`
