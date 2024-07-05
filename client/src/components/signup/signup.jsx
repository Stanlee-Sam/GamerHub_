import "./signup.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../../utils/config";
// import { Axios } from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    fname: Yup.string()
      .min(4, "First name should be a minimum of four characters")
      .required("First name is required"),
    lname: Yup.string()
      .min(4, "Last name should be a minimum of four characters")
      .required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    cpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch(`${apiUrl}/api/users/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: values.fname,
            lastName: values.lname,
            email: values.email,
            password: values.password,
          }),
        });

        

        if (response.ok) {
          navigate("/login");
        } else {
          throw new Error("Network response was not ok");
        }

        alert("Signup successful");
        console.log(response);
      } catch (e) {
        console.error("There was an error signing up", e);
        alert("Error signing up, please try again");
      }
    },
  });

  return (
    <section className="auth-page">
      <form className="auth-form" onSubmit={formik.handleSubmit}>
        <h2>Sign Up</h2>
        <div>
          <label htmlFor="signup-fname">First Name</label>
          {formik.errors.fname && (
            <p className="error-message">{formik.errors.fname}</p>
          )}
          <input
            type="text"
            className="fname"
            id="signup-fname"
            name="fname"
            placeholder="First Name"
            onChange={formik.handleChange}
            value={formik.values.fname}
            required
          />
        </div>

        <div>
          <label htmlFor="signup-lname">Last Name</label>
          {formik.errors.lname && (
            <p className="error-message">{formik.errors.lname}</p>
          )}
          <input
            type="text"
            className="lname"
            id="signup-lname"
            name="lname"
            placeholder="Last Name"
            onChange={formik.handleChange}
            value={formik.values.lname}
            required
          />
        </div>

        <div>
          <label htmlFor="signup-email">Email</label>
          {formik.errors.email && (
            <p className="error-message">{formik.errors.email}</p>
          )}
          <input
            type="email"
            className="email"
            id="signup-email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            required
          />
        </div>

        <div>
          <label htmlFor="signup-password">Password</label>
          {formik.errors.password && (
            <p className="error-message">{formik.errors.password}</p>
          )}
          <input
            type="password"
            className="password"
            id="signup-password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            required
          />
        </div>

        <div>
          <label htmlFor="signup-cpassword">Confirm Password</label>
          {formik.errors.cpassword && (
            <p className="error-message">{formik.errors.cpassword}</p>
          )}
          <input
            type="password"
            id="signup-cpassword"
            name="cpassword"
            className="cpassword"
            placeholder="Confirm Password"
            onChange={formik.handleChange}
            value={formik.values.cpassword}
            required
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </section>
  );
};

export default Signup;
