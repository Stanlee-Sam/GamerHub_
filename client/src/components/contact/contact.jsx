import { useState} from 'react'
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); 
    alert("Form submitted!");
  };
  return (
    <section className="contact-section">
      <br />
      <br />
      <div className="banner">
        <div className="banner-img"></div>
        <div className="banner-text">
          <h1 className="banner-title">#let's_talk</h1>
          <p className="banner-des">
            LEAVE A MESSAGE. We love to hear from you!
          </p>
        </div>
      </div>
      <div className="contact-location">
        <div className="about-contact">
          <h2>Get in Touch</h2>
          <h3>Visit one of our agencies locations or contact us today </h3>
          <p>
            <FontAwesomeIcon icon={faBook} />
            <strong>Address:</strong> Magadi Road, Ongata Rongai, Kajiado,
            Kenya.
            <br />
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            <strong>Email:</strong> gamerhub@gmail.com
            <br />
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} />
            <strong>Phone:</strong> +254-712-345-678
            <br />
          </p>
        </div>
        <div className="map">
          <iframe
            width="520"
            height="400"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Magadi%20Rd,%20Ongata%20Rongai,%20Kenya+(Zaph%20Tours)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
      <div className="contact-form">
        <div className="form-title">
        <h2>Leave A Message</h2>
        <h3>We love to hear from you</h3>
        </div>
        <div className="input-form">
        <form className = "form-contact" onSubmit={handleFormSubmit}>
              <div className="form-card-details">
                <div className="card-box">
                  <span className="details">First Name</span>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName} required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="card-box">
                  <span className="details">Last Name</span>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="card-box">
                  <span className="details">Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange} required
                  />
                </div>
                <div className="card-box">
                  <span className="details">Message</span>
                  <textarea
                    id="text"
                    name="message"
                    cols="18"
                    rows="10"
                    placeholder="Enter your message here"
                    value={formData.message}
                    onChange={handleInputChange} required
                  ></textarea>
                </div>
              </div>
              <div className="form-submit-btn">
                <button className="form-btn" type="submit">
                  Send
                </button>
              </div>
            </form>
        </div>
      
      </div>
    </section>
  );
};

export default Contact;
