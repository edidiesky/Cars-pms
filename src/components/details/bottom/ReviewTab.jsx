import React from 'react'
import Styled from 'styled-components'
import Form from './Form'

export default function ReviewTab({tabIndex}) {
  return (
  <ReviewTabContainer className={tabIndex === 1? 'active':""}>
      <div className="reviewBottomWrapper">
          <div className="detailsBottomFormWrapper">
            <h2>Reviews</h2>
             <div className="noReviewsInfo">
               <h4>There are no reviews yet</h4>
               <div className="reviewStatement">
                <h4>Be the first to review 'Audi S4 2020'</h4>
                <h4>Your email will not be published. Required fields are marked</h4>
               </div>
             </div>
             {/* select options category */}
             {/* form section */}
             <Form/>
          </div>
      </div>
      
    </ReviewTabContainer>
  )
}


const ReviewTabContainer = Styled.div`
width:100%;
background:#fff;
width:100%;
display:none;
&.active {
    display:block;
}
 .reviewBottomWrapper {
  width:100%;
   h1 {
    font-size:6rem;
    font-weight:700;
    color:var(--dark-1);
    @media (max-width:980px){
     font-size:5rem;
    }
   }
   .reviewInfo {
    width:100%;
    padding:1.8rem 0;
    display:flex;
    align-items:center;
    justify-content:space-between;
    @media (max-width:780px) {
      padding:2rem 0;
      flex-direction:column;
      align-items:flex-start;
      gap:2rem;
    }

    h3 {
      font-size:2rem;
      font-weight:200;
      color:var(--blue-1);
    }
    .reviewBtn {
      border:none;
      outline:none;
      padding:2rem 4rem;
      background:var(--red);
      color:#fff;
      font-size:1.9rem;
      color:#fff;
      cursor:pointer;
      &:hover {
        background:var(--blue-1);
      }
      @media (max-width:980px){
        padding:1.6rem 4rem;

      }
    }
   }
   .detailsBottomFormWrapper {
    padding:6rem 4rem;
    background:#Fff;
    width:100%;
    border-radius:8px;
    display:flex;
    flex-direction:column;
    gap:4rem;
     @media (max-width:780px) {
      padding:6rem 4rem;
    }

    h2 {
      font-size:4rem;
      font-weight:600;
      color:var(--dark-1);
    }

    .noReviewsInfo {
      display:flex;
      flex-direction:column;
      gap:5rem;


      h4 {
      font-size:1.8rem;
      font-weight:400;
      color:var(--blue-2);
      }

      .reviewStatement {
        width:100%;
        display:flex;
        flex-direction:column;
        gap:1rem;
      }
    }

    
   }
 }

`