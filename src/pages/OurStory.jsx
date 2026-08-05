import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Fragment } from "react";

export default function OurStory() {
  return (
    <Fragment>
      <div className="our-story-page">
        <nav className="main-nav">
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/story" className="nav-link">Our Story</Link>
          <Link to="/registry" className="nav-link">Gift Registry</Link>
          <Link to="/rsvp" className="nav-link">Event</Link>
        </nav>

        <div className="story-page-content">
          <header className="story-hero">
            <h1>Our Story</h1>
            <p>From the first hello to forever, the moments that shaped us and brought us to this day.</p>
          </header>

          <section className="story-split">
            <div className="story-copy">
              <h2>The Call That Changed Everything</h2>
              <p>
                One afternoon, mid October, I felt lonely and under the weather and I made a bold move. I called Thapelo and told him I had missed his call, even though I hadn't. That "missed call" turned into an unexpected lengthy conversation and that changed everthing. 
                On the 16th of December 2022, we had our very first outing, marking the beginning of our beautiful jorney together. From that day, we grew from being strangers to being best friends, learning, choosing and building something beautiful together. 
                For a girl who always said "ninge joli na mfana luya na tindleve letiya", here I am today, not just his lover, but as his partner who is ready to walk hand in hand, in love, prayer, faith, respect, commitment and purpose.
                ALWAYS AND FOREVER, I CHOOSE YOU. <br />
                ~Kurisani 
              
              </p>
            </div>
            <div className="story-media">
              <img src="/images/Kurisani.jpeg" alt="Portrait of the couple" />
            </div>
          </section>

          <section className="story-split">
            <div className="story-media">
              <img src="/images/ThapeloStory.png" alt="Portrait of the couple" />
            </div>
            <div className="story-copy">
              <h2>Dailed into Destiny</h2>
              <p>
                When I first saw Kurisani, I knew in my heart she was the one. At the time, mbilwini ya yena ari na leswiya swo, "Eh, mfana yoloyi na tindleve". 
                Our story truly began in October 2022. She called me one night, claiming she is returning a missed call though I hadn't actually called her. That little "lie" turned into a conversation that changed everything. By December 16th, I was choosing her over my plans with my friends just to spend more time together. We quickly grew from talking to being best friends and unltimately life partners. 
                Today, I am ready to start this lifelong journey with her. I promise to be a supportive partner built on a foundation of love, respect, faith, and commitment. I choose her, always and forever. <br />
                ~Thapelo 
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}