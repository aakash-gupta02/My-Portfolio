import { useState } from "react";
import { FiEye } from "react-icons/fi";

const projects = [
  {
    title: "E-Commerce App",
    category: "flutter",
    image: "https://source.unsplash.com/400x300/?ecommerce,app",
    link: "#",
  },
  {
    title: "Personal Blog",
    category: "web",
    image: "https://source.unsplash.com/400x300/?blog,web",
    link: "#",
  },
  {
    title: "Fitness Tracker",
    category: "android",
    image: "https://source.unsplash.com/400x300/?fitness,app",
    link: "#",
  },
  {
    title: "Photography Portfolio",
    category: "design",
    image: "https://source.unsplash.com/400x300/?photography,portfolio",
    link: "#",
  },
  {
    title: "Crypto Wallet UI",
    category: "design",
    image: "https://source.unsplash.com/400x300/?crypto,ui",
    link: "#",
  },
];

const categories = ["all", "flutter", "web", "android", "design"];

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
                ? "bg-yellow-400 text-black border-yellow-400"
                : "border-gray-600 hover:border-yellow-400 hover:text-white"
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
              <FiEye className="text-yellow-400 text-2xl mb-2" />
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
