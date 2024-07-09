import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../utils/config";

const All = ({ searchQuery = "", cart, setCart }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/products`);
        const products = response.data.data; 
    
        if (!products || !Array.isArray(products)) {
          throw new Error('Invalid response structure: products array not found');
        }
    
        const filtered = products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    
        setFilteredProducts(filtered);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchQuery]); 

  const renderStars = (rating) => {
    return (
      <div className="rating">
        {[...Array(5)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            color={index < rating ? "#ffc107" : "#e4e5e9"}
          />
        ))}
      </div>
    );
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleAddToCart = (productId) => {
    const productToAdd = filteredProducts.find((product) => product.id === productId);
    if (productToAdd) {
      const existingProduct = cart.find((item) => item.id === productId);
      if (existingProduct) {
        const updatedCart = cart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        setCart(updatedCart);
      } else {
        setCart([...cart, { ...productToAdd, quantity: 1 }]);
      }
      console.log(`Added product ${productId} to cart`);
    }
  };

  if (loading) {
    return <p>Loading...</p>; // Placeholder for loading state
  }

  if (filteredProducts.length === 0) {
    return <p>No products found.</p>; // Handle case where no products match the search criteria or are fetched
  }

  return (
    <section className="all-products">
      <h3>All products</h3>
      <div className="all-container">
        {filteredProducts.map((product) => (
          <div className="item-container" key={product.id}>
            <div className="img-container">
              <img src={product.images[0]} alt={product.name} />
            </div>
            <div className="body-container">
              <div className="overlay"></div>
              <div
                className="event-info"
                onClick={() => handleProductClick(product.id)}
              >
                <p className="title">{product.name}</p>
                <div className="separator"></div>
                <div className="additional-info">
                  <div className="info">{renderStars(product.rating)}</div>
                  <div className="info-description">
                    {product.description}
                    <p>Ksh {product.price}</p>
                  </div>
                </div>
              </div>
              <button
                className="action"
                onClick={() => handleAddToCart(product.id)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

All.propTypes = {
  searchQuery: PropTypes.string,
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default All;
