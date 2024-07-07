import { useRef, useEffect } from "react";
import "./featproducts.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import img1 from "../../assets/Nintendo feat.jpeg";
import img2 from "../../assets/ps 5 feat.jpeg";
import img3 from "../../assets/ps 4 feat.jpeg";
import img4 from "../../assets/pc feat.jpeg";
import img5 from "../../assets/Xbox Series S feat.jpeg";
import img6 from "../../assets/Xbox Series X feat.jpeg";

const Featproducts = () => {

  const slideRef = useRef(null);

  const moveToNext = () => {
    const items = slideRef.current.querySelectorAll(".item");
    slideRef.current.appendChild(items[0]);
  };

  const moveToPrev = () => {
    const items = slideRef.current.querySelectorAll(".item");
    slideRef.current.prepend(items[items.length - 1]);
  };

  useEffect(() => {
    const items = slideRef.current.querySelectorAll(".item");

    
    items[1].querySelector(".content").classList.add("active");
  }, []);

  return (
    <section className="featdest-section">
      <div className="featdest-container">
        <h2>Featured Products</h2>
        <div className="slide" ref={slideRef}>
          <div className="item" style={{ backgroundImage: `url(${img1})` }}>
            <div className="content">
              <div className="name">Nintendo Switch</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: `url(${img2})` }}>
            <div className="content">
              <div className="name">PS 5</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: `url(${img3})` }}>
            <div className="content">
              <div className="name">PS 4</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: `url(${img4})` }}>
            <div className="content">
              <div className="name">Gaming PC</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: `url(${img5})` }}>

            <div className="content">
              <div className="name">Xbox Series S</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
            
            </div>
          </div>
          <div className="item" style={{ backgroundImage: `url(${img6})` }}>

            <div className="content">
              <div className="name">Xbox Series X</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
            
            </div>
          </div>
        </div>
        <div className="button">
          <button className="prev" onClick={moveToPrev}>
          <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className="next" onClick={moveToNext}>
          <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      <div className="brands-container">
        <h3>Featured Brands</h3>
        <div className="brand-cards-all">
        <div className="brand-card">
            <img src="../../../src/assets/ps logo.jpeg" alt="" />
        </div>
        <div className="brand-card">
            <img src="../../../src/assets/Nintendo logo.jpeg" alt="" />
        </div>
        <div className="brand-card">
            <img src="../../../src/assets/Xbox Logo.jpeg" alt="" />
        </div>
        <div className="brand-card">
            <img src="../../../src/assets/Asus Asus Logo, Logo Vector, Asus, Computer Brands PNG Transparent Clipart Image and PSD File for Free Download.jpeg" alt="" />
        </div>
        </div>

      </div>
    </section>
  );
};

export default Featproducts;
