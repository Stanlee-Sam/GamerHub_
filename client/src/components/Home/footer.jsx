import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <section className="footer">
      <h2>GamerHub</h2>
      <div className="social-media">
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>

        <a href="#">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
      </div>

      <p> 2024 GamerHub. All rights reserved.</p>
      <p>
        Created by <a href="https://github.com/Stanlee-Sam">Stanley Amunze</a>
      </p>
    </section>
  );
};

export default Footer;
