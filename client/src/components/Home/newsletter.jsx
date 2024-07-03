import "./newsletter.css";

const   Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="details-newsletter">
        <h2>Subscribe to our newsletter</h2>
        <p>Get email updates about latest products</p>
      </div>
      <div className="form-newsletter">
        <form>
          <input type="email" placeholder="you@example.com" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default  Newsletter;
