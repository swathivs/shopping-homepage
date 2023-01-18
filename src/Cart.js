export function Cart({value}) {
  return (
    <div>
      <button className="btn pic btn-outline-dark">
        {/* <img className='cartPic' src="./cart.png" alt="cart" />  Cart */}
        🛒  Cart&nbsp;<span className='badge ms-1 bg-dark text-white num'>{value}</span>
      </button>
    </div>
  );
}
