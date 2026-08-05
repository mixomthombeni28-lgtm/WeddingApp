import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Fragment } from "react";

export default function GiftRegistry() {
  return (
    <Fragment>
      <div className="registry-page">
        <nav className="main-nav">
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/story" className="nav-link">Our Story</Link>
          <Link to="/registry" className="nav-link">Gift Registry</Link>
          <Link to="/rsvp" className="nav-link">Event</Link>
        </nav>

        <div className="registry-content">
          <div className="registry-description-card">
            <p className="registry-eyebrow">Love, laughter, and a little extra sparkle</p>
            <h1>Gift Registry</h1>
            <p>
              Your presence at our special day is the greatest gift of all. If you would like to bless us with a gift,
              we kindly request monetary gifts or gift vouchers as they will help us as we begin this new chapter together.
              Your generosity will contribute to creating a beautiful home and a future filled with love and happiness.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}