import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <nav className="footer-nav">
          <Link to="/home">Home</Link>
          <Link to="/story">Our Story</Link>
          <Link to="/registry">Gift Registry</Link>
          <Link to="/rsvp">Event</Link>
        </nav>
        <p>&copy; 2026 Thapelo & Kurisani. All rights reserved.</p>
      </div>
    </footer>
  );
}