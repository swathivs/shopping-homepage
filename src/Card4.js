import { useState } from 'react';
import './App.css';

const cardData=[
    {
      pic:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Popular Item",
      rating: "⭐⭐⭐⭐⭐",
      finalamount:"$40.00",
  },]
function Card4({Counter}){
  const [show,setShow]=useState(true)
   return(
    <div>{cardData.map((x)=>{
        return(
            <div class="card">
            <img src={x.pic} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{x.title}</h5>
              <p class="card-text">{x.rating}</p>
              <p class="card-text">{x.finalamount}</p>            
              <button type="button" class="btn btn-outline-dark"
              onClick={()=>{
                setShow(!show);
                Counter(show);
              }}>{show ? "Add to Cart" : "Remove Item"}</button>
            </div>
          </div>
        )
    })}</div>
    
   )
    
  }
  export default Card4;