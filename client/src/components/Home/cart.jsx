
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './cart.css'
const Cart = () => {
  return (
    <section className="cart-page">
        
        <br />
        <br />
        <h3>Cart</h3>
        <div className="headline">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        <div className="prod-details">
          <div className="img-details">
            <div className="imgop">

            </div>
            <div className="desop">
              <p>Play station</p>
              <p>Black</p>
              <p><a href="">Remove</a></p>
            </div>
          </div>
          <div className="priceop">
            <p>ksh 53,000</p>
          </div>
          <div className="counter">
            <button> - </button>
            <span>1</span>
            <button> + </button>
          </div>
          <div className="total-price">
            <p>ksh 53,000</p>
          </div>
        </div>
        <div className="summary">
          <div className="total-amount">
            <p>Subtotal</p>
            
            <p> ksh 58,000</p>
          </div>
          <button className="checkout-btn">Login to checkout</button>
          <p><a href="/shop/all">Continue Shopping</a></p>
        </div>

       

    </section>
  )
}

export default Cart
