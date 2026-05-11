"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    setSuccess("");

    try {

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {

        setSuccess("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });

      } else {

        setSuccess("Something went wrong.");

      }

    } catch (error) {

      setSuccess("Failed to send message.");

    }

    setLoading(false);

  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 bg-black text-white overflow-hidden"
    >

      {/* Glow Background */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          Contact Me
        </motion.h2>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl"
        >

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* Name */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-2xl bg-black/40 border border-white/10 text-white outline-none focus:border-cyan-400 transition duration-300"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-2xl bg-black/40 border border-white/10 text-white outline-none focus:border-cyan-400 transition duration-300"
            />

            {/* Message */}
            <textarea
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full p-4 rounded-2xl bg-black/40 border border-white/10 text-white outline-none focus:border-cyan-400 transition duration-300"
            ></textarea>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-lg shadow-lg"
            >

              {loading ? "Sending..." : "Send Message"}

            </motion.button>

            {/* Success Message */}
            {success && (
              <p className="text-center text-cyan-400 mt-4">
                {success}
              </p>
            )}

          </form>

          {/* Social Icons */}
          <div className="flex justify-center gap-8 mt-10 text-3xl text-gray-400">

            <a
              href="mailto:ksuryateja170@gmail.com"
              className="hover:text-cyan-400 transition duration-300"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://github.com/suryateja-0423/surya"
              target="_blank"
              className="hover:text-white transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/suryateja-kesireddy-881367278"
              target="_blank"
              className="hover:text-cyan-400 transition duration-300"
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}