import React from 'react'
import Styled from 'styled-components'

const data = [
    {
        id:1,
        title:'Get Instant Cash For Trade-In', 
        image:'../images/engine.jpeg',
        desc:'Fair & Instant Cash Offer In Minutes.',
        btntext:'Apply Now'
    },
    {
        id:2,
        title:'Car Workshop Services', 
        image:'../images/bmw.jpg',
        desc:'All Garage Services Under One Roof',
        btntext:'Book Inspection'
    },
]
export default function Banner4() {
  return (
    <Banner4Container>
        <div className="banner4Wrapper">
        {data.map(x=> {
            return <header key={x.id}>
                    <img src={x.image} alt="images" />
                    <div className="banner4Gradient"></div>
                    <div className="headerContent">
                        <h2>{x.title}</h2>
                        <p>{x.desc}</p>
                        <button className="btn">{x.btntext}</button>
                    </div>
                
            </header>
        })}
        </div>
    </Banner4Container>
  )
}



const Banner4Container = Styled.div`
width:100%;
 .banner4Wrapper {
    width:90%;
    margin:0 auto;
    z-index:1000;
    padding:3rem 0;
    max-width:1600px;  
    display:grid;
    grid-template-columns:repeat(2,1fr);
    grid-gap:6rem;
     @media (max-width:780px){
        grid-template-columns:repeat(1,1fr);
        grid-row-gap:4rem;
    }
    header {
        display:flex;
       flex-direction:column;
        gap:1.8rem;
        width:100%;
        height:50rem;
        position:relative;
            img {
                width:100%; 
                position:absolute;
                height:100%;
                object-fit:cover;
            }
            .banner4Gradient {
                position:absolute;
                height:100%;
                width:100%;
                background:linear-gradient(120deg,var(--gradient1) 0,#000000b3 50%,#000000ab 50%);
                z-index:40;
            }
        .headerContent {
            width:80%;
            height:100%;
            margin:0 auto;
            z-index:80;
            display:flex;
            justify-content:center;
            align-items:flex-start;
            flex-direction:column;
            gap:3rem;
            .btn {
                border:none;
                outline:none;
                padding:2rem 3rem;
                font-size:1.8rem;
                color:#fff;
                margin:2rem 0;
                border:1px solid #fff;
                background:transparent;
                &:hover {
                    background:#fff;
                    color:var(--dark-1);
                }
            }
            p {
            font-size:2.4rem;
            font-weight:400;
            line-height:1.5;
            width:80%;
            color:#f7f7f7;
            z-index:60;
             @media (max-width:480px) {
                font-size:1.8rem;
            }
        }
        h2 {
            font-size:5rem;
            font-weight:700;
            color:#fff;
            padding-right:8rem;
            z-index:60;
            @media (max-width:980px) {
                font-size:4rem;
                width:100%;
                padding-right:3rem;
            }
        }
        }
    }
}
 }
`
