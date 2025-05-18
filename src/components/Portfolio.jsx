import { useState } from "react";
import { FiEye } from "react-icons/fi";

const projects = [
  {
    title: "Phone Price Comparison App",
    category: "mern",
    image: "https://private-user-images.githubusercontent.com/175836941/436109977-cdbf68b0-be44-4880-8e7e-5bd3fa0f3a40.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDc1NzY5NDIsIm5iZiI6MTc0NzU3NjY0MiwicGF0aCI6Ii8xNzU4MzY5NDEvNDM2MTA5OTc3LWNkYmY2OGIwLWJlNDQtNDg4MC04ZTdlLTViZDNmYTBmM2E0MC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUxOFQxMzU3MjJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01ZTc2MTYzNzZmMjQ2ZDkyMmJhMzBkMTRmMDc4NmFlODA5ZjUxMDQ5YWU4YWY3ZGZlYzUwMTBkNzBkZWE3N2QyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.CRx9WlZEwFxcAmvQCxQa2jvTEeFshX8e9GwGT-dm0XU",
    link: "#", // Replace with live or GitHub link
  },
  {
    title: "MERN Blog Platform",
    category: "mern",
    image: "https://private-user-images.githubusercontent.com/175836941/444625485-ccf371a5-92d1-476d-bba7-cc073091bd38.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDc1NzY4NzUsIm5iZiI6MTc0NzU3NjU3NSwicGF0aCI6Ii8xNzU4MzY5NDEvNDQ0NjI1NDg1LWNjZjM3MWE1LTkyZDEtNDc2ZC1iYmE3LWNjMDczMDkxYmQzOC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUxOFQxMzU2MTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04NjViNjI4Njc2MWM2MjY4N2EzZjE5NGRhZmNlNjA3NDc1NTIzOTQ5YTE4ZmE2MDFkMzNkZDUzYjdjOTUzYjc1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.kIDQxfMmGuZEoSyznCgR25SkFL_H0Ib9wod5lzBMLmQ",
    link: "#",
  },
  {
    title: "NASA API Explorer",
    category: "react",
    image: "https://www.cssdesignawards.com/cdasites/2016/201608/20160810174825.jpg",
    link: "#",
  },
  {
    title: "Responsive Sign-up Page",
    category: "frontend",
    image: "https://i.ytimg.com/vi/ROqsYIVCJ5Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCgqUlya94rVUvUdrJGZVFuvxvfIQ",
    link: "#",
  },
  {
    title: "Weather App (API based)",
    category: "react",
    image: "https://www.sketchappsources.com/resources/source-image/weather-app-icons.jpg",
    link: "#",
  },
  {
    title: "GitHub User Finder",
    category: "react",
    image: "https://github.blog/wp-content/uploads/2023/01/1200x640.png?resize=1200%2C640",
    link: "#",
  },
];


const categories = ["all", "react", "mern", "frontend", "design"];

export default function Portfolio() {
  const [selected, setSelected] = useState("all");

  const filteredProjects =
    selected === "all"
      ? projects
      : projects.filter((p) => p.category === selected);

  return (
    <section className="text-gray-300 space-y-8">
      {/* Filter */}
      <div className="flex gap-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-1 rounded-full text-sm font-medium capitalize border ${
              selected === cat
                ? "bg-indigo-400 text-black border-indigo-400"
                : "border-gray-600 hover:border-indigo-400 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            key={index}
            className="group relative bg-[#1e1e1e] rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition">
              <FiEye className="text-indigo-400 text-2xl mb-2" />
              <h3 className="text-lg font-medium text-white">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300">{project.category}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
