import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Fragment } from "react";

export default function Home() {
  const weddingDate = new Date("2026-12-05T09:00:00");
  const daysToGo = Math.max(
    0,
    Math.ceil((weddingDate - new Date()) / (1000 * 60 * 60 * 24))
  );

  return (
    <Fragment>
      <div className="home-page">
        <section className="home-hero">
          <nav className="main-nav">
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/story" className="nav-link">Our Story</Link>
            <Link to="/registry" className="nav-link">Gift Registry</Link>
            <Link to="/rsvp" className="nav-link">Event</Link>
          </nav>

          <div className="hero-copy">
            <p className="hero-meta">05 December, 2026 • GIYANI, LP</p>
            <h1> Thapelo & Kurisani</h1>
            <p className="hero-countdown">{daysToGo} DAYS TO GO!</p>
          </div>
        </section>

        <section className="home-body">
          <div className="body-left">
            <section className="home-card">
              <h2>Welcome to our celebration</h2>
              <p>
                Explore our story, Gift Registry, and the
                details for the big day.
              </p>
            </section>

            <section className="home-sections">
                <Link to="/story" className="section-card">
                <h3>Our Story</h3>
                <p>Learn how we met, fell in love, and chose this unforgettable day.</p>
              </Link>
              <Link to="/rsvp" className="section-card">
                <h3>Travel</h3>
                <p>Find venue directions, airport tips, and nearby accommodations.</p>
              </Link>
              <Link to="/rsvp" className="section-card">
                <h3>What to wear (Theme of the day)</h3>
                <p>Check out our dress code and styling tips for the big day.</p>
              </Link>
              <Link to="/registry" className="section-card">
                <h3>Gift Registry</h3>
                <p>View our registry details and thoughtful gift ideas for us.</p>
              </Link>
            </section>
          </div>
          <div className="body-right">
            <img src="/images/couplehome.jpeg" alt="Couple Portrait" className="portrait-image" />
          </div>
        </section>
      </div>
      <Footer />
    </Fragment>
  );
}