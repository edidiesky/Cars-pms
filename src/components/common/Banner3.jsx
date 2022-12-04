import React from 'react'
import Styled from 'styled-components'
import {FaCar} from 'react-icons/fa'

const data = [
    {
        id:1,
        title:'Extensive Inventory', 
        image:<FaCar/>,
        desc:'Incididunt labore dolore magna aliqua enim veniam quis nostrud ad miniys exercitation ullamco laboris nisiut aliquip.'
    },
    {
        id:2,
        title:'Secure Car Financing', 
        image:<FaCar/>,
        desc:'Incididunt labore dolore magna aliqua enim veniam quis nostrud ad miniys exercitation ullamco laboris nisiut aliquip.'
    },
    {
        id:3,
        title:'Extensive Dealer Network', 
        image:<FaCar/>,
        desc:'Incididunt labore dolore magna aliqua enim veniam quis nostrud ad miniys exercitation ullamco laboris nisiut aliquip.'
    }
]
export default function Banner3() {
  return (
    <Banner3Container>
        <div className="serviceWrapper">
        {data.map(x=> {
            return <header key={x.id}>
                <div className="iconImage">
                   {x.image}
                </div>
                <h2>{x.title}</h2>
                <p>{x.desc}</p>
            </header>
        })}
        </div>
    </Banner3Container>
  )
}



const Banner3Container = Styled.div`
width:100%;
background:var(--gradient1);
 .serviceWrapper {
    width:90%;
    margin:0 auto;
    z-index:1000;
    padding:15rem 0;
    max-width:1600px;  
    display:grid;
    grid-template-columns:repeat(3,1fr);
    grid-gap:3rem;
     @media (max-width:780px){
        grid-template-columns:repeat(1,1fr);
        grid-row-gap:4rem;
    }
    header {
        display:flex;
       flex-direction:column;
        gap:1.8rem;
        .iconImage {
            width:20rem;
            height:15rem;
            margin:1rem auto;
            display:flex;
            align-items:center;
            justify-content:center;
            &:hover {
                svg {
                    color:var(--blue-1);
                }
            }
            svg {
                width:80%; 
                height:80%;
                color:#eee;
            }
        }
        p {
            font-size:2rem;
            font-weight:400;
            line-height:1.8;
            width:80%;
            margin:0 auto;
            text-align:center;
            color:#ccc;
             @media (max-width:480px) {
                font-size:1.8rem;
            }
        }
        h2 {
            font-size:3.2rem;
            font-weight:600;
            color:#fff;
            text-align:center;
            @media (max-width:480px) {
                font-size:2.8rem;
            }
        }
    }
}
 }
`
