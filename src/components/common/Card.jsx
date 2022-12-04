import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Card({x}) {
  return (
    <CardContainer key={x.id}>
      <div className="imageWrapper">
        <img src={x.image} className='cardImage' alt='card-images'/>
        <Link className="imageDetails" to={'/product/1111'}>
          <h2>{x.title}</h2>
          <p className="cardPrice">
            {x.percentage && <span className="percentageSpan">${parseInt(x.price) * parseInt(x.percentage)}</span>}
            <span className="percentagePrice">${x.price}</span>
          </p>
        </Link>
      </div>
      <header>
        <h2>{x.title}</h2>
        <div className="category">
          <span className="tagspan">{x.capacity} mil</span>
          {x.tags.map(x=> {
            return <span className="tagspan" key={x.id}>
              {x}
            </span>
          })}
         
          
        </div>
        <div className="cardBottom">
          <p className="cardPrice">Price: {' '} 
          <span className="pricespan">${x.price}</span> 
          {x.percentage && <span className="percentageSpan">{x.percentage}% off</span>}
          </p>
         
        </div>
      </header>
    </CardContainer>
  )
}


const CardContainer = Styled.div`
width:100%;
.imageWrapper {
  width:100%;
  height:35rem;
  position:relative;
  overflow-y:hidden;
  &:hover .imageDetails {
    top:0;
  }
  .cardImage {
    position: absolute;
    top: 0;
    height: 100%;
    left: 0;
    bottom: 0;
    right: 0;
    width:100%;
  }
  .imageDetails {
    position:absolute;
    top:100%;
    left:0;
    width:100%;
    transition:all .3s;
    height:100%;
    background:linear-gradient(to right,#0d2041b3,#00050de3);
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    gap:1.6rem;
    h2 {
    font-size:3.2rem;
    font-weight:700;
    color:#fff;
    z-index:500;
    width:85%;
    line-height:1.3;
    margin:0 auto;
    text-align:center;
   }
   .cardPrice {
      display:flex;
      align-items:center;
      gap:1rem;
      justify-content:center;
      .percentageSpan {
         font-size:3rem;
        color:#fff;
        font-weight:400;
        display:inline-block;
        text-decoration: line-through;
      }
      .percentagePrice{
        font-size:3rem;
        color:#fff;
        font-weight:400;
        display:inline-block;
      }
    }
    
  }
}
 header {
  width:95%;
  margin:0 auto;
  padding:5rem 3rem;
  background:#fff;
  transform:translateY(-20px);
  display:flex;
  flex-direction:column;
  gap:1rem;
  @media (max-width:980px) {
  padding:4rem 2rem;
}
  h2 {
    font-size:2.7rem;
    font-weight:700;
    color:var(--dark-1);
  }
  .category {
    padding:1.2rem 0;
    .tagspan{
      font-size:1.8rem;
      font-weight:400;
      color:var(--grey);
      margin:.6rem .8rem;
      display:inline-block;
      @media (max-width:480px) {
       font-size:2rem;
      }
      position:relative;
      &::after {
        position:absolute;
        top:50%;
        transform:translateY(-40%);
        width:.4rem;
        border-radius:50%;
        left:-8px;
        height:.4rem;
        background:var(--grey);
        content:'';
      }
    }
  }
  .cardBottom {
    padding:2rem 0;
    border-top:1px solid rgba(0,0,0,.1);
    display:flex;
    align-items:center;
    gap:2rem;
    @media (max-width:480px) {
       flex-direction:column;
       align-items:flex-start;
    }
    .cardPrice {
      font-size:2.4rem;
      color:var(--grey);
      display:flex;
      align-items:center;
      gap:1rem;
      justify-content:center;
      .percentageSpan {
      display:inline-block;
      padding:.6rem 1rem;
      font-size:1.4rem;
      font-weight:600;
      border:1px solid var(--blue-1);
      color:var(--blue-1);
    }
      .pricespan {
        font-size:2.8rem;
        color:var(--red);
        font-weight:700;
        display:inline-block;
        @media (max-width:480px) {
       margin-left:6px;
       font-size:3.5rem;
      }
      }
    }
    
  }
 }
`