"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { name: "Home", link: "#" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md"
    >

      {/* Navbar Container */}
      <div className="w-full">

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">

          {/* LEFT SIDE MOBILE MENU */}
          <div className="md:hidden flex items-center">

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-3xl"
            >
              ☰
            </button>

          </div>

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex items-center gap-14 mx-auto">

            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative group"
              >

                <a
                  href={item.link}
                  className="text-sm uppercase tracking-[3px] text-gray-300 hover:text-white transition duration-300"
                >
                  {item.name}
                </a>

                {/* Hover Line */}
                <span className="absolute left-0 -bottom-2 h-px w-0 bg-white transition-all duration-300 group-hover:w-full"></span>

              </li>
            ))}

          </ul>

          {/* RIGHT SIDE RESUME */}
          <div className="flex items-center">

            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-4 md:px-6
                py-2 md:py-3
                text-sm md:text-base
                rounded-full
                border border-white/10
                text-white
                hover:bg-white
                hover:text-black
                transition duration-300
              "
            >
              Resume
            </motion.a>

          </div>

        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            md:hidden
            mx-4
            mt-2
            rounded-3xl
            bg-black/80
            backdrop-blur-2xl
            border border-white/10
            p-6
          "
        >

          <ul className="flex flex-col gap-6">

            {navItems.map((item, index) => (
              <li key={index}>

                <a
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 text-lg hover:text-cyan-400 transition duration-300"
                >
                  {item.name}
                </a>

              </li>
            ))}

          </ul>

        </motion.div>

      )}

    </motion.nav>
  );
}