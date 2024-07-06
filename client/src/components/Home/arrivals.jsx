import  { useEffect, useState } from "react";
import "./arrivals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { apiUrl } from "../../utils/config";

const Arrivals = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/products/new-arrivals`);
        if (!response.ok) {
          throw new Error("Failed to fetch new arrivals");
        }
        const data = await response.json();
        setNewArrivals(data.data);
        setLoading(false);
      } catch (error) {
        console.error("No new arrivals:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchNewArrivals();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div> {error}</div>;
  }

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
    <section className="arrivals-section">
      <h3>New Arrivals</h3>
      <div className="all-container">
        {newArrivals.map((product) => (
          <div className="item-container" key={product.id}>
            <div className="img-container">
              <img src={product.images[0]} alt={product.name} />
            </div>
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
        ))}
      </div>
    </section>
  );
};

export default Arrivals;
