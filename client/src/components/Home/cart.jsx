import PropTypes from "prop-types";
import "./cart.css";

const Cart = ({ cart, setCart }) => {
  const handleRemoveClick = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    const updatedCart = cart.map((product) =>
      product.id === productId ? { ...product, quantity: newQuantity } : product
    );
    setCart(updatedCart);
  };

  const calculateSubtotal = () => {
    if (!cart || cart.length === 0) {
      return 0;
    }

    return cart.reduce(
      (total, product) => total + (product.price * product.quantity || 0),
      0
    );
  };

  return (
    <section className="cart-page">
      <h3>Cart</h3>
      <div className="headline">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>
      {cart && cart.length > 0 ? (
        cart.map((product) => (
          <div className="prod-details" key={product.id}>
            <div className="img-details">
              <img src={product.images[0]} alt={product.name} />
            </div>
            <div className="desop">
              <p>{product.name}</p>
              {/* <p>{product.description}</p> */}
              <p>
                <a href="#" onClick={() => handleRemoveClick(product.id)}>
                  Remove
                </a>
              </p>
            </div>
            <div className="priceop">
              <p>Ksh {product.price}</p>
            </div>
            <div className="counter">
              <button
                onClick={() =>
                  handleQuantityChange(product.id, product.quantity - 1)
                }
              >
                {" "}
                -{" "}
              </button>
              <span>{product.quantity}</span>
              <button
                onClick={() =>
                  handleQuantityChange(product.id, product.quantity + 1)
                }
              >
                {" "}
                +{" "}
              </button>
            </div>
            <div className="total-price">
              <p>Ksh {product.price * product.quantity}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      <div className="summary">
        <div className="total-amount">
          <p>Subtotal</p>
          <p>Ksh {calculateSubtotal()}</p>
        </div>
        <button className="checkout-btn">Login to checkout</button>
        <p>
          <a href="/shop/all">Continue Shopping</a>
        </p>
      </div>
    </section>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  setCart: PropTypes.func,
};

export default Cart;
