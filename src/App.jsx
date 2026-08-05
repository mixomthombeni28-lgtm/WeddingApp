import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Import your pages
import InvitePage from "./pages/InvitePage";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import GiftRegistry from "./pages/GiftRegistry";
import EventPage from "./pages/RSVPPage";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invite" element={<InvitePage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/story" element={<OurStory />} />
          <Route path="/registry" element={<GiftRegistry />} />
          <Route path="/rsvp" element={<EventPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

