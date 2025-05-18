import { FaMobileAlt, FaCamera } from "react-icons/fa";

export default function About() {
  return (
    <section className="space-y-8 text-gray-300">
      {/* ABOUT */}
      <div>
        <h2 className="text-2xl font-semibold text-white mb-2">About Me</h2>
        <p>
          I am a seasoned mobile application developer with over 5 years of experience specializing in Android Native, Flutter, and Xamarin Cross-Platform technologies. I focus on crafting innovative, high-performance mobile applications that meet user and business needs while adhering to the highest quality standards.
        </p>
      </div>

      {/* CORE COMPETENCIES */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">Core Competencies</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Advanced proficiency in Android Studio, Java, Dart, and Flutter.</li>
          <li>Integrating SQLite, REST APIs, and Firebase (Auth, DB, FCM, etc.).</li>
          <li>Google Maps API, payment gateways (e.g., Stripe).</li>
          <li>Version control with Git, CI/CD automation.</li>
          <li>Deep knowledge of app lifecycle, architecture, and trends.</li>
          <li>Strong debugging and problem-solving skills.</li>
        </ul>
      </div>

      {/* KEY CONTRIBUTIONS */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">Key Contributions</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Collaborated with designers and QA for seamless UX.</li>
          <li>Ensured app responsiveness through rigorous testing.</li>
          <li>Used clean coding standards for scalable development.</li>
          <li>Incorporated trending features to enhance app functionality.</li>
        </ul>
      </div>

      {/* SERVICES */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">What I'm Doing</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#1e1e1e] p-4 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="text-yellow-400 text-2xl mb-2"><FaMobileAlt /></div>
            <h4 className="text-white font-medium mb-1">Mobile Apps</h4>
            <p className="text-sm text-gray-400">Professional development of applications for iOS and Android.</p>
          </div>
          <div className="bg-[#1e1e1e] p-4 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="text-yellow-400 text-2xl mb-2"><FaCamera /></div>
            <h4 className="text-white font-medium mb-1">Photography</h4>
            <p className="text-sm text-gray-400">I make high-quality photos of any category at a professional level.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
