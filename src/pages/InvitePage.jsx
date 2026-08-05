import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore";
import Footer from "../components/Footer";
import { Fragment } from "react";

export default function InvitePage() {
  const navigate = useNavigate();
  const [guest, setGuest] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (!token) {
      setError("Invalid invite link.");
      setLoading(false);
      return;
    }

    const fetchGuest = async () => {
      try {
        const q = query(collection(db, "guests"), where("token", "==", token));
        const snapshot = await getDocs(q);

        if (snapshot.empty) {
          setError("Invite link not found.");
          setLoading(false);
          return;
        }

        const g = snapshot.docs[0].data();
        g.id = snapshot.docs[0].id;

        // Mark as used
        await updateDoc(doc(db, "guests", g.id), { used: true });

        setGuest(g);
        setLoading(false);
      } catch (err) {
        setError("Error loading invite.");
        setLoading(false);
      }
    };

    fetchGuest();
  }, []);

  useEffect(() => {
    if (!guest) return;

    const weddingDate = new Date("2026-12-31T17:00:00");

    const timer = setInterval(() => {
      const now = new Date();
      const diff = weddingDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [guest]);

  if (error) return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;
  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  const handleRSVP = async (answer) => {
    await updateDoc(doc(db, "guests", guest.id), { rsvp: answer });
    setGuest((prev) => ({ ...prev, rsvp: answer }));
    alert(`RSVP recorded: ${answer ? "Attending" : "Not Attending"}`);
    navigate('/home');
  };

  return (
    <Fragment>
      <div className="invite-page">
        <video autoPlay muted loop className="invite-video-bg">
          <source
            src="https://cdn.coverr.co/videos/coverr-wedding-candids-7352/1080p.mp4"
            type="video/mp4"
          />
        </video>

        <div className="invite-content">
          <header className="invite-header">
            <h1 className="invite-title">💌 Welcome, {guest.name}!</h1>
            <p className="invite-subtitle">You’re invited to the wedding of John & Jane</p>
            <p className="invite-theme">Theme: Moonlit Garden Gala</p>
          </header>

          <div className="countdown"> 
            <span>{countdown.days}d</span>:
            <span>{countdown.hours}h</span>:
            <span>{countdown.minutes}m</span>:
            <span>{countdown.seconds}s</span>
          </div>

          <section className="invite-gallery">
            <img
              src="https://images.unsplash.com/photo-1530639838378-6d70c38de0f4?auto=format&fit=crop&w=800&q=80"
              alt="Couple portrait"
            />
            <img
              src="https://images.unsplash.com/photo-1512813382945-720e2e28f7d4?auto=format&fit=crop&w=800&q=80"
              alt="Decor details"
            />
            <img
              src="https://images.unsplash.com/photo-1505618283067-8934dacf0ec7?auto=format&fit=crop&w=800&q=80"
              alt="Cake and theme"
            />
          </section>

          <main className="rsvp-panel">
            <p className="ceremony-text">
              The ceremony starts at 5:00 PM under the moonlit arbor. Dress code: garden formal, with soft pastels and twilight shimmer.
            </p>

            <div className="rsvp-buttons">
              <button onClick={() => handleRSVP(true)} className="rsvp-button yes">
                ✅ I’ll Attend
              </button>
              <button onClick={() => handleRSVP(false)} className="rsvp-button no">
                ❌ Can’t Make it
              </button>
            </div>

            {guest.rsvp !== null && (
              <div className="whatsapp-wrap">
                <a
                  href={`https://wa.me/${guest.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                    `Hi ${guest.name}! I have RSVP'd ${guest.rsvp ? "Attending" : "Not Attending"} to John & Jane's wedding 💍.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="whatsapp-button">📲 Send WhatsApp Confirmation</button>
                </a>
              </div>
            )}
          </main>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}