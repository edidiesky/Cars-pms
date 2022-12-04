import React from 'react'
import Styled from 'styled-components'
import {BiCheck} from 'react-icons/bi'

export default function Newsletter() {
    const data = [
        {id:1, title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {id:2, title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {id:3, title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {id:4, title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {id:5, title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
    ]
  return (
    <NewsletterContent>
        <div className="newsletterWrapper">
            <div className="newsletterLeft">
                <h2>Trusted Buying Experience
                    <span>Incididunt labore magna aliqua veniams</span>
                </h2>

                <button className="startBtn">Get Started</button>
            </div>
            <ul className="newsLetterRight">
                {data.map(x=> {
                    return <li key={x.id}><BiCheck/> {x.title}</li>
                })}
            </ul>
        </div>
    </NewsletterContent>
  )
}

const NewsletterContent = Styled.div`
width:100%;
margin:0 auto;
max-width:1600px;
z-index:50;
position:relative;
transform:translateY(50px);
 .newsletterWrapper {
    width:90%;
    margin:0 auto;
    background:var(--blue-2);
    padding:10rem;
    display:grid;
    z-index:50;
    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
    grid-gap:3rem;
    grid-row-gap:12rem;  
    @media (max-width:1080px) {
        width:100%;
        padding:10rem 4rem;
        margin:0;
    }
    .newsletterLeft {
        display:flex;
        flex-direction:column;
        gap:3rem;
        align-items:flex-start;
        h2 {
            font-size:4rem;
            font-weight:700;
            color:#fff;

            span {
                display:block;
                font-size:2rem;
                padding:2rem 0;
                font-weight:600;
            }
        }
        .startBtn {
                border:none;
                outline:none;
                padding:2rem 3.5rem;
                font-size:2rem;
                color:#fff;
                background:var(--red);
                &:hover {
                    opacity:.8;
                }
        }
    }
    .newsLetterRight {
        display:flex;
        flex-direction:column;
        gap:2rem;
        @media (max-width:1080px) {
            gap:4rem;
        }
        li {
            font-size:1.8rem;
            font-weight:400;
            color:#fff;
            display:flex;
            align-items:center;
            gap:1.5rem;
            svg {
                width:3rem;
                height:3rem;
            }
        }
    }
 }
`
