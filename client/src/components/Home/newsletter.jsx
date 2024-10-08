import "./newsletter.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { apiUrl } from "../../utils/config";


const Newsletter = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch(`${apiUrl}/api/newsletter/subscribe`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: values.email,
          }),
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        alert("Subscribed to newsletter ");
        console.log(response);
      } catch (e) {
        console.error("Error subscribing", e);
        alert("Failed to subscribe to newsletter");
      }
    },
  });
  return (
    <section className="newsletter-section">
      <div className="details-newsletter">
        <h2>Subscribe to our newsletter</h2>
        <p>Get email updates about latest products</p>
      </div>
      <div className="form-newsletter">
        <form onSubmit={formik.handleSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            onChange={formik.handleChange}
            value={formik.values.email}
            required
          />
          {formik.errors.email && <p>{formik.errors.email}</p>}
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
