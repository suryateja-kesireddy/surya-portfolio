"use client";

import { motion } from "framer-motion";

const navItems = [
  { name: "Home", link: "#" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50"
    >

      {/* Transparent Navbar */}
      <div className="bg-transparent">

        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">

          {/* Logo */}
         <a
            href="#"
            className="text-3xl font-black tracking-tight"
          >
            </a>
           { /*  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Suryateja
            </span>
          </a>*/}

          {/* Nav Links */}
          <ul className="hidden md:flex items-center gap-14">

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

                {/* Minimal Underline */}
                <span className="absolute left-0 -bottom-2 h-px w-0 bg-white transition-all duration-300 group-hover:w-full"></span>

              </li>
            ))}

          </ul>

          {/* Resume Button */}
          <motion.a
  whileHover={{ y: -2 }}
  whileTap={{ scale: 0.98 }}
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition duration-300"
>
  Resume
</motion.a>

        </div>

      </div>

    </motion.nav>
  );
}