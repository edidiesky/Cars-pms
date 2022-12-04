import React from 'react'
import Styled from 'styled-components'
import {BiChevronDown} from 'react-icons/bi'

export default function Options() {
    const optionContent1data = [
        {id:1, title:'price'},
        {id:2, title:'Name'},
        {id:3, title:'date'},
        {id:4, title:'Popularity'},
        {id:5, title:'rating'}
    ]
    const optionContent2data = [
        {id:1, title:'24'},
        {id:2, title:'26'},
        {id:3, title:'30'}
    ]
  return (
    <OptionsContent>
        <div className="optionContent1">
          <div className="optionContent1Top">
            <h4>Sort By <span>Price</span></h4>
            <div className="icon"><BiChevronDown/></div>
          </div>
          <ul className="option1List">
            {optionContent1data.map(x=> {
                return <li key={x.id}>{x.title}</li>
            })}
          </ul>
        </div>
        <div className="optionContent2">
            <div className="optionContent2Top">
              <h4>show <span>10 products</span></h4>
              <div className="icon"><BiChevronDown/></div>
          </div>
          <ul className="option2List">
            {optionContent2data.map(x=> {
                return <li key={x.id}>{x.title}</li>
            })}
          </ul>
        </div>
    </OptionsContent>
  )
}
const OptionsContent = Styled.div`
width:100%;
display:flex;
gap:2rem;
.option1List {
    bottom:-510%;
    position:absolute;  
}
.option2List {
    bottom:-300%;
    position:absolute;  
}

 .optionContent1, .optionContent2 {
    display:flex;
    flex-direction:column;
    position:relative;
    height:4rem;
    &:hover .option1List{
        display:block;
    }
    &:hover .option2List {
        display:block;
    }
    .option1List, .option2List {
    width:26rem;
    position:absolute;  
    background:#fff;
    z-index:400;
    display:none;
    li {
        width:100%;
        padding:1.2rem 2.4rem;
        border:1px solid #ccc;
        cursor:pointer;
        font-size:1.3rem;
        color:var(--grey-1);
        &:hover {
            background:rgba(0 0 0 /5%);
        }
    }
    }
.optionContent1Top, .optionContent2Top {
display:flex;
align-items:center;
cursor:pointer;
height:100%;
h4 {
    width:20rem;
    border:1px solid #ccc;
    padding:0 2.4rem;
    height:100%;
    font-size:1.4rem;
    color:var(--grey);
    font-weight:400;
    display:flex;
    align-items:center;
    gap:1rem;
    span {
        color:var(--dark-1);
        font-weight:600;
    }
}
.icon {
    height:100%;
    width:6rem;
    display:flex;
    align-items:center;
    justify-content:center;
    border:1px solid #ccc;
    svg {
        color:var(--grey);
        font-size:1.7rem;
    }
}
}

 }



`
