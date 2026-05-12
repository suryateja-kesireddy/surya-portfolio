"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaRocket,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 md:py-40 px-5 md:px-6 overflow-hidden"
    >

      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-cyan-500/20 blur-[120px] md:blur-[150px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-purple-500/20 blur-[120px] md:blur-[150px] rounded-full"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >

          <p className="uppercase tracking-[5px] md:tracking-[8px] text-cyan-400 text-[10px] md:text-sm mb-6">
            ABOUT ME
          </p>

          <h2 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.95]">

            <span className="block text-white">
              PASSIONATE
            </span>

            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              DEVELOPER
            </span>

          </h2>

        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-[24px] md:rounded-[28px] p-6 md:p-10 max-w-2xl"
          >

            {/* Top Label */}
            <p className="text-[10px] md:text-sm uppercase tracking-[4px] md:tracking-[5px] text-cyan-400 mb-5 md:mb-6">
              About Me
            </p>

            {/* Main Text */}
            <p className="text-lg md:text-2xl text-gray-200 leading-[1.7] font-light">

              I’m{" "}
              <span className="text-white font-semibold">
                Suryateja Kesireddy
              </span>,
              a Java Full Stack Developer passionate about building scalable applications and premium digital experiences.

              <br /><br />

              Specialized in Java, Spring Boot, React.js,
              Next.js, SQL, and modern frontend engineering.

            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 mt-8">

              {[
                "Java",
                "Spring Boot",
                "React",
                "Next.js",
                "MySQL",
                "MongoDB",
              ].map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full border border-white/10 text-xs md:text-sm text-gray-300 hover:border-cyan-400 hover:text-cyan-300 transition duration-300"
                >
                  {item}
                </span>
              ))}

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6"
          >

            {/* Card 1 */}
            <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[24px] md:rounded-[30px] p-6 md:p-8 hover:-translate-y-3 transition duration-500">

              <FaCode className="text-3xl md:text-4xl text-cyan-400 mb-5 md:mb-6" />

              <h3 className="text-3xl md:text-4xl font-black mb-2">
                Frontend
              </h3>

              <p className="text-gray-400 text-sm md:text-base">
                Modern UI/UX engineering with React & Next.js
              </p>

            </div>

            {/* Card 2 */}
            <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[24px] md:rounded-[30px] p-6 md:p-8 hover:-translate-y-3 transition duration-500">

              <FaServer className="text-3xl md:text-4xl text-purple-400 mb-5 md:mb-6" />

              <h3 className="text-3xl md:text-4xl font-black mb-2">
                Backend
              </h3>

              <p className="text-gray-400 text-sm md:text-base">
                Scalable APIs using Spring Boot architecture
              </p>

            </div>

            {/* Card 3 */}
            <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[24px] md:rounded-[30px] p-6 md:p-8 hover:-translate-y-3 transition duration-500">

              <FaDatabase className="text-3xl md:text-4xl text-cyan-400 mb-5 md:mb-6" />

              <h3 className="text-3xl md:text-4xl font-black mb-2">
                Database
              </h3>

              <p className="text-gray-400 text-sm md:text-base">
                MySQL & MongoDB integration and optimization
              </p>

            </div>

            {/* Card 4 */}
            <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[24px] md:rounded-[30px] p-6 md:p-8 hover:-translate-y-3 transition duration-500">

              <FaRocket className="text-3xl md:text-4xl text-purple-400 mb-5 md:mb-6" />

              <h3 className="text-3xl md:text-4xl font-black mb-2">
                Growth
              </h3>

              <p className="text-gray-400 text-sm md:text-base">
                Continuously improving development & design skills
              </p>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}