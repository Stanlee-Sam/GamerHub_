import "./login.css";
import { useFormik } from 'formik';
import * as Yup from 'yup';
// import { useNavigate } from "react-router-dom";

// import { apiUrl } from "../../utils/config";

const apiUrl = import.meta.env.VITE_API_URL_BASE;

const Login = () => {
  // const navigate = useNavigate();
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required('Email is required'),
      
    password: Yup.string()
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema, 
    onSubmit: async (values) => {
      try {
        const response = await fetch(`${apiUrl}/api/users/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: values.email,
            password: values.password,
          }),
          credentials: "include",
        });

        const data = await response.json();

        if (data.success) {
          localStorage.setItem("token", data.token);
          window.location.href = "/home";
        } else {
          alert("Invalid email or password");
        }
      } catch (error) {
        console.error('Error:', error);
      }
    },
  });

  return (
    <section className="login-auth-page">
      <form className="auth-form" onSubmit={formik.handleSubmit}>
        <h2>Login</h2>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && <p>{formik.errors.email}</p>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password && <p>{formik.errors.password}</p>}
        </div>

        <button type="submit" >Log In</button>
        {/* const navigate = useNavigate(); */}
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </form>
    </section>
  );
};

export default Login;
