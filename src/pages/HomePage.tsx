import React from "react";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <main className="sh-home">
      <header className="hero">
        <div className="hero-inner">
          <h1>Talk To The Leading Tax Consultant In Dubai</h1>
          <p>Get professional guidance on all UAE taxation and accounting services — first consultation FREE</p>
          <div className="hero-cta">
            <button className="btn primary">Book Your Free Consultation</button>
            <button className="btn ghost">View Our Services</button>
          </div>
        </div>
        <div className="hero-image" aria-hidden="true">
          {/* Replace with a real image or <img src="..." /> */}
          <div className="image-placeholder">Image</div>
        </div>
      </header>

      <section className="features">
        <div className="container">
          <article className="feature">
            <h3>#1 Tax Consultancy In The UAE</h3>
            <p>Experienced tax agents & accountants helping businesses navigate UAE tax laws.</p>
          </article>
          <article className="feature">
            <h3>UAE Registered Tax Agents</h3>
            <p>FTA-knowledgeable team for corporate tax, VAT, excise and compliance services.</p>
          </article>
          <article className="feature">
            <h3>VAT & Accountancy Services</h3>
            <p>End-to-end VAT registration, returns and bookkeeping support.</p>
          </article>
        </div>
      </section>

      <section className="services container">
        <h2>Our Most Popular Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <div className="svc-header">Accounting & Bookkeeping</div>
            <p>Outsource day-to-day accounting with accurate records and timely reporting.</p>
            <a className="link" href="/services/accounting">Learn More</a>
          </div>

          <div className="service-card">
            <div className="svc-header">VAT Consultancy</div>
            <p>VAT registration, returns and advisory for all business types.</p>
            <a className="link" href="/services/vat">Learn More</a>
          </div>

          <div className="service-card">
            <div className="svc-header">Corporate Tax</div>
            <p>Corporate tax registration, filings and compliance support in the UAE.</p>
            <a className="link" href="/services/corporate-tax">Learn More</a>
          </div>

          <div className="service-card">
            <div className="svc-header">Auditing</div>
            <p>External & internal audit services to meet regulatory requirements.</p>
            <a className="link" href="/services/audit">Learn More</a>
          </div>
        </div>
      </section>

      <section className="about container">
        <div className="about-left">
          <h2>About Shuraa Tax</h2>
          <p>
            A group of experienced and qualified tax agents, accountants and auditors based in Dubai.
            We customize packages to suit your business needs and ensure compliance with UAE law.
          </p>
          <a className="btn secondary" href="/about">Read More</a>
        </div>
        <div className="about-right">
          <div className="stats">
            <div className="stat">
              <div className="stat-num">8+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat">
              <div className="stat-num">165+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat">
              <div className="stat-num">35+</div>
              <div className="stat-label">Team Members</div>
            </div>
            <div className="stat">
              <div className="stat-num">7+</div>
              <div className="stat-label">Nationalities</div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact container">
        <h2>Got Tax Questions?</h2>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="row">
            <input placeholder="Name" required />
            <input placeholder="Phone No" required />
          </div>
          <div className="row">
            <input placeholder="Email" type="email" required />
            <select defaultValue="">
              <option value="" disabled>Service Required</option>
              <option>Accounting Services</option>
              <option>VAT Consultancy</option>
              <option>Corporate Tax</option>
              <option>Other</option>
            </select>
          </div>
          <textarea placeholder="Message" rows={4} />
          <div className="form-actions">
            <button className="btn primary" type="submit">Submit</button>
          </div>
        </form>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div>© {new Date().getFullYear()} Shuraa Tax Accounting & Auditing</div>
          <nav className="footer-nav">
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </footer>
    </main>
  );
};

export default HomePage;
