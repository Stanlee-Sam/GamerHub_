import "./product.css";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { apiUrl } from "../../utils/config";

const Product = () => {
  const { id } = useParams();
  console.log("Product ID from useParams", id)

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    if (id) {
      fetchProduct(id);
    } else {
      setLoading(false);
      setError("Product ID is undefined");
    }
  }, [id]);

  const fetchProduct = async (productId) => {
    try {
      console.log(`Fetching product with ID: ${productId} from ${apiUrl}/api/products/${productId}`);
      const response = await fetch(`${apiUrl}/api/products/${productId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch product");
      }
      const data = await response.json();
      console.log("Product data fetched:", data);
      setProduct(data);
      setActiveImage(data.images[0]);
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
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="product-page">
      <div className="product-pic">
        <div className="variety">
          {product.images.map((image, index) => (
            <div key={index} className={`pic${index + 1}`} onClick={() => setActiveImage(image)}>
              <img src={image} alt={`Variety ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="active-pic">
          <img src={activeImage} alt="Active" />
        </div>
      </div>
      <div className="details">
        <h2>{product.name}</h2>
        <h3>Ksh {product.price}</h3>
        <p className="info">{renderStars(product.rating)}</p>
        <p className="des">{product.description}</p>
        <div className="color-btns">
          <div className="label">
            <label>
              <strong>Color: </strong>
            </label>
          </div>
          <div className="btn-circle">
            {product.colors && product.colors.map((color, index) => (
              <button key={index} className={`color-btn ${color}`} />
            ))}
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

//   return (
//     <section className="product-page">
//       <div className="product-pic">
//         <div className="variety">
//           <div className="pic1">
//             <img src="../../../src/assets/blue ps4.jpeg" alt="" />
//           </div>
//           <div className="pic2">
//             <img src="../../../src/assets/blue ps4.jpeg" alt="" />
//           </div>
//           <div className="pic3">
//             <img src="../../../src/assets/blue ps4.jpeg" alt="" />
//           </div>
//         </div>
//         <div className="active-pic">
//           <img src="../../../src/assets/blue ps4.jpeg" alt="" />
//         </div>
//       </div>
//       <div className="details">
//         <h2>PlayStation 4</h2>
//         <h3>Ksh 53,000</h3>
//         <p className="info">{renderStars(4)}</p>
//         <p className="des">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy
//           eleifend, nunc a fermentum tristique, justo mauris eleifend mi, in
//           lobortis mi velit vel massa. Vestibulum auctor, lectus vitae semper
//           feugiat, metus dolor fermentum velit, vel pharetra ligula dui eget
//           urna.
//         </p>
//         <div className="color-btns">
//           <div className="label">
//             <label>
//               <strong>Color: </strong>
//             </label>
//           </div>
//           <div className="btn-circle">
//             <button className="color-btn active"></button>
//             <button className="color-btn"></button>
//             <button className="color-btn"></button>
//           </div>
//         </div>
//         <div className="counter">
//           <div className="label">
//             <label>
//               <strong>Quantity: </strong>
//             </label>
//           </div>
//           <div className="counter-btns-count">
//             <button> - </button>
//             <span className="product-span">1</span>
//             <button> + </button>
//           </div>
//         </div>
//         <button className="checkout-btn">Add to Cart</button>
//       </div>
//     </section>
//   );
// };

// export default Product;
