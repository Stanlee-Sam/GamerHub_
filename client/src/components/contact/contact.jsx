import { useFormik } from "formik";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import * as Yup from "yup";
import axios from "axios";

const Contact = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, "First name should be at least 2 characters long")
      .max(30, "First name should be at most 30 characters long"),
    lastName: Yup.string()
      .min(2, "Last name should be at least 2 characters long")
      .max(30, "Last name should be at most 30 characters long"),
    email: Yup.string().email("Invalid email address"),
    message: Yup.string()
      .min(10, "Message should be at least 10 characters long")
      .max(500, "Message should be at most 500 characters long"),
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post("/api/contact", {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          message: values.message,
        });

        alert("Message sent successfully!");
      } catch (e) {
        console.error("There was an error sending the message", e);
        alert("Error sending the message, please try again.");
      }
    },
  });
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
          <form className="form-contact" onSubmit={formik.handleSubmit}>
            <div className="form-card-details">
              <div className="card-box">
                <span className="details">First Name</span>

                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                />
                {formik.errors.firstName && <p>{formik.errors.firstName}</p>}
              </div>
              <div className="card-box">
                <span className="details">Last Name</span>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  required
                />
                {formik.errors.lastName && <p>{formik.errors.lastName}</p>}
              </div>
              <div className="card-box">
                <span className="details">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  required
                />
                {formik.errors.email && <p>{formik.errors.email}</p>}
              </div>
              <div className="card-box">
                <span className="details">Message</span>
                <textarea
                  id="text"
                  name="message"
                  cols="18"
                  rows="10"
                  placeholder="Enter your message here"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  required
                ></textarea>
                {formik.errors.message && <p>{formik.errors.message}</p>}
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
