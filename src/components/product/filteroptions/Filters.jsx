import React from 'react'
import Styled from 'styled-components'

const filterData = [
    {id:1, color:'#222222',title:'black'},
    {id:2, color:'#BD162D',title:'red'},
    {id:4, color:'#f7f7f7',title:'Grey'},
    {id:3, color:'#23608c',title:'blue'},
    {id:5, color:'#fff',title:'White'},
]
export default function Filters() {
  return (
    <FilterContent>
        {filterData.map((x)=> {
            return <div className="filterContentWrapper" key={x.id}>
        <div className="filterContentLeft">
         <div className="filterIcon">
            <div className="icon" style={{background:`${x.color}`}}></div>
         </div>
         <h3>{x.title}</h3>
         </div>
          <div className="filterContentRight">
            <h4>(7)</h4>
          </div>
      </div>
        })}
      
    </FilterContent>
  )
}


const FilterContent = Styled.div`
width:100%;
display:flex;
flex-direction:column;
gap:2rem;
 .filterContentWrapper {
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding-bottom:2rem;
    border-bottom:1px solid #ccc;
    cursor:pointer;
    &:hover {
        .filterContentLeft {
            .filterIcon {
                border:1.5px solid #000;
            }
        }
    }

    .filterContentRight {
        h4 {
            font-size:1.8rem;
            font-weight:600;
            color:var(--blue-1);
        }
    }

    .filterContentLeft {
        width:100%;
        display:flex;
        align-items:center;
        gap:1.5rem;

        h3 {
            font-size:1.7rem;
            font-weight:400;
            color:var(--dark-1);
            text-transform:capitalize;
        }
        .filterIcon {
            width:6rem;
            height:5rem;
            border:1px solid #ccc;
            display:grid;
            place-items:center;
            border-radius:5px;
            transition:all .3s;
            .icon {
                width:90%;
                height:90%;
                border-radius:5px;
            }
        }
    }
 }
`
