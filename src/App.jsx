// Vite + React + Tailwind Portfolio
// Main structure: App.jsx with components: Sidebar, Navbar, About, Resume, Portfolio, Blog, Contact, Modal

import { useState } from "react";
import Sidebar from "./components/Sidebae";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  const [activePage, setActivePage] = useState("about");

  return (
    <div className="bg-[#0a0a0a] text-white font-sans px-10 py-10 md:flex md:gap-4 mx-auto min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Right Panel */}
      <div className="flex-1 relative">

        {/* Fixed Navbar in separate box */}
             <div className="fixed top-10 z-50 w-260 bg-[#1a1a1a] align-middle rounded-2xl border border-gray-700 shadow-lg h-14">
        <Navbar activePage={activePage} setActivePage={setActivePage} />
      </div>


        {/* Scrollable Content in separate box below navbar */}
        <div className="mt-20 bg-[#1a1a1a] rounded-2xl border border-gray-700 shadow-lg pt-5 px-6 pb-8 overflow-y-auto h-[calc(100vh-12rem)]">
          {activePage === "about" && <About />}
          {activePage === "resume" && <Resume />}
          {activePage === "portfolio" && <Portfolio />}
          {activePage === "blog" && <Blog />}
          {activePage === "contact" && <Contact />}
        </div>
      </div>
    </div>
  );
}

export default App;
