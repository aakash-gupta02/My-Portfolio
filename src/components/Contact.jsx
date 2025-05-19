import { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiCalendar,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiMessageCircle,
} from "react-icons/fi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import Button from "./Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const socialLinks = [
    {
      icon: <FiGithub />,
      href: "https://github.com/aakash-gupta02",
      label: "GitHub",
    },
    {
      icon: <FiLinkedin />,
      href: "#",
      label: "LinkedIn",
    },
    {
      icon: <FiInstagram />,
      href: "https://www.instagram.com/aakash.grafix",
      label: "Instagram",
    },
    {
      icon: <FiMessageCircle />,
      href: "t.me/aakashgupta052004",
      label: "Telegram",
    },
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Here you would handle form submission logic (API call, validation, etc.)
    setTimeout(() => setIsSubmitting(false), 1000); // mock submit delay
  };

  return (
    <article data-page="contact" className="max-w-3xl mx-auto p-6">
      <header>
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
      </header>

      <section>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2">
            <input
              type="text"
              name="fullname"
              placeholder="Full name"
              required
              value={formData.fullname}
              onChange={handleChange}
              className="text-gray-200 bg-gray-900 placeholder-gray-500 text-base font-normal px-5 py-3 rounded-xl border border-gray-700 focus:outline-none focus:border-indigo-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              value={formData.email}
              onChange={handleChange}
              className="text-gray-200 bg-gray-900 placeholder-gray-500 text-base font-normal px-5 py-3 rounded-xl border border-gray-700 focus:outline-none focus:border-indigo-400"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="text-gray-200 bg-gray-900 placeholder-gray-500 text-base font-normal px-5 py-4 rounded-xl border border-gray-700 focus:outline-none focus:border-indigo-400 w-full resize-none "
          ></textarea>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex justify-center items-center gap-3 px-5 py-3 rounded-xl text-indigo-400 text-base font-medium
            bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 shadow-md
            transition-colors duration-300
            ${
              isSubmitting
                ? "opacity-70 cursor-not-allowed"
                : "hover:bg-gradient-to-r hover:from-indigo-400 hover:via-indigo-300 hover:to-indigo-400 hover:text-gray-800 "
            }`}
          >
            <IoPaperPlaneOutline size={20} />
            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
          </button>
        </form>
      </section>

      <header>
        {/* <Button/> */}
        <h2 className="text-3xl font-semibold my-6">Socials</h2>
      </header>

      <div className="grid grid-cols-2 grid-rows-1 gap-4 text-xl text-indigo-400">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
            title={link.label}
            className="hover:text-white transition-transform hover:scale-110 flex items-center gap-2  "
          >
            <span className="relative h-9 w-9 rounded-lg bg-gray-800/80 flex items-center justify-center shadow-md">
              {" "}
              <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-0.5 bg-white/50 rounded"></span>
              {link.icon}
            </span>{" "}
            {link.label}
          </a>
        ))}
      </div>

    </article>
  );
}
