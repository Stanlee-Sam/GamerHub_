// import { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { apiUrl } from "../../utils/config";
// import { useNavigate } from "react-router-dom";
// import PropTypes from "prop-types"
// import Cart from "../Home/cart";


// const All = ({ searchQuery = "" }) => { 
//   const navigate = useNavigate();

//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await fetch(`${apiUrl}/api/products`);
//       if (!response.ok) {
//         throw new Error("Failed to fetch products");
//       }
//       const data = await response.json();
//       setProducts(data.data);
//       setLoading(false);
//     } catch (e) {
//       setError(e.message);
//       setLoading(false);
//     }
//   };

//   const renderStars = (rating) => {
//     return (
//       <div className="rating">
//         {[...Array(5)].map((star, index) => (
//           <FontAwesomeIcon
//             key={index}
//             icon={faStar}
//             color={index < rating ? "#ffc107" : "#e4e5e9"}
//           />
//         ))}
//       </div>
//     );
//   };

//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleProductClick = (productId) => {
//     navigate(`/product/${productId}`);
//   };

//   const handleAddToCart = (productId) => {
//     const productToAdd = products.find((product) => product.id === productId);
//     if (productToAdd) {
//       const existingProduct = cart.find((item) => item.id === productId);
//       if (existingProduct) {
//         const updatedCart = cart.map((item) =>
//           item.id === productId
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//         setCart(updatedCart);
//       } else {
//         setCart([...cart, { ...productToAdd, quantity: 1 }]);
//       }
//       console.log(`Added product ${productId} to cart`);
//     }
//   };

//   if (loading) return <p>Loading...</p>;

//   if (error) return <p>Error: {error}</p>;

//   return (
//     <section className="all-products">
//       <h3>All products</h3>
//       <div className="all-container">
//         {filteredProducts.map((product) => (
//           <div className="item-container" key={product.id}>
//             <div className="img-container">
//               <img src={product.images[0]} alt={product.name} />
//             </div>
//             <div className="body-container">
//               <div className="overlay"></div>
//               <div
//                 className="event-info"
//                 onClick={() => handleProductClick(product.id)}
//               >
//                 <p className="title">{product.name}</p>
//                 <div className="separator"></div>
//                 <div className="additional-info">
//                   <p className="info">{renderStars(product.rating)}</p>
//                   <p className="info-description">
//                     {product.description}
//                     <p>Ksh {product.price}</p>
//                   </p>
//                 </div>
//               </div>
//               <button
//                 className="action"
//                 onClick={() => handleAddToCart(product.id)}
//               >
//                 Add to cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <Cart cart={cart} setCart={setCart} />
//     </section>
//   );
// };


// All.propTypes = {
//   searchQuery: PropTypes.string
// };

// export default All;


import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import products from "./store";

const All = ({ searchQuery = "", cart, setCart }) => {
  const navigate = useNavigate();

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

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

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleAddToCart = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);
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
                  <p className="info">{renderStars(product.rating)}</p>
                  <p className="info-description">
                    {product.description}
                    <p>Ksh {product.price}</p>
                  </p>
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
  cart: PropTypes.array,
  setCart: PropTypes.func.isRequired
};

export default All;
