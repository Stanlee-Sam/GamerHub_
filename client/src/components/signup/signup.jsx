import "./signup.css";

const Signup = () => {
  return (
    <section className="auth-page">
      <form className="auth-form">
        <h2>Sign Up</h2>
        <label htmlFor="">First Name</label>
        <input type="text" className="fname" placeholder="First Name" required/>
        <label htmlFor="">Last Name</label>
        <input type="text" className="lname" placeholder="Last Name" required/>
        <label htmlFor="">Email</label>
        <input type="email" className="email" placeholder="Email" required/>
        <label htmlFor="">Password</label>
        <input type="password" className="password" placeholder="Password" required />
        <label htmlFor="">Confirm Password</label>
        <input
          type="password"
          className="password"
          placeholder="Confirm Password"
        />

        <button type="submit">Sign Up</button>
        
      </form>
    </section>
  );
};

export default Signup;
