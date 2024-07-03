import "../signup/signup.css";

const Login = () => {
  return (
    <section className="auth-page">
      <form className="auth-form">
        <h2>Login</h2>
        <label htmlFor="">Email</label>
        <input type="email" className="email" placeholder="Email" required />
        <label htmlFor="">Password</label>
        <input
          type="password"
          className="password"
          placeholder="Password"
          required
        />

        <button type="submit">Log In</button>

        <p>
          Don't have an account? <a href="/register">Sign up</a>
        </p>
      </form>
    </section>
  );
};

export default Login;
