import { useState,useEffect } from "react";
import Signup from "./components/signup/signup";
import Home from "./components/Home/home";
import Login from "./components/login/login";
import Navbar from "./components/Home/Navbar";
// import Home from "./components/Home/home";
import Contact from "./components/contact/contact";
import Footer from "./components/Home/footer";
// import Cart from "./components/Home/cart";
import Shopjunction from "./components/Shop/shopjunction";
import CartPage from "./components/Home/CartPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop/*" element={<Shopjunction cart={cart} setCart={setCart} />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cartpage" element={<CartPage cart={cart} setCart={setCart} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
