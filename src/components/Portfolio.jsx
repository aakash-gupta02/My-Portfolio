// import { useState } from "react";
// import { FiEye } from "react-icons/fi";

// const projects = [
//   {
//     title: "Phone Price Comparison App",
//     category: "mern",
//     image: "https://private-user-images.githubusercontent.com/175836941/436109977-cdbf68b0-be44-4880-8e7e-5bd3fa0f3a40.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDc1NzY5NDIsIm5iZiI6MTc0NzU3NjY0MiwicGF0aCI6Ii8xNzU4MzY5NDEvNDM2MTA5OTc3LWNkYmY2OGIwLWJlNDQtNDg4MC04ZTdlLTViZDNmYTBmM2E0MC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUxOFQxMzU3MjJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01ZTc2MTYzNzZmMjQ2ZDkyMmJhMzBkMTRmMDc4NmFlODA5ZjUxMDQ5YWU4YWY3ZGZlYzUwMTBkNzBkZWE3N2QyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.CRx9WlZEwFxcAmvQCxQa2jvTEeFshX8e9GwGT-dm0XU",
//     link: "#", // Replace with live or GitHub link
//   },
//   {
//     title: "MERN Blog Platform",
//     category: "mern",
//     image: "https://private-user-images.githubusercontent.com/175836941/444625485-ccf371a5-92d1-476d-bba7-cc073091bd38.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDc1NzY4NzUsIm5iZiI6MTc0NzU3NjU3NSwicGF0aCI6Ii8xNzU4MzY5NDEvNDQ0NjI1NDg1LWNjZjM3MWE1LTkyZDEtNDc2ZC1iYmE3LWNjMDczMDkxYmQzOC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUxOFQxMzU2MTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04NjViNjI4Njc2MWM2MjY4N2EzZjE5NGRhZmNlNjA3NDc1NTIzOTQ5YTE4ZmE2MDFkMzNkZDUzYjdjOTUzYjc1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.kIDQxfMmGuZEoSyznCgR25SkFL_H0Ib9wod5lzBMLmQ",
//     link: "#",
//   },
//   {
//     title: "NASA API Explorer",
//     category: "react",
//     image: "https://www.cssdesignawards.com/cdasites/2016/201608/20160810174825.jpg",
//     link: "#",
//   },
//   {
//     title: "Responsive Sign-up Page",
//     category: "frontend",
//     image: "https://i.ytimg.com/vi/ROqsYIVCJ5Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCgqUlya94rVUvUdrJGZVFuvxvfIQ",
//     link: "#",
//   },
//   {
//     title: "Weather App (API based)",
//     category: "react",
//     image: "https://www.sketchappsources.com/resources/source-image/weather-app-icons.jpg",
//     link: "#",
//   },
//   {
//     title: "GitHub User Finder",
//     category: "react",
//     image: "https://github.blog/wp-content/uploads/2023/01/1200x640.png?resize=1200%2C640",
//     link: "#",
//   },
// ];


// const categories = ["all", "react", "mern", "frontend", "design"];

// export default function Portfolio() {
//   const [selected, setSelected] = useState("all");

//   const filteredProjects =
//     selected === "all"
//       ? projects
//       : projects.filter((p) => p.category === selected);

