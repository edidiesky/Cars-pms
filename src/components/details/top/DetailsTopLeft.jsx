import React, {useState} from 'react'
import Styled from 'styled-components'
import {BiChevronRight, BiChevronLeft} from 'react-icons/bi'


export default function DetailsTopLeft() {
  const [tabindex, setTabIndex] = useState(0)
  const images = [
        {id:1,image:'../images/jeep-5.jpg'},
        {id:2,image:'../images/jaguar-3.jpg'},
        {id:3,image:'../images/tes4.jpg'},
        {id:4,image:'../images/jeep-5.jpg'},
  ]

  const handleImagePosition = (position)=> {
    if (position === 'left') {
      setTabIndex(tabindex < 0? images.length - 1:tabindex -1 )
    }
    if (position === 'right') {
      setTabIndex(tabindex >= images.length - 1? 0:tabindex + 1 )
    }
  }

  return (
    <DetailsTopLeftContainer>


      <div className="detailsImageContainer">
        <div className="btnArrow left" onClick={()=> handleImagePosition('left')}>
          <BiChevronLeft/>
        </div>
         <div className="btnArrow right" onClick={()=> handleImagePosition('right')}>
          <BiChevronRight/>
        </div>
        <div className="detailsImageWrapper">
        {images.map(x=> {
          return <div className="imagesWrapper" key={x.id} style={{transform:`translateX(-${tabindex * 100}%)`}}>
            <img src={x.image} alt='images'/>
          </div> 
        })}
       </div>
      </div>
       
       <div className="imageOptions">
        {images.map((x, index)=> {
          return <div className="imageWrapper" key={x.id} onClick={()=> setTabIndex(index)}>
            <img src={x.image} alt='images'/>
            <div className={
              tabindex === index ?"imageGradient active":'imageGradient'
              }></div>
          </div>
          
        })}
       </div>


    </DetailsTopLeftContainer>
  )
}

const DetailsTopLeftContainer = Styled.div`
width:100%;
display:flex;
flex-direction:column;
.imageOptions {
  width:80%;
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(100px, 1fr));
  padding-top:2rem;
  grid-gap:1.6rem;
  @media (max-width:680px) {
    grid-template-columns:repeat(auto-fit, minmax(70px, 1fr));
    width:100%;
  }
  .imageWrapper {
    height:12rem;
    position:relative;
    &:hover .imageGradient {
      background:rgba(0 0 0 /10%);
    }
    .imageGradient {
      height:100%;
      width:100%;
      position:absolute;
      background:rgba(255 255 255 /60%);
      &.active {
         background:rgba(0 0 0 /20%);
      }
    }
    img {
      height:100%;
      width:100%;
      position:absolute;
      object-fit:cover;
    }
  }
  
}
 .detailsImageContainer {
  width:100%;
  position:relative;
  &:hover .btnArrow {
    opacity:1;
  }
  @media (min-width:780px) {
      height:50rem;
  }
  .btnArrow {
    z-index:80;
    width:5rem;
    position:absolute;
    height:3rem;
    display:flex;
    align-items:center;
    justify-content:center;
    background:rgba(0 0 0 /60%);
    opacity:0;
    transition:all .4s;
    cursor:pointer;
    &:hover {
      background:rgba(0 0 0 /80%);
    }
    svg {
      width:80%;
      height:80%;
      color:#fff;
    }
    &.right {
      right:0;
      top:50%;
      transform:translateY(-50%);
    }
    &.left {
      left:0;
      top:50%;
      transform:translateY(-50%);
    }

  }
  
  .detailsImageWrapper {
  width:100%;
  position:relative;
  display:grid;
  grid-template-columns:repeat(4, 100%);
  overflow:hidden;
  @media (min-width:780px) {
      height:50rem;
  }
  .imagesWrapper {
    width:100%;
    transition:all .6s ease-in-out;
    @media (min-width:780px) {
      height:100%;
     }
    img {
    width:100%;
    object-fit: cover;
      @media (min-width:1600px) {
      height:100%;
      object-fit:cover;
      }
      @media (min-width:780px) {
      height:100%;
     }
    }
  }
 }
 }
 
`
