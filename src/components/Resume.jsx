export default function Resume() {
  const skills = {
    frontend: ["Html", "CSS", "React.js", "Tailwind CSS", "Boot Strap"],
    backend: ["Node.js ", "Express.js"],
    database: ["Firebase", "SQLite", "MongoDB (Basics)", "MySQL"],
    languages: ["Java", "C/C++", "JavaScript", "ASP.NET/C#"],

    tools: [
      "GCP",
      "Git",
      "GitHub",
      "Xamarin",
      "VS Code",
      "Android Studio",
      "Postman",
    ],
    computerScienceFundamentals: [
      "Operating Systems",
      "Data Structures & Algorithms (DSA)",
      "Computer Networks",
      "Internet of Things (IoT)",
      "Business Intelligence (BI)",
    ],
  };

  const projects = [
    {
      title: "Phone Price Comparison System",
      time: "2025",
      description:
        "Full-stack MERN app to compare phone prices from Amazon, Flipkart, etc. Features include user auth, admin panel, wishlist, reviews, and Gemini-powered AI assistant.",
      stack: "React · Node.js · Express · MongoDB · Tailwind · Gemini AI",
    },
    {
      title: "Personal Blogging Platform",
      time: "2025",
      description:
        "A blog application with secure JWT login/logout, CRUD for posts, and user-specific data handling.",
      stack: "MERN · JWT · Context API · REST APIs",
    },
    {
      title: "NASA Media Explorer",
      time: "2025",
      description:
        "Frontend React app using NASA APIs to fetch daily astronomical media and data. Focused on animations and UI polish.",
      stack: "React · Tailwind · GSAP · NASA APIs",
    },
    {
      title: "Portfolio Website",
      time: "2025",
      description:
        "Animated portfolio built using React, GSAP, and ScrollTrigger to showcase development and design projects.",
      stack: "React · Tailwind · GSAP",
    },
  ];

  const experience = [
    {
      title: "Freelance Full Stack Developer",
      org: "Self-Employed",
      time: "2024 — Present",
      skills:
        "Delivered client-based web applications using MERN stack with pixel-perfect design and optimized backend systems.",
    },
    {
      title: "Graphic Designer (Freelance)",
      org: "Remote Projects",
      time: "2022 — Present",
      skills:
        "Created logos, social media posts, and branding content using Adobe Suite. Specialized in clean and bold designs.",
    },
  ];

  const education = [
    {
      title: "Bachelor of Computer Applications (BCA)",
      time: "2022 — Present",
      description:
        "Focused on Software Development, Web Technologies, and Networking.",
    },
    {
      title: "High School",
      time: "2020 — 2022",
      description: "Maths · Physics · Computer Science (Grade: A)",
    },
  ];

  return (
    <section className="space-y-10 text-gray-300">
      {/* Skills */}
      {/* <div>
  <h2 className="text-2xl font-semibold text-white mb-4">Technical Skills</h2>
  <div className="flex flex-wrap gap-2 text-sm">
    {[
      "Flutter & Dart",
      "Android (Java/Kotlin)",
      "iOS (SwiftUI)",
      "Firebase",
      "Ionic",
      "Xamarin",
      "AngularJS",
      "GCP",
      "Java",
      "Spring Boot",
      "C#",
    ].map((skill, i) => (
      <span
        key={i}
        className="bg-indigo-600 text-white px-3 py-1 rounded-full"
      >
        {skill}
      </span>
    ))}
  </div>
</div> */}
      <div>
        <h2 className="text-2xl font-semibold text-white mb-4">Skills</h2>
        <div className="space-y-6 border-l-2 border-indigo-500 pl-4">
          {/* Skills */}
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="mb-4">
              <h3 className="text-lg font-medium text-indigo-400 mb-2 capitalize">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2 text-sm">
                {items.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-indigo-900/50 text-indigo-100 px-3 py-1.5 rounded-full text-sm flex items-center"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div>
        <h2 className="text-2xl font-semibold text-white mb-4">Projects</h2>
        <div className="space-y-6 border-l-2 border-indigo-500 pl-4">
          {projects.map((project, index) => (
            <div key={index}>
              <h3 className="text-white text-lg font-medium">
                {project.title}
              </h3>
              <p className="text-sm text-indigo-400">{project.time}</p>
              <p className="text-sm mt-1">{project.description}</p>
              <p className="text-xs text-gray-400 mt-1">{project.stack}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <h2 className="text-2xl font-semibold text-white mb-4">Experience</h2>
        <div className="space-y-6 border-l-2 border-indigo-500 pl-4">
          {experience.map((item, index) => (
            <div key={index}>
              <h3 className="text-white text-lg font-medium">{item.title}</h3>
              <p className="text-sm text-indigo-400">{item.org}</p>
              <p className="text-sm text-gray-400">{item.time}</p>
              <p className="text-sm mt-1">{item.skills}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <h2 className="text-2xl font-semibold text-white mb-4">Education</h2>
        <div className="space-y-4 border-l-2 border-indigo-500 pl-4">
          {education.map((item, index) => (
            <div key={index}>
              <h3 className="text-white text-lg font-medium">{item.title}</h3>
              <p className="text-sm text-indigo-400">{item.time}</p>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
