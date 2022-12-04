import React from 'react'
import Styled from 'styled-components'
import CollectionIndex from './collection'

export default function InventoryIndex() {
  return (
   <InventoryContainer>
     <div className="inventoryWrapper">
        <div className="inventoryTop">
            <h1>Latest Inventory</h1>
            <p>Incididunt labore dolore magna aliqua 
                enim veniam quis nostrud tempor tempor 
                adispecing miny exercitation ullamco laboris nisiut aliquip.</p>
        </div>
        <CollectionIndex/>
     </div>
   </InventoryContainer>
  )
}


const InventoryContainer = Styled.div`
width:100%;
 .inventoryWrapper {
    width:90%;
    margin:0 auto;
     max-width:1600px;
    display:flex;
    flex-direction:column;
    gap:3rem;
    padding:6rem 0;
    .inventoryTop {
        display:flex;
        aliign-items:center;
        justify-content:space-between;
        width:100%;
         @media (max-width:780px){
           flex-direction:column;
           gap:4rem;
         }
        h1 {
            font-size:5rem;
            font-weight:700;
            color:var(--dark-1);
            width:100%;
            @media (max-width:980px){
              font-size:5rem;
    }
        }
        
        p {
            font-size:2rem;
            color:var(--grey);
            font-weight:400;
            line-height:1.5;
            @media (max-width:480px) {
                font-size:1.8rem;
                line-height:1.7;
            }
        }
    }
 }
`