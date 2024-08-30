import { Link } from "react-router-dom";
import "./shopapp.css";
import { useState } from "react";
import All from "./all";

const Shopapp = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
  };

  const handleSearchButtonClick = () => {
    //
  };

  return (
    <section className="shop-main">
      <br />
      <br />
      <br />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
        />
        <button className="search-btn" onClick={handleSearchButtonClick}>
          Search
        </button>
      </div>
      <div className="types-bar">
        <Link to="/shop/all" className="type-link">
          All
        </Link>
        <Link to="/shop/consoles" className="type-link">
          Game Consoles
        </Link>
        <Link to="/shop/pcs" className="type-link">
          Game PCs
        </Link>
        <Link to="/shop/accessories" className="type-link">
          Accessories
        </Link>
      </div>

      <div className="banner-shop">
        <div className="card-banner">
          <div className="det">
            <h2>July Offer!</h2>
            <p>Get 50% off on selected items</p>
          </div>
          <div className="ban-img"></div>
        </div>
      </div>

      {/* Pass searchQuery as prop to All component */}
      <All searchQuery={searchQuery} cart = {cart} setCart = {setCart}/>
    </section>
  );
};

export default Shopapp;
