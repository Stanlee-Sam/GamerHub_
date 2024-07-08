import { Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";
import Shopapp from "./shopapp";
import All from "./all";
import Consoles from "./consoles";
import Pcs from "./pcs";
import Accessories from "./accessories";
import Product from "../../components/product/product";
// import AddProduct from "../Upload/AddProduct";
// import Cart from "../Home/cart"; 

const Shopjunction = ({ cart, setCart }) => {
  return (
    <>
      <Shopapp />
      <Routes>
        <Route path="/all" element={<All cart={cart} setCart={setCart} />} />
        <Route path="/consoles" element={<Consoles cart={cart} setCart={setCart} />} />
        <Route path="/pcs" element={<Pcs cart={cart} setCart={setCart} />} />
        <Route path="/accessories" element={<Accessories cart={cart} setCart={setCart} />} />
        <Route path="/product/:id" element={<Product cart={cart} setCart={setCart} />} />
        {/* <Route path="/upload" element={<AddProduct />} /> */}
        {/* <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} /> */}
      </Routes>
    </>
  );
};

Shopjunction.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default Shopjunction;
