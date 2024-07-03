import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="Navbar">
      <h1>GamerHub</h1>

      <div className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop/all">Shop</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <div className="nav-icons">
          
          <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link>
          <Link to="/cart"><FontAwesomeIcon icon={faUser} /></Link>

            
        
          
        </div>
      </div>
    </section>
  );
};

export default Navbar;
