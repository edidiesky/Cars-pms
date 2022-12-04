import React from 'react'
import styled from 'styled-components/macro'

export default function Paymentindex({index}) {
  return (
    <PaymentIndexContainer className={index === 1? 'active':""}>
        <div className="paymentTop">
            <h3>Product</h3>
            <h3>SubTotal</h3>
        </div>
        <div className="paymentCenter">
            <div className="paymentContentLeft">
                <img src="/images/car4.jpg" alt="images" className='images' />
                <h3>Jeep Grand Charokee 2021</h3>
            </div>
           <h3>$2,928,374.00</h3>
        </div>
        <div className="paymentBottom">
            <h4>Subtotal <span className="subspan">$1479,00</span></h4>
            <h4>Total <span className="subspan span1">$1479,00</span></h4>
        </div>
        <div className="paymentBottom1">
            <p>Your Personal data will be used to process your order, support your experiences throughout
                this website, and for other purposes described in our <span className="pspan">privacy policy</span>
            </p>
            <div className="placeBtnWrapper">
                <button className="placeBtn">Place Order</button>
            </div>
            
        </div>
    </PaymentIndexContainer>
  )
}

const PaymentIndexContainer = styled.div`
width:100%;
display: none;
&.active {
    display:block;
}
  .paymentBottom1 {
    width: 100%;
    padding: 2rem 0;
    padding-bottom: 3rem;
    border-bottom: 1px solid #Ccc;
    p {
        width: 100%;
        font-size: 2rem;
        line-height: 1.6;
        color: var(--grey);
        font-weight: 300;
        .pspan {
            color: var(--blue-1);
            font-weight: 600;
        }
    }
    .placeBtnWrapper {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-top: 3rem;

        .placeBtn {
            padding: 2.4rem 4rem;
            background-color: var(--red);
            font-size: 2rem;
            color: #fff;
            border: none;
            outline: none;
            cursor: pointer;
            &:hover {
                background-color: var(--blue-1);
            }
        }
    }
  }
  .paymentBottom {
    width:100%;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    flex-direction:column;
    gap:2rem;
    padding:3rem 0;
    border-bottom: 1px solid #ccc;
    h4 {
        text-align:end;
        width:100%;
        display:flex;
        justify-content:flex-end;
        align-items:center;
        gap:16rem;
        font-size:2.4rem;
        color:var(--dark-1);
        .subspan {
            font-weight:300;
            font-size:2rem;
            &.span1 {
                color:var(--blue-1); 
                font-weight:600;
                font-weight:400;
                    
            }display:flex;
    justify-content:flex-end;
    align-items:center;
    flex-direction:column;
    gap:2rem;
        }
    }
  }
 .paymentCenter {
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-bottom:1px solid #ccc;
    padding:2rem 0;
    padding-bottom:2.4rem;

    .paymentContentLeft {
        width:100%;
        display:flex;
        align-items:center;
        gap:3rem;
        .images {
            width:12rem;
        }
        h3 {
            font-size:2rem;
            color:var(--dark-1);
            font-weight:300;
        }
    }
    h3 {
            font-size:2rem;
            color:var(--dark-1);
            font-weight:300;
        }
 }
 .paymentTop {
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-bottom:1px solid #ccc;
    padding-bottom:1.4rem;
    h3 {
        font-size:2.4rem;
        color:var(--dark-1);
        font-weight:600;
    }
 }
`
