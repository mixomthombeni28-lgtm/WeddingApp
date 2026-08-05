import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Fragment } from "react";

const WHATSAPP_NUMBER = "27659168656"; // e.g. 27712345678

export default function EventPage() {
  return (
    <Fragment>
      <div className="event-page">
        <nav className="main-nav">
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/story" className="nav-link">Our Story</Link>
          <Link to="/registry" className="nav-link">Gift Registry</Link>
          <Link to="/rsvp" className="nav-link">Event</Link>
        </nav>

        <section className="event-hero">
          <div className="event-hero-copy">
            <p className="event-eyebrow"></p>
            <h1>Our Lobola Celebration</h1>
            <p>
            .
            </p>
          </div>
        </section>

        <div className="event-content">
          <div className="event-columns">
            <div className="event-card">
              <h2>Ceremony Details and Information</h2>
              <p>
                 Date : 05 December 2026 <br />
                 Time : 14:00 <br />
                 Location : House no. 1698, Mageza Street/Road, Section E, Giyani, Limpopo, South Africa
              </p>
            </div>
          
          
          </div>

          <div className="event-gallery">
            <h2 style={{ textAlign: "center" }}>Dress Code</h2>
            <div className="theme-grid">
              <div className="theme-card" style={{ maxWidth: 500, margin: "0 auto" }}>
                <img src="/images/Theme 2.jpeg" alt="Theme 2" />
                <div className="theme-card-body">
                  <h3 style={{ textAlign: "center" }}>Theme </h3>
                  <p style={{ textAlign: "center" }}></p>
                </div>
              </div>
            </div>
          </div>
          
          <section className="event-rsvp">
            <h2 style={{ textAlign: "center" }}>RSVP</h2>
            <form
              className="rsvp-form"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const name = form.elements.name.value;
                const attending = form.elements.attending.value;

                const message = `RSVP for Lobola Celebration:\nName: ${name}\nAttending: ${attending}`;

                // If WhatsApp number isn't set, show confirmation instead
                const phoneDigits = String(WHATSAPP_NUMBER || "").replace(/[^0-9]/g, "");
                if (!phoneDigits) {
                  alert(`RSVP received:\nName: ${name}\nAttending: ${attending}\n\n(WhatsApp not configured)`);
                  form.reset();
                  return;
                }

                const waUrl = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`;
                window.open(waUrl, "_blank");
                form.reset();
              }}
            >
              <div>
                <label>Name</label>
                <input name="name" type="text" required />
              </div>
              <div>
                <label>Attending</label>
                <select name="attending">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div style={{ textAlign: "center", marginTop: 12 }}>
                <button type="submit" className="rsvp-button yes">Submit RSVP</button>
              </div>
            </form>
            <div className="rsvp-notice">
              <p>Kindly let us know if you'll be joining us by the 31st of OCTOBER 2026 so we can make the necessary arrangements.</p>
              <p>Please note that this invite is not transferable.</p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}