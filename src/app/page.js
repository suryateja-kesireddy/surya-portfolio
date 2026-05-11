"use client";

import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-white overflow-hidden relative">

      {/* Navbar */}
      <Navbar />

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full blur-[120px] opacity-20"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500 rounded-full blur-[120px] opacity-20"></div>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

        {/* Glow Effects */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/20 blur-[180px] rounded-full"></div>

        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/20 blur-[180px] rounded-full"></div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

        <div className="relative z-10 max-w-7xl w-full grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <div>

            <p className="uppercase tracking-[8px] text-cyan-400 text-sm mb-8">
              JAVA FULL STACK DEVELOPER
            </p>

            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="leading-[0.9]"
            >

              <span className="block text-7xl md:text-[9rem] font-black text-white">
                SURYA
              </span>

              <span className="block text-7xl md:text-[9rem] font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                TEJA
              </span>

            </motion.h1>

            <p className="mt-10 text-xl text-gray-400 leading-relaxed max-w-xl">
              Building premium digital experiences using Java,
              Spring Boot, React, Next.js and modern frontend technologies.
            </p>

            {/* Buttons */}
            <div className="flex gap-6 mt-12 flex-wrap">

              <a
                href="#projects"
                className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition duration-300"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-8 py-4 rounded-full border border-white/10 backdrop-blur-xl bg-white/5 hover:border-cyan-400 transition duration-300"
              >
                Contact Me
              </a>

            </div>

          </div>

          {/* RIGHT SIDE CARD */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[40px] p-10 shadow-2xl"
          >

            <div className="space-y-6">

              <div className="flex items-center justify-between p-6 rounded-3xl bg-black/40 border border-white/5">
                <span className="text-gray-400">Frontend</span>

                <span className="text-cyan-400 font-bold">
                  React / Next.js
                </span>
              </div>

              <div className="flex items-center justify-between p-6 rounded-3xl bg-black/40 border border-white/5">
                <span className="text-gray-400">Backend</span>

                <span className="text-purple-400 font-bold">
                  Spring Boot
                </span>
              </div>

              <div className="flex items-center justify-between p-6 rounded-3xl bg-black/40 border border-white/5">
                <span className="text-gray-400">Database</span>

                <span className="text-cyan-400 font-bold">
                  MySQL / MongoDB
                </span>
              </div>

              <div className="flex items-center justify-between p-6 rounded-3xl bg-black/40 border border-white/5">
                <span className="text-gray-400">Projects</span>

                <span className="text-purple-400 font-bold">
                  Full Stack Apps
                </span>
              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* OTHER SECTIONS */}
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

    </main>
  );
}