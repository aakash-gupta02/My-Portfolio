import React from "react";

const blogs = [
  {
    id: 1,
    title: "Exploring the Stripe Payment Gateway In Flutter",
    category: "Flutter",
    date: "Jul 27, 2022",
    readTime: "7 min read",
    description: "Stripe payment gateway integration in flutter project.",
    url: "https://medium.com/@i_m_alfaizkhan/exploring-the-stripe-payment-gateway-in-flutter-e8524a0ade75",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    alt: "Stripe Payment Gateway Flutter",
  },
  {
    id: 2,
    title: "Getting Started with React 18",
    category: "React",
    date: "Apr 15, 2023",
    readTime: "5 min read",
    description:
      "A quick guide on what's new in React 18 and how to upgrade your app.",
    url: "https://reactjs.org/blog/2022/03/29/react-v18.html",
    image:
      "https://images.unsplash.com/photo-1559027615-14134c34a6cc?auto=format&fit=crop&w=800&q=80",
    alt: "React 18 Guide",
  },
  {
    id: 3,
    title: "Mastering Tailwind CSS for Rapid UI Development",
    category: "CSS",
    date: "Feb 10, 2023",
    readTime: "8 min read",
    description:
      "How Tailwind CSS can speed up your UI design process with utility classes.",
    url: "https://tailwindcss.com/docs/utility-first",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    alt: "Tailwind CSS UI",
  },
];

export default function Blog() {
  return (
    <article data-page="blog" className="max-w-4xl mx-auto p-6">
      <header>
        <h2 className="text-3xl font-semibold mb-8">Blog</h2>
      </header>

      <section className="mb-4">
        <ul className="grid grid-cols-1 gap-6">
          {blogs.map((blog) => (
            <li key={blog.id} className="group">
              <a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block bg-gray-900 rounded-2xl shadow-lg overflow-hidden"
              >
                {/* Overlay for layered background */}
                <span className="absolute inset-1 rounded-2xl bg-gray-800 -z-10"></span>

                <figure className="w-full h-48 overflow-hidden rounded-xl">
                  <img
                    src={blog.image}
                    alt={blog.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </figure>

                <div className="p-4">
                  <div className="flex items-center gap-3 mb-2 text-gray-400 text-sm font-light">
                    <p>{blog.category}</p>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 inline-block"></span>
                    <time dateTime={blog.date}>{blog.date} · {blog.readTime}</time>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-yellow-400">
                    {blog.title}
                  </h3>

                  <p className="text-gray-300 text-base font-light leading-relaxed">
                    {blog.description}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
