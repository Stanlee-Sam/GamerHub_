import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { apiUrl } from "../../utils/config";

const Consoles = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `${apiUrl}/api/products/category/Gaming Consoles`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data.data);
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p> Error: {error}</p>;
  return (
    <section className="accessories-section">
      <h1>Accessories</h1>
      <p>All the accessories here</p>
      <div className="all-container">
        {products.map((product) => (
          <div className="item-container" key={product.id}>
            <div className="img-container">
              <img src={product.images[0]} alt={product.name} />
            </div>
            <div className="body-container">
              <div className="body-container">
                <div className="overlay"></div>
                <div className="event-info">
                  <p className="title">{product.name}</p>
                  <div className="separator"></div>

                  <div className="additional-info">
                    <p className="info">{renderStars(product.rating)}</p>

                    <p className="info-description">
                      {product.description}
                      <p>Ksh {product.price}</p>
                    </p>
                  </div>
                </div>
                <button className="action">Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Consoles;
