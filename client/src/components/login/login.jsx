import "../signup/signup.css";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address"),
      
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
        //
        alert("Login successful");
      } catch (error) {
        console.error("There was an error while logging in", error);
        alert("Error logging in, please try again");
      }
    },
  });

  return (
    <section className="auth-page">
      <form className="auth-form" onSubmit={formik.handleSubmit}>
        <h2>Login</h2>
        <div>
        <label htmlFor="email">Email</label>
        {formik.errors.email && <p>{formik.errors.email}</p>}
        <input
          type="email"
          className="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          required
        />
        
        </div>

        <div>
        <label htmlFor="password">Password</label>
        {formik.errors.password && <p>{formik.errors.password}</p>}

        <input
          type="password"
          className="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
          required
        />
        </div>

        <button type="submit">Log In</button>

        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </form>
    </section>
  );
};

export default Login;
