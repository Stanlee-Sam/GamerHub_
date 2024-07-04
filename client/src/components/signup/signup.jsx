import "./signup.css";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";

const Signup = () => {
  const validationSchema = Yup.object({
    fname: Yup.string()
    .min(4, "First name should be a minimum of four characters"),
    lname: Yup.string()
    .min(4, "Last name should be a minimum of four characters"),
    email: Yup.string()
    .email("Invalid email address"),
    password: Yup.string()
    .min(6, "Password must be at least 6 characters"),
    cpassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
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
        await axios.post("/api/users/signup", {
          firstName: values.fname,
          lastName: values.lname,
          email: values.email,
          password: values.password,
        });
        alert("Signup successful");
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
          {formik.errors.fname && <p>{formik.errors.fname}</p>}

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
          {formik.errors.lname && <p>{formik.errors.lname}</p>}
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
          {formik.errors.email && <p>{formik.errors.email}</p>}

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
          {formik.errors.password && <p>{formik.errors.password}</p>}
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
          {formik.errors.cpassword && <p>{formik.errors.cpassword}</p>}

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
