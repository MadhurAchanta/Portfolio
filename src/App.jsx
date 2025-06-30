import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Workshops from "./pages/Workshops";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Certifications from "./pages/Certifications"; // ✅ ADD THIS LINE

function App() {
  return (
    <ThemeProvider>    
      <div className="min-h-screen flex flex-col bg-white dark:bg-black">
        <Navbar />
        <main className="flex-1 pt-[64px] overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/certifications" element={<Certifications />} /> {/* ✅ ADD THIS ROUTE */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer/>
        <Analytics/>
        <SpeedInsights />
      </div>
    </ThemeProvider>
  );
}

export default App;
