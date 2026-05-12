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

        setSuccess("success");

        setFormData({
          name: "",
          email: "",
          message: "",
        });

      } else {

        setSuccess("error");

      }

    } catch (error) {

      setSuccess("error");

    }

    setLoading(false);

  };

  return (

    <section
      id="contact"
      className="relative py-24 md:py-36 px-4 sm:px-6 bg-black text-white overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/20 blur-[140px] rounded-full"></div>

      {/* Glow Center */}
      <div className="
        absolute
        top-40
        left-1/2
        -translate-x-1/2
        w-[350px]
        h-[350px]
        bg-cyan-500/10
        blur-[140px]
        rounded-full
      "></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >

          <p className="
            uppercase
            tracking-[8px]
            text-cyan-400
            text-xs
            md:text-sm
            mb-5
          ">
            CONTACT
          </p>

          <h2 className="
            text-[2.7rem]
            sm:text-[4rem]
            md:text-[6rem]
            font-black
            leading-[0.9]
            tracking-[-4px]
          ">

            LET’S CREATE
            <br />

            <span className="
              bg-gradient-to-r
              from-cyan-400
              via-blue-400
              to-purple-500
              bg-clip-text
              text-transparent
            ">
              SOMETHING GREAT
            </span>

          </h2>

        </motion.div>

        {/* Main Layout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            grid
            lg:grid-cols-2
            gap-10
            md:gap-20
            items-center
          "
        >

          {/* LEFT SIDE */}
          <div>

            <p className="
              uppercase
              tracking-[6px]
              text-cyan-400
              text-xs
              mb-5
            ">
              AVAILABLE FOR WORK
            </p>

            {/* Updated Premium Heading */}
            <h3 className="
              text-[2.3rem]
              sm:text-[3rem]
              md:text-[4.4rem]
              font-extrabold
              leading-[0.95]
              tracking-[-3px]
              mb-8
            ">

              <span className="block text-white/95">
                Have an idea?
              </span>

              <span className="
                block
                bg-gradient-to-r
                from-cyan-400
                via-blue-400
                to-purple-500
                bg-clip-text
                text-transparent
              ">
                Let’s build it.
              </span>

            </h3>

            {/* Updated Paragraph */}
            <p className="
              text-gray-400
              text-[15px]
              md:text-[17px]
              leading-[1.9]
              max-w-md
              font-light
            ">

              I build modern full stack applications with scalable
              backend systems, premium interfaces, clean architecture
              and smooth user experiences.

            </p>

            {/* Status */}
            <div className="flex items-center gap-3 mt-10">

              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

              <p className="text-gray-400 text-sm">
                Available for internships & freelance work
              </p>

            </div>

            {/* Contact Info */}
            <div className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-4
              mt-10
            ">

              <div className="
                p-5
                rounded-[24px]
                bg-white/[0.03]
                border border-white/10
              ">

                <p className="text-gray-500 text-xs tracking-[3px] mb-3">
                  EMAIL
                </p>

                <p className="text-white text-sm break-all">
                  ksuryateja170@gmail.com
                </p>

              </div>

              <div className="
                p-5
                rounded-[24px]
                bg-white/[0.03]
                border border-white/10
              ">

                <p className="text-gray-500 text-xs tracking-[3px] mb-3">
                  RESPONSE
                </p>

                <p className="text-white text-sm">
                  Within 24 Hours
                </p>

              </div>

            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-10">

              <a
                href="mailto:ksuryateja170@gmail.com"
                className="
                  w-12 h-12
                  flex items-center justify-center
                  rounded-[18px]
                  bg-white/[0.03]
                  border border-white/10
                  text-gray-300
                  hover:border-cyan-400
                  hover:text-cyan-400
                  transition duration-300
                "
              >
                <FaEnvelope size={18} />
              </a>

              <a
                href="https://github.com/suryateja-kesireddy"
                target="_blank"
                className="
                  w-12 h-12
                  flex items-center justify-center
                  rounded-[18px]
                  bg-white/[0.03]
                  border border-white/10
                  text-gray-300
                  hover:border-white
                  hover:text-white
                  transition duration-300
                "
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/suryateja-kesireddy"
                target="_blank"
                className="
                  w-12 h-12
                  flex items-center justify-center
                  rounded-[18px]
                  bg-white/[0.03]
                  border border-white/10
                  text-gray-300
                  hover:border-cyan-400
                  hover:text-cyan-400
                  transition duration-300
                "
              >
                <FaLinkedin size={18} />
              </a>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="
            backdrop-blur-xl
            bg-white/[0.03]
            border border-white/10
            rounded-[30px]
            p-5 md:p-8
          ">

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Name */}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="
                  w-full
                  px-5
                  py-4
                  rounded-[22px]
                  bg-black/30
                  border border-white/10
                  text-white
                  placeholder:text-gray-500
                  outline-none
                  transition-all duration-300
                  focus:border-cyan-400
                  focus:shadow-[0_0_30px_rgba(34,211,238,0.12)]
                "
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="
                  w-full
                  px-5
                  py-4
                  rounded-[22px]
                  bg-black/30
                  border border-white/10
                  text-white
                  placeholder:text-gray-500
                  outline-none
                  transition-all duration-300
                  focus:border-cyan-400
                  focus:shadow-[0_0_30px_rgba(34,211,238,0.12)]
                "
              />

              {/* Message */}
              <textarea
                rows="7"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                className="
                  w-full
                  px-5
                  py-4
                  rounded-[22px]
                  bg-black/30
                  border border-white/10
                  text-white
                  placeholder:text-gray-500
                  outline-none
                  resize-none
                  transition-all duration-300
                  focus:border-cyan-400
                  focus:shadow-[0_0_30px_rgba(34,211,238,0.12)]
                "
              ></textarea>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={loading}
                className="
                  w-full
                  py-4
                  rounded-[22px]
                  bg-gradient-to-r
                  from-cyan-500
                  to-purple-500
                  text-white
                  font-semibold
                  text-sm
                  uppercase
                  tracking-[2px]
                  shadow-[0_0_40px_rgba(168,85,247,0.25)]
                "
              >

                {loading ? "Sending..." : "Send Message"}

              </motion.button>

              {/* Success */}
              {success === "success" && (

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="
                    rounded-[20px]
                    border border-cyan-400/20
                    bg-cyan-400/10
                    p-4
                    text-cyan-300
                    text-center
                    text-sm
                  "
                >

                  ✓ Message sent successfully.
                  <br />

                  I’ll get back to you soon.

                </motion.div>

              )}

              {/* Error */}
              {success === "error" && (

                <div
                  className="
                    rounded-[20px]
                    border border-red-400/20
                    bg-red-400/10
                    p-4
                    text-red-300
                    text-center
                    text-sm
                  "
                >

                  Failed to send message.

                </div>

              )}

            </form>

          </div>

        </motion.div>

      </div>

    </section>
  );
}