// export default function Navbar({ activePage, setActivePage }) {
//   const navLinks = ["about", "resume", "portfolio", "blog", "contact"];

//   return (
//     // <nav className="fixed bottom-0 left-0 w-full z-50 bg-[hsla(240,1%,17%,0.75)] backdrop-blur-md border-t border-gray-800 md:rounded-t-xl shadow-md">
//     <div>
//       <nav className=" right-0 absolute w-fit z-50 pl-10 bg-[hsla(240,1%,17%,0.75)] backdrop-blur-md border-t border-gray-800 md:rounded-t-xl shadow-md  ">

// <h1>{activePage}</h1>

//         <div className="" >

//           <ul className="flex justify-end items-center gap-6 px-4 py-3 md:py-4">
//             {navLinks.map((link) => (
//               <li key={link}>
//                 <button
//                   onClick={() => setActivePage(link)}
//                   className={`capitalize text-sm md:text-base font-medium transition-colors duration-200 ${
//                     activePage === link
//                       ? "text-indigo-400"
//                       : "text-gray-300 hover:text-white"
//                   }`}
//                 >
//                   {link}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//       </nav>
//     </div>
//   );
// }

export default function Navbar({ activePage, setActivePage }) {
  const navLinks = ["about", "resume", "projects","github", "contact"];

  return (
    <div className=" flex items-center justify-between px-6 py-4 z-50">

      {/* Left - Plain name or page */}
      <div className=" capitalize text-white text-xl font-bold">
        {activePage}{" "}
      </div>

      {/* Right - Nav with blurred background */}
      <nav className="backdrop-blur-md bg-[hsla(240,1%,17%,0.75)] border border-gray-700 rounded-xl px-4 py-2 shadow-md">
        <ul className="flex items-center gap-4">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => setActivePage(link)}
                className={`capitalize text-sm font-medium transition-colors duration-200 ${
                  activePage === link
                    ? "text-indigo-300"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </nav>

    </div>
  );
}
