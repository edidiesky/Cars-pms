import React from 'react'
import Styled from 'styled-components'
import {ImLocation} from 'react-icons/im'
import {BsTelephoneFill} from 'react-icons/bs'
import {AiFillCreditCard} from 'react-icons/ai'
import {BiPlus, BiMinus} from 'react-icons/bi'

export default function DetailsTopRight() {
  return (
    <DetailsTopRightContainer>
        <div className="contentTop">
            <h2>Ford EcoSport 2021
                <span>1.5 Zetec Compact SUV 112 Pshift</span>
            </h2>
            <h3>$30,650.00</h3>
        </div>
       <p>
          This car has the best options and features
           for a sports car. Inc dunt labore dolore magna aliqua enim veniam 
           quis nostrud mini ys exercitation ullamco sed laboris.  
       </p>
       <div className="contentBottom">
         <div className="location">
            <ImLocation/>
            <h4><span>Location: </span> Westmont, Florida 33202</h4>
         </div>
         <div className="location">
            <BsTelephoneFill/>
            <h4><span>Contact Dealer via Phone:</span> (246) 500-5188 / 5189</h4>
         </div>
         <div className="location">
            <AiFillCreditCard/>
            <h4><span>Financing Options: </span>Yes Available</h4>
         </div>
         <div className="btnContainer">
            <div className="btnWrapper">
                 <button className='cartBtn'><BiPlus/></button>
                 <h3>1</h3>
                <button className='cartBtn'><BiMinus/></button>
            </div>
            <button className='addBtn'>Add to Cart</button>
         </div>
         
       </div>
    </DetailsTopRightContainer>
  )
}


const DetailsTopRightContainer = Styled.div`
width:90%;
display:flex;
flex-direction:column;
gap:1.6rem;
  .contentCenter {
    width:100%;
    display:flex;
   flex-direction:column;
   gap:4rem;
    .contentCenterIcons {
        padding-bottom:4rem;
        border-bottom:1px solid #ccc;
        width:90%;
        margin:0 auto;
        display:grid;
        grid-template-columns:repeat(3, 1fr);
        grid-gap:2rem;

        .iconWrapper {
            display:flex;
            flex-direction:column;
            gap:1.6rem;
            h4 {
                font-size:1.8rem;
                font-weight:400;
                color:var(--grey-1);
            }
            .icons {
                width:12rem;
                height:13rem;
                border:1px solid var(--blue-1);
            }
        }

    }
    h3 {
        font-size:2.7rem;
        font-weight:700;
        color:var(--dark-1);
    }
  }

  .contentBottom {
    width:90%;
    display:flex;
    flex-direction:column;
    gap:1rem;
    margin:0 auto;

    .btnContainer {
        width:100%;
        display:flex;
        align-items:center;
        gap:2rem;
     .btnWrapper {
                    display:flex;
                    align-items:center;
                    height:4rem;
                    border-radius:6px;
                    gap:1rem;
                    margin:2.5rem 0;
                    h3 {
                        font-size:3rem;
                        font-weight:600;
                        color:#333;
                    }
                    .cartBtn {
                        border:none;
                        outline:none;
                        width:7rem;
                        height:100%;
                        background:rgb(0 0 0 / 8%);
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        cursor:pointer;
                        &:hover {
                            background:rgb(0 0 0 / 13%);
                            svg {
                                color:var(--dark-1);
                            }
                        }
                        svg {
                            width:2rem;
                            height:2rem;
                            color:#333;
                        }
                    }

                }

    .addBtn {
      border:none;
      outline:none;
      padding:1.6rem 2rem;
      background:var(--blue-1);
      color:#fff;
      width:200px;
      font-size:1.7rem;
      color:#fff;
      cursor:pointer;
      &:hover {
        background:var(--red);
      }
    }
}
    .location {
        width:100%;
        display:flex;
        align-items:center;
        gap:2rem;
        line-height:2;
        svg {
            font-size:2.4rem;
            color:var(--blue-1);
        }
        h4 {
            font-size:1.6rem;
            color:#222;
            font-weight:600;
            span {
                font-weight:400;
                color:var(--grey-1);
            }
        }
    }
  }

 .contentTop {
    width:100%;
    display:flex;
    flex-direction:column;
    gap:3rem;
    padding-bottom:3rem;
    border-bottom:1.3px solid #ccc;
     h2 {
        font-size:4rem;
        font-weight:700;
        color:var(--dark-1);
        span {
            font-weight:400;
            color:var(--grey-1);
            font-size:1.9rem;
            display:block;
            padding-top:2rem;
        }
     }
     h3 {
        font-size:3rem;
        font-weight:600;
        color:var(--red);
     }
 }
 p{
        font-size:1.8rem;
        font-weight:400;
        color:var(--grey-1);
        padding:2rem 0;
        line-height:2;
     }
`