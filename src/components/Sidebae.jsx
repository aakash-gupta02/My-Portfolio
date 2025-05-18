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

export default function Sidebar() {
  const contactDetails = [
    {
      icon: <FiMail />,
      label: "Email",
      value: "aakash254631@gmail.com",
      href: "mailto:aakash254631@gmail.com",
    },
    {
      icon: <FiPhone />,
      label: "Phone",
      value: "+91 999999999",
      href: "tel:+91999999999",
    },
    {
      icon: <FiCalendar />,
      label: "DOB",
      value: "November 05, 2004",
    },
    {
      icon: <FiMapPin />,
      label: "Location",
      value: "Mumbai, Maharastra, India",
    },
  ];

  const socialLinks = [
    {
      icon: <FiGithub />,
      href: "https://github.com/alfaizkhan",
      label: "GitHub",
    },
    {
      icon: <FiLinkedin />,
      href: "https://linkedin.com/in/alfaizkhan",
      label: "LinkedIn",
    },
    {
      icon: <FiInstagram />,
      href: "https://instagram.com/i_m_alfaizkhan",
      label: "Instagram",
    },
    {
      icon: <FiMessageCircle />,
      href: "https://t.me/i_m_alfaizkhan",
      label: "Telegram",
    },
  ];

  return (
    <aside className="bg-[#1a1a1a] rounded-2xl border border-gray-700 shadow-lg mb-6 md:min-w-[100px] max-h-[fit-content] px-8 py-10 space-y-10">

      {/* Avatar & Info */}
      <div className=" flex flex-col items-center space-y-6 ">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
          alt="Profile"
          className="w-38 h-38 bg-gray-800/40 rounded-xl object-cover"
        />

        <div className="flex flex-col items-center" > 
          <h1 className="text-2xl font-semibold text-white">Aakash Gupta</h1>
          <p className="text-xs bg-gray-800 text-white inline-block px-3 py-1 mt-1 rounded-md">
            Web Developer
          </p>
        </div>
      </div>

      <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      {/* Contact Details */}
      <ul className="space-y-4 text-sm">

        {contactDetails.map((item, index) => (
    <li
      key={index}
      className="flex items-center gap-4 text-gray-300 group transition-all"
    >
      {/* Icon Box with Left White Line */}
      <span className="relative h-9 w-9 rounded-lg bg-gray-800/80 flex items-center justify-center shadow-md">
        <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-0.5 bg-white/50 rounded"></span>
        {item.icon}
      </span>

      {/* Label and Value */}
      <div className="flex flex-col">
        <span className="text-xs text-gray-400">{item.label}</span>
        {item.href ? (
          <a
            href={item.href}
            className="text-sm text-gray-200 hover:underline transition-all"
          >
            {item.value}
          </a>
        ) : (
          <span className="text-sm text-gray-200">{item.value}</span>
        )}
      </div>
    </li>
  ))}


      </ul>

      <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />


      {/* Social Links */}
      <div className="flex gap-4 text-xl text-gray-400">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
            title={link.label}
            className="hover:text-white transition-transform hover:scale-110"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </aside>
  );

  
}
