import React from 'react'
import styled from 'styled-components'
import CheckOutindex from '../components/checkout'
export default function Checkout() {
  return (
    <CheckOutContent>
        <CheckOutindex/>
    </CheckOutContent>
  )
}


const CheckOutContent = styled.div`
width:100%;
`
