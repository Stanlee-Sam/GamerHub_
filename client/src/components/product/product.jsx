import "./product.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Product = () => {
  const renderStars = (rating) => {
    return (
      <div className="rating">
        {[...Array(5)].map((star, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            color={index < rating ? "#ffc107" : "#e4e5e9"}
          />
        ))}
      </div>
    );
  };
  return (
    <section className="product-page">
      <div className="product-pic">
        <div className="variety">
          <div className="pic1">
            <img src="../../../src/assets/blue ps4.jpeg" alt="" />
          </div>
          <div className="pic2">
            <img src="../../../src/assets/blue ps4.jpeg" alt="" />
          </div>
          <div className="pic3">
            <img src="../../../src/assets/blue ps4.jpeg" alt="" />
          </div>
        </div>
        <div className="active-pic">
          <img src="../../../src/assets/blue ps4.jpeg" alt="" />
        </div>
      </div>
      <div className="details">
        <h2>PlayStation 4</h2>
        <h3>Ksh 53,000</h3>
        <p className="info">{renderStars(4)}</p>
        <p className="des">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy
          eleifend, nunc a fermentum tristique, justo mauris eleifend mi, in
          lobortis mi velit vel massa. Vestibulum auctor, lectus vitae semper
          feugiat, metus dolor fermentum velit, vel pharetra ligula dui eget
          urna.
        </p>
        <div className="color-btns">
          <div className="label">
            <label>
              <strong>Color: </strong>
            </label>
          </div>
          <div className="btn-circle">
            <button className="color-btn active"></button>
            <button className="color-btn"></button>
            <button className="color-btn"></button>
          </div>
        </div>
        <div className="counter">
          <div className="label">
            <label>
              <strong>Quantity: </strong>
            </label>
          </div>
          <div className="counter-btns-count">
            <button> - </button>
            <span className="product-span">1</span>
            <button> + </button>
          </div>
        </div>
        <button className="checkout-btn">Add to Cart</button>
      </div>
    </section>
  );
};

export default Product;
