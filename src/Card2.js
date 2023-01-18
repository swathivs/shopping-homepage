import './App.css';
import { useState } from 'react';
const cardData=[
    {
      pic:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Special Item",
      rating: "⭐⭐⭐⭐⭐",
      initialamount: <s>$20.00</s>,
      finalamount:"$18.00",
  },]
function Card2({Counter}){
  const [show,setShow]=useState(true)
   return(
    <div>{cardData.map((x)=>{
        return(
            <div class="card">
             <div className=" badge bg-dark sale ">Sale</div>
            <img src={x.pic} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{x.title}</h5>
              <p class="card-text">{x.rating}</p>
              <p class="card-text">{x.initialamount} <span>{x.finalamount}</span></p>              
              <button type="button" class="btn btn-outline-dark" 
              onClick={()=>{setShow(!show);
              Counter(show);}}>{show ? "Add to Cart" : "Remove Item"}</button>
            </div>
          </div>
        )
    })}</div>
    
   )
    
  }
  export default Card2;