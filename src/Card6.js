import './App.css';

const cardData=[
    {
      pic:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Fancy Product",
      rating: "⭐⭐⭐⭐⭐",
      amount: "$120.00 - $280.00",
      button: "View Options"
  },]
function Card6(){
   return(
    <div>{cardData.map((x)=>{
        return(
            <div class="card">
            <img src={x.pic} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{x.title}</h5>
              <p class="card-text">{x.amount}</p>
              <p class="card-text invisible">{x.rating}</p>
              
              <button type="button" class="btn btn-outline-dark">{x.button}</button>
            </div>
          </div>
        )
    })}</div>
    
   )
    
  }
  export default Card6;