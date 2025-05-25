import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

// Wrapper för att få tillgång till location och hantera loading
function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // initial load
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // ny laddning vid varje navigering
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // kortare vid navigering
    return () => clearTimeout(timer);
  }, [location]);

  if (loading) return <Loading />;

  return (
    <>
      <Navbar />
      <main className="flex-grow-1 pt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white position-relative">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

export default App;
