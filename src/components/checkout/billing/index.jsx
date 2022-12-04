import React from 'react'
import styled from 'styled-components'
import {Input} from '../../forms'
export default function Billingindex({index}) {
  return (
    <BillingIndexContainer className={index === 0? 'active':''}>
      <h2>Billing Details</h2>
      <div className="formWrapper">
        <div className="inputWrapper">
        <Input
        id={'firstname'}
        type={'text'}
        name={'first Name'}
        text={'first Name'}
        />
        <Input
        id={'lastname'}
        type={'text'}
        name={'Last Name'}
        text={'Last Name'}
        />
        </div>

        <Input
        id={'Company Name (optional)'}
        type={'text'}
        name={'Company Name'}
        text={'Company Name'}
        />

        <Input
        id={'Country'}
        type={'text'}
        name={'Country'}
        text={'Country'}
        />

        <Input
        id={'Street Address'}
        type={'text'}
        name={'Street Address'}
        text={'Street Address'}
        />

        <Input
        id={'Town / City'}
        type={'text'}
        name={'Town / City'}
        text={'Town / City'}
        />

        <Input
        id={'State'}
        type={'text'}
        name={'Phone'}
        text={'Phone'}
        />

        <Input
        id={'Email Address'}
        type={'email'}
        name={'email'}
        text={'Email'}
        />
        <div className="btnWrapper">
          <button className="btn">Continue</button>
        </div>
      </div>
    </BillingIndexContainer>
  )
}

const BillingIndexContainer = styled.div`
width:100%;
display: none;
&.active {
  display: block;
}
 h2 {
  font-size: 4rem;
  font-weight: 600;
  color: var(--dark-1);
  padding-bottom: 2rem;
  border-bottom: 1px solid #Ccc;
 }

 .formWrapper {
  padding: 2rem 0;
  width:100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;
  .btnWrapper {
    width:100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .btn {
      border: none;
      outline: none;
      padding: 1.8rem 3rem;
      font-size: 1.8rem;
      color: #fff;
      background-color: var(--red);
      cursor: pointer;
      &:hover {
        background-color: var(--blue-1);
      }
    }
  }
  .inputWrapper {
    width:100%;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 2rem;
  }
 }
`
