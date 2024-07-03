import { Link } from "react-router-dom";
import "./shopapp.css";
const Shopapp = () => {
  return (
    <section className="shop-main">
      <br />
      <br />
      <br />
      <div className="search-bar">
        <input type="text" placeholder="Search" />
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
    </section>
  );
};

export default Shopapp;
