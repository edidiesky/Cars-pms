import React from 'react'
import styled from 'styled-components'

export default function Input({type, name, id, text}) {
  return (
    <LabelContainer htmlFor={id}>
        {text}
        <input
          type={type}
          name={name}
          id={id}
          placeholder ={text}
        />
    </LabelContainer>
    
  )
}

const LabelContainer = styled.label`
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.6rem;
    font-size: 1.8rem;
    color: var(--dark-1);
    font-weight: 400;
    text-transform: capitalize;
    input {
        height: 6rem;
        border-radius: 7px;
        padding: 0 2.4rem;
        width: 100%;
        border: 1px solid #Ccc;
        outline: none;
        font-size: 1.6rem;
        font-weight: 400;
        font-family: inherit;
        text-transform: capitalize;
        &:focus {
            border: 1px solid #333;
        }
    }
`
