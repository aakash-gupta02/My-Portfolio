import { useState } from "react";
import { IoPaperPlaneOutline } from "react-icons/io5";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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

      <section className="relative h-64 w-full mb-8 rounded-2xl border border-gray-700 overflow-hidden">
        <iframe
          title="Location map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.948769377993!2d72.97808881490138!3d19.21833098700044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9001f6e5b3b%3A0x8c3b0b3b0b3b0b3b!2sThane%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1620222222222!5m2!1sen!2sin"

          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-5">Contact Form</h3>

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
            rows={5}
            className="text-gray-200 bg-gray-900 placeholder-gray-500 text-base font-normal px-5 py-4 rounded-xl border border-gray-700 focus:outline-none focus:border-indigo-400 resize-y max-h-52"
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
                : "hover:bg-gradient-to-r hover:from-indigo-400 hover:via-indigo-300 hover:to-indigo-400"
            }`}
          >
            <IoPaperPlaneOutline size={20} />
            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
          </button>
        </form>
      </section>
    </article>
  );
}
