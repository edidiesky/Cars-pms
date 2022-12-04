import React from 'react'
import Styled from 'styled-components'
import {Card} from '../../../common'

const data  =[
  {
    id:1,
    title:'Audi S4 2020',
    tags:['Manual','Petrol'," Blue"],
    price:'49,950.00',
    percentage:'4',
    capacity:'20,360',
    image:'../images/audi-3.jpg'
  },
  {
    id:2,
    title:'Tesla Model 3',
    tags:['Automatic','Electric'," Black"],
    price:'42,800.00',
    capacity:'207',
    image:'../images/citroen-2.jpg'
  },
   {
    id:3,
    title:'Jeep Grand Cherokee 2021',
    tags:['Automatic','Diesel',"Red"],
    price:'35,460.00',
    capacity:'207',
    image:'../images/car8.jpg'
  },
  {
    id:4,
    title:'BMW 118i 2020',
    tags:['Automatic','Petrol'," Blue"],
    price:'45,100.00',
    capacity:'207',
    image:'../images/dealer.jpg'
  },
  {
    id:5,
    title:'Nissan 350Z 2021',
    tags:['Manual','Petrol'," Blue"],
    price:'26,230.00',
    capacity:'36,500',
    image:'../images/benz-3.jpg'
  },
  {
    id:6,
    title:'Mercedes Benz AMG 2020',
    tags:['Manual','Petrol'," Blue"],
    price:'32,600.00',
    capacity:'53,120',
    image:'../images/ford.jpg',
    percentage:'5',
  }
]
export default function CollectionIndex() {
  return (
    <CollectionContainer>
       {data.map(x=> {
        return <Card x={x} key={x.id}/>
       })}
    </CollectionContainer>
  )
}

const CollectionContainer = Styled.div`
width:100%;
padding:6rem 0;
display:grid;
grid-template-columns:repeat(auto-fit, minmax(350px,1fr));
grid-row-gap:5rem;
grid-column-gap:2rem;
@media (min-width:1600px) {
  grid-template-columns:repeat(auto-fit, minmax(450px,1fr));
}
`
