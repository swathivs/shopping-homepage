import './App.css';
import Card1 from './Card1.js';
import Card2 from './Card2.js';
import Card3 from './Card3.js';
import Card4 from './Card4.js';
import Card6 from './Card6.js';
import { Cart } from './Cart';
import { CenterSection } from './CenterSection';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useState } from 'react';

function App() {
  const [count,setCount]=useState(0);
  function Counter(added){
    added ? setCount((x)=>x+1) : setCount((x)=>x-1)
  }
  return (
    <div className="App">
      <div className='d-flex'>
      <Navbar />
      <Cart value={count} /></div> 
      <CenterSection />
      <div className='d-flex flex-row flex-wrap allCard'>
      <Card1 />
      <Card2 value={count} Counter={Counter} />
      <Card3 value={count} Counter={Counter}/>
      <Card4 value={count} Counter={Counter}/>
      <Card3 value={count} Counter={Counter}/>
      <Card6 />
      <Card2 value={count} Counter={Counter}/>
      <Card4 value={count} Counter={Counter}/>
    </div>
      <Footer />  
    </div>
  );
}

export default App;
