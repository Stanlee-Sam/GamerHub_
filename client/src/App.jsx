// import Signup from "./components/signup/signup";
// import Login from "./components/login/login";
import Navbar from "./components/Home/Navbar";
import Home from "./components/Home/home";
// import Shopapp from "./components/Shop/shopapp";
import Contact from "./components/contact/contact";
import Footer from "./components/Home/footer";
import Cart from "./components/Home/cart";
import Shopjunction from "./components/Shop/shopjunction";

import {BrowserRouter, Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <>

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/shop/*" element={<Shopjunction />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />

    </Routes>
    <Footer />
    
    </BrowserRouter>      {/* <Signup/>
    <Login/> */}
      {/* <Navbar />
      <Home /> */}

      
    </>
  );
};

export default App;
