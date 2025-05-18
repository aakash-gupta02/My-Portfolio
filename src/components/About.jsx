import { FaCode, FaLaptopCode } from "react-icons/fa";

export default function About() {
  return (
    <section className="space-y-10 text-gray-300">
      {/* ABOUT ME */}
      <div>
        <p>
          I'm a passionate full-stack web developer specializing in the MERN stack (MongoDB, Express, React, Node.js).
          My focus is building clean, efficient, and scalable applications that solve real-world problems.
          I’m driven by independence, creativity, and the goal to create impact-driven digital solutions — especially projects that blend practical use with user-centric design.
        </p>
      </div>

      {/* CORE COMPETENCIES */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-3">Core Competencies</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>React.js, Node.js, Express.js, MongoDB, Tailwind CSS.</li>
          <li>Authentication with JWT, RESTful APIs, CRUD operations.</li>
          <li>Frontend animations (GSAP, ScrollTrigger), clean UI structure.</li>
          <li>Version control with Git & GitHub.</li>
          <li>Problem-solving, project structuring, and UI optimization.</li>
          <li>Design translation and responsive web layouts.</li>
        </ul>
      </div>

      {/* PROJECT HIGHLIGHTS */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-3">Key Projects</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Phone Price Comparison App — fetches real-time data, compares from Flipkart & Amazon.</li>
          <li>Personal MERN Blog App — user authentication, full CRUD, secure data management.</li>
          <li>NASA API Explorer — integrates space data with smooth interactive UI.</li>
        </ul>
      </div>

      {/* SERVICES */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">What I'm Doing</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#1e1e1e] p-5 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="text-indigo-400 text-2xl mb-2"><FaCode /></div>
            <h4 className="text-white font-medium mb-1">Web Development</h4>
            <p className="text-sm text-gray-400">Building dynamic, scalable full-stack apps using MERN & modern tooling.</p>
          </div>
          <div className="bg-[#1e1e1e] p-5 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="text-indigo-400 text-2xl mb-2"><FaLaptopCode /></div>
            <h4 className="text-white font-medium mb-1">UI & Code Optimization</h4>
            <p className="text-sm text-gray-400">Creating clean codebases, responsive layouts, and animated UIs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
