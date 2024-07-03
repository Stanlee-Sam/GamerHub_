import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Accessories = () => {
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
   <section className="accessories-section">
     <h1>Accessories</h1>
     <p>All the accessories here</p>
     <div className="all-container">
        <div className="item-container">
          <div className="img-container">
            <img src="../../../src/assets/Xbox one S 500G.jpeg" alt="" />
          </div>
          <div className="body-container">
            <div className="body-container">
              <div className="overlay"></div>
              <div className="event-info">
                <p className="title">Xbox One S 500GB</p>
                <div className="separator"></div>

                <div className="additional-info">
                  <p className="info">{renderStars(4)}</p>

                  <p className="info-description">
                    Explore the world of Xbox with Xbox One S<p>Ksh 53,000</p>
                  </p>
                </div>
              </div>
              <button className="action">Add to cart</button>
            </div>
          </div>
        </div>
        <div className="item-container">
          <div className="img-container">
            <img src="../../../src/assets/Xbox one S 500G.jpeg" alt="" />
          </div>
          <div className="body-container">
            <div className="body-container">
              <div className="overlay"></div>
              <div className="event-info">
                <p className="title">Xbox One S 500GB</p>
                <div className="separator"></div>

                <div className="additional-info">
                  <p className="info">{renderStars(4)}</p>

                  <p className="info-description">
                    Explore the world of Xbox with Xbox One S<p>Ksh 53,000</p>
                  </p>
                </div>
              </div>
              <button className="action">Add to cart</button>
            </div>
          </div>
        </div>
        <div className="item-container">
          <div className="img-container">
            <img src="../../../src/assets/Xbox one S 500G.jpeg" alt="" />
          </div>
          <div className="body-container">
            <div className="body-container">
              <div className="overlay"></div>
              <div className="event-info">
                <p className="title">Xbox One S 500GB</p>
                <div className="separator"></div>

                <div className="additional-info">
                  <p className="info">{renderStars(4)}</p>

                  <p className="info-description">
                    Explore the world of Xbox with Xbox One S<p>Ksh 53,000</p>
                  </p>
                </div>
              </div>
              <button className="action">Add to cart</button>
            </div>
          </div>
        </div>
        <div className="item-container">
          <div className="img-container">
            <img src="../../../src/assets/Xbox one S 500G.jpeg" alt="" />
          </div>
          <div className="body-container">
            <div className="body-container">
              <div className="overlay"></div>
              <div className="event-info">
                <p className="title">Xbox One S 500GB</p>
                <div className="separator"></div>

                <div className="additional-info">
                  <p className="info">{renderStars(4)}</p>

                  <p className="info-description">
                    Explore the world of Xbox with Xbox One S<p>Ksh 53,000</p>
                  </p>
                </div>
              </div>
              <button className="action">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
   </section>
  )
}

export default Accessories