//   return (
//     <section className="text-gray-300 space-y-8">
//       {/* Filter */}
//       <div className="flex gap-4 flex-wrap">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setSelected(cat)}
//             className={`px-4 py-1 rounded-full text-sm font-medium capitalize border ${
//               selected === cat
//                 ? "bg-indigo-400 text-black border-indigo-400"
//                 : "border-gray-600 hover:border-indigo-400 hover:text-white"
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Projects */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredProjects.map((project, index) => (
//           <a
//             href={project.link}
//             target="_blank"
//             rel="noreferrer"
//             key={index}
//             className="group relative bg-[#1e1e1e] rounded-lg overflow-hidden shadow-lg"
//           >
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition">
//               <FiEye className="text-indigo-400 text-2xl mb-2" />
//               <h3 className="text-lg font-medium text-white">
//                 {project.title}
//               </h3>
//               <p className="text-sm text-gray-300">{project.category}</p>
//             </div>
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// }



import { useState } from "react";
import { FiEye, FiGithub, FiExternalLink, FiX } from "react-icons/fi";

const projects = [
  {
    title: "Phone Price Comparison App",
    category: "mern",
    image: "https://cdn.dribbble.com/userupload/39630429/file/original-c5b7dad6cbb12b0deb5b19640e3c0c05.jpg?format=webp&resize=400x300&vertical=center",
    description: "A full-stack application that compares phone prices across multiple retailers with user accounts and wishlist functionality.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "MERN Blog Platform",
    category: "mern",
    image: "https://static.wixstatic.com/media/0784b1_1d0aba6b9f0b4610a08cd3e9c8e62ce4~mv2.jpg/v1/fill/w_1200,h_628,al_c/0784b1_1d0aba6b9f0b4610a08cd3e9c8e62ce4~mv2.jpg",
    description: "Feature-rich blogging platform with markdown support, user authentication, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Redux"],
    githubLink: "#",
    liveLink: "#"
  },  {
    title: "MERN Blog Platform",
    category: "mern",
    image: "https://static.wixstatic.com/media/0784b1_1d0aba6b9f0b4610a08cd3e9c8e62ce4~mv2.jpg/v1/fill/w_1200,h_628,al_c/0784b1_1d0aba6b9f0b4610a08cd3e9c8e62ce4~mv2.jpg",
    description: "Feature-rich blogging platform with markdown support, user authentication, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Redux"],
    githubLink: "#",
    liveLink: "#"
  },  {
    title: "MERN Blog Platform",
    category: "mern",
    image: "https://static.wixstatic.com/media/0784b1_1d0aba6b9f0b4610a08cd3e9c8e62ce4~mv2.jpg/v1/fill/w_1200,h_628,al_c/0784b1_1d0aba6b9f0b4610a08cd3e9c8e62ce4~mv2.jpg",
    description: "Feature-rich blogging platform with markdown support, user authentication, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Redux"],
    githubLink: "#",
    liveLink: "#"
  },  {
    title: "MERN Blog Platform",
    category: "mern",
    image: "https://static.wixstatic.com/media/0784b1_1d0aba6b9f0b4610a08cd3e9c8e62ce4~mv2.jpg/v1/fill/w_1200,h_628,al_c/0784b1_1d0aba6b9f0b4610a08cd3e9c8e62ce4~mv2.jpg",
    description: "Feature-rich blogging platform with markdown support, user authentication, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Redux"],
    githubLink: "#",
    liveLink: "#"
  },  {
    title: "MERN Blog Platform",
    category: "mern",
    image: "https://static.wixstatic.com/media/0784b1_1d0aba6b9f0b4610a08cd3e9c8e62ce4~mv2.jpg/v1/fill/w_1200,h_628,al_c/0784b1_1d0aba6b9f0b4610a08cd3e9c8e62ce4~mv2.jpg",
    description: "Feature-rich blogging platform with markdown support, user authentication, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Redux"],
    githubLink: "#",
    liveLink: "#"
  },
  // ... other projects with added details
];

export default function Portfolio() {
 const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="text-gray-300 space-y-8 max-w-7xl mx-auto px-4 py-4">
      {/* Title */}
      {/* <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
          My Projects
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Here are some of my selected works. Click on any project to view details.
        </p>
      </div> */}

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            onClick={() => setSelectedProject(project)}
            className="group relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-indigo-500/20 cursor-pointer"
          >
            {/* Project Image */}
            <div className="h-60 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            
            {/* Project Info */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-indigo-900/50 text-indigo-300">
                  {project.category}
                </span>
              </div>
              <p className="text-gray-400 line-clamp-2 text-sm">{project.description}</p>
              
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors">
                <FiEye className="text-lg" />
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div 
            className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <FiX className="text-xl" />
            </button>
            
            {/* Modal Content */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Project Image */}
              <div className="md:sticky md:top-0 h-full">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-80 md:h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                />
              </div>
              
              {/* Project Details */}
              <div className="p-8">
                <div className="mb-6">
                  <span className="text-sm px-3 py-1 rounded-full bg-indigo-900/50 text-indigo-300 inline-block mb-3">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <p className="text-gray-300">{selectedProject.description}</p>
                </div>
                
                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} className="text-sm px-3 py-1 rounded-full bg-gray-800 text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <FiGithub className="text-lg" />
                      View Code
                    </a>
                  )}
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
                    >
                      <FiExternalLink className="text-lg" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}