import React from 'react'
import Styled from 'styled-components'
export default function Form() {
  return (
    <FormContainer>
        <label htmlFor="textarea">
            Your Review*
            {""}
            <textarea
            id='textarea'
            name='reviews'
            />
        </label>
        <label htmlFor="name">
            Your Name*
            {""}
            <input
            id='name'
            name='name'
            />
        </label>
        <label htmlFor="email">
            Your Email*
            {""}
            <input
            id='email'
            name='email'
            />
        </label>
        <button className="submitReviewBtn">
            Submit
        </button>
    </FormContainer>
  )
}


const FormContainer = Styled.div`
display:flex;
flex-direction:column;
gap:3rem;
width:100%;

 .submitReviewBtn{
     border:none;
      outline:none;
      padding:1.8rem 2rem;
      background:var(--red);
      color:#fff;
      width:250px;
      margin-top:2rem;
      font-size:1.8rem;
      color:#fff;
      cursor:pointer;
      &:hover {
        background:var(--blue-1);
      }
 }

 label {
    display:flex;
    flex-direction:column;
    gap:.6rem;
    width:100%;
    font-size:1.7rem;
    color:var(--blue-2);
    font-weight:600;
    input {
        height:6rem;
        width:100%;
        border:1px solid #ccc;
        outline:none;
        border-radius:8px;
        padding:2rem 2rem;
        font-family:inherit;
        &:focus {
            border:1px solid #333;
        }
    }
    textarea {
        outline:none;
        height:15rem;
        font-size:1.4rem;
        border:1px solid #ccc;
        border-radius:8px;
        padding:2rem 2rem;
        font-family:inherit;
        &:focus {
            border:1px solid #333;
        }
    }
 }
`