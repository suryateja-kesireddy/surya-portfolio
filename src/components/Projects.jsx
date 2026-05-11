"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Laundry Service System",
    description:
      "Full Stack laundry management system with JWT authentication, order tracking, dashboard, and MongoDB integration using Spring Boot.",
    tech: ["Java", "Spring Boot", "MongoDB", "JWT", "HTML", "CSS"],
    github: "https://github.com/suryateja-0423/surya",
    demo: "#",
  },
  {
    title: "Instagram Clone",
    description:
      "Instagram-like image sharing platform with authentication, feeds, uploads, and dynamic frontend rendering.",
    tech: ["Spring Boot", "JavaScript", "SQL", "HTML", "CSS"],
    github: "https://github.com/suryateja-0423/surya",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section className="relative py-32 px-6 bg-black text-white overflow-hidden">
      <section id="projects"></section>

      {/* Background Glow */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                scale: 1.03,
              }}
              viewport={{ once: true }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl hover:border-cyan-400 transition duration-300"
            >

              {/* Title */}
              <h3 className="text-3xl font-bold mb-5 text-white">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-5">

                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition duration-300"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  className="flex items-center gap-2 px-5 py-3 rounded-full border border-white hover:bg-white hover:text-black transition duration-300"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}