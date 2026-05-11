"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden border-t border-white/10">

      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-10 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6"
      >

        {/* Logo */}
        <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Suryateja
        </h2>

        {/* Text */}
        <p className="text-gray-400 text-center">
          © 2026 Suryateja Kesireddy. Built with Next.js,
          Tailwind CSS & Framer Motion.
        </p>

        {/* Small Button */}
        <motion.a
          whileHover={{ scale: 1.08 }}
          href="#"
          className="px-5 py-2 rounded-full border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition duration-300"
        >
          Back to Top
        </motion.a>

      </motion.div>
    </footer>
  );
}