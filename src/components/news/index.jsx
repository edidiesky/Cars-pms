import React from 'react'
import Styled from 'styled-components'
import { Banner } from '../common'
import BlogCard from '../home/blog/Card'
import { blogData } from '../../dummy'
import Services from './Services'

export default function Newsindex() {
  return (
    <NewsContainer>
        <Banner title='Auto News' step1={'Home'} step2={'Auto-news  '}/>
        <Services/>
        <div className="blogCardContainer">
          {blogData.map(x=> {
          return <BlogCard x={x} key={x.id}/>
        })}
        </div>
        
    </NewsContainer>
  )
}


const NewsContainer = Styled.div`
width:100%;
.headerWrapper, .blogCardContainer {
  padding:10rem 0;
  width:90%;
  margin:0 auto;
  display:grid;
    grid-template-columns:repeat(3,1fr);
    grid-gap:3rem;
    @media (max-width:1080px){
        grid-template-columns:repeat(2,1fr);
        grid-row-gap:4rem;
    }
     @media (max-width:980px){
        grid-template-columns:repeat(1,1fr);
        grid-row-gap:4rem;
    }
   header {
        display:flex;
        gap:2rem;
        width: 90%;
        align-items:center;
        @media (max-width:980px) {
          width:100%;
        }
        &:hover {
           .iconImageWrapper {
            background:var(--red);
           }
           h2 {
            color:var(--blue-1);
           }
        }
        .iconImageWrapper {
            width:15rem;
            height:15rem;
            border-radius:50%;
            display:flex;
            align-items:center;
            justify-content:center;
            background:var(--blue-1);
            
            .iconImage {
            width:40%;
            height:40%;
            border:1.3px solid #fff;
        }
        }
        h2 {
            font-size:2.5rem;
            font-weight:700;
            color:var(--dark-1);
            text-align:start;
            @media (max-width:480px) {
                font-size:2.8rem;
            }
            span {
              font-size:1.8rem;
              display:block;
              padding:1.7rem 0;
              color:var(--grey);
              font-weight:400;
              line-height:1.7;
            }
        }
    }

}
`