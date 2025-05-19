
import { useState } from "react";
import Sidebar from "./components/Sidebae";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import GitHubProfile from "./components/GitHubProfile";

function App() {
  const [activePage, setActivePage] = useState("about");

  return (
    <div className="bg-[#0a0a0a] text-white font-sans h-screen overflow-hidden flex px-10 py-10 gap-4">
      {/* Fixed Sidebar */}
      {/* Fixed Sidebar */}
      <div className="sticky top-10 h-[calc(100vh-5rem)]">
        <Sidebar />
      </div>

      {/* Right Side: Navbar + Scrollable Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden rounded-2xl border border-gray-700 shadow-lg bg-[#1a1a1a]">
        {/* Navbar (fixed inside right box) */}
        <div className="px-6 py-4 border-b border-gray-700">
          <Navbar activePage={activePage} setActivePage={setActivePage} />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {activePage === "about" && <About />}
          {activePage === "resume" && <Resume />}
          {activePage === "projects" && <Projects />}
          {activePage === "github" && <GitHubProfile />}
          {activePage === "contact" && <Contact />}
        </div>
      </div>
    </div>
  );
}

export default App;
