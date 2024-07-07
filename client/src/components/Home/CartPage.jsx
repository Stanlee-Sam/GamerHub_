import PropTypes from 'prop-types';
import Cart from '../Home/cart'; 

const CartPage = ({ cart, setCart }) => {
  return (
    <div>
      <h2>Cart Page</h2>
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
};

CartPage.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default CartPage;
