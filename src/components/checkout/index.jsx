import React, {useState} from 'react'
import styled from 'styled-components'
import { Banner2 } from '../common'
import Billingindex from './billing'
import Paymentindex from './payment'

export default function CheckOutindex() {
    const [index, setIndex] = useState(0)
  return (
    <CheckOutindexContainer>
        <Banner2 title='Checkout' step1 step2='Checkout'/>
        <div className="checkoutIndexTop">
            <p>Hello</p>
            <p>Need Assistance? Call customer service at 888-555-5555.</p>
            <p>E-mail them at info@yourshop.com</p>
        </div>
        <div className="checkOutWrapper">
            <div className="tabBtnWrapper">
                <button className="tabBtn" onClick={()=> setIndex(0)}>Billing Address</button>
                <button className="tabBtn" onClick={()=> setIndex(1)}>Review & Payment</button>
            </div>
            <div className="checkOutContent">   
                <Billingindex index={index}/>
                <Paymentindex index={index}/>
            </div>
        </div>
    </CheckOutindexContainer>
  )
}

const CheckOutindexContainer = styled.div`
width:100%;
.checkoutIndexTop {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #Ccc;
    border-bottom: 1px solid #ccc;
    @media (max-width:780px) {
        flex-direction: column;
    }
    p {
        font-size: 1.8rem;
        font-weight: 300;
        color: var(--grey);
        padding: 2.5rem;
        border-right: 1px solid #ccc; 
        @media (max-width:780px) {
        border-bottom: 1px solid #Ccc;
        border-right: none;
        width: 100%;
       }
    }
}
 .checkOutWrapper {
    width:90%;
    display:grid;
    grid-template-columns:16vw 1fr;
    margin:0 auto;
    padding:8rem 0;
    grid-gap:3rem;
    @media (max-width:980px){
        grid-template-columns: 1fr;
    }

    .checkOutContent {
        border:1px solid #ccc;
        padding:3rem;
        width: 100%;
    }

    .tabBtnWrapper {
        display:flex;
        flex-direction:column;
        gap:1rem;
        align-items:flex-start;
        .tabBtn {
            padding:1.8rem 0;
            border:none;
            outline:none;
            width:100%;
            text-align:start;
            border-bottom:1px solid #ccc;
            background:transparent;
            font-size:2rem;
            font-weight:300;
            color:var(--blue-1);
            cursor: pointer;
            
        }
    }
 }
`
