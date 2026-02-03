import React, { useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  Github,
  ExternalLink,
  Code2,
  Layers,
  Database,
  Wrench,
  GraduationCap,
  Calendar,
  MapPin,
  Send,
  User,
  Mail,
  MessageSquare,
  Type,
} from "lucide-react";

const SpotlightCard = ({ children, className = "" }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative border border-white/10 bg-neutral-900/40 overflow-hidden pointer-events-auto ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(34, 211, 238, 0.15),
              transparent 80%
            )
          `,
          willChange: "opacity",
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

const MainContent = () => {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingIcon = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:pallav2005sarkar@gmail.com?subject=${formData.subject}&body=Name: ${formData.name}%0AEmail: ${formData.email}%0A%0A${formData.message}`;
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "A full-stack shopping platform with product previews, real-time inventory, and secure checkout.",
      tags: ["React", "Express.js", "MongoDB", "Node.js", "Tailwind"],
      links: {
        demo: "https://my-ecommerce-shop-zeta.vercel.app/",
        git: "https://github.com/PallavSarkar2005/E-commerse-website",
      },
      color: "from-purple-500 to-cyan-500",
    },
    {
      title: "Nanolink",
      desc: "A powerful URL shortening service featuring analytics tracking, custom aliases, and fast redirection.",
      tags: ["React", "Express.js", "MongoDB", "Node.js", "Tailwind"],
      links: {
        demo: "https://nanolink-project.vercel.app",
        git: "https://github.com/PallavSarkar2005/nanolink-project",
      },
      color: "from-pink-500 to-purple-500",
    },
    {
      title: "3D Interactive Website",
      desc: "An immersive 3D web experience built with modern animation libraries for high-performance visuals.",
      tags: ["React", "Spline", "Tailwind", "Framer Motion"],
      links: {
        demo: "#",
        git: "https://github.com/PallavSarkar2005/3d-website",
      },
      color: "from-cyan-500 to-blue-500",
    },
  ];

  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["JavaScript (ES6+)", "Python", "HTML5/CSS3"],
      color: "text-cyan-400",
    },
    {
      title: "Frameworks",
      icon: Layers,
      skills: ["React.js", "Tailwind CSS", "Framer Motion", "Spline"],
      color: "text-purple-400",
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MongoDB", "OracleSQL", "MySQL"],
      color: "text-pink-400",
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: ["Git/GitHub", "Figma", "Postman", "Vercel"],
      color: "text-blue-400",
    },
  ];

  return (
    <div className="pointer-events-none w-full px-6 py-20 md:px-20 overflow-x-hidden">
      <div className="mx-auto max-w-6xl space-y-32">
        <section id="home" className="flex flex-col justify-center pt-20">
          <div className="pointer-events-auto">
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-4 font-mono text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
            >
              Hi, my name is
            </motion.p>
            <div className="mb-4 text-6xl font-bold tracking-tighter text-white md:text-8xl">
              <motion.div
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.08 }}
                className="flex flex-wrap bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto]"
                style={{
                  animation: "textShimmer 3s linear infinite",
                  willChange: "background-position",
                }}
              >
                {"Pallav Sarkar".split("").map((char, index) => (
                  <motion.span key={index} variants={charVariants}>
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.div>
            </div>
            <div className="mb-8 text-4xl font-bold md:text-6xl">
              <motion.div
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.12, delayChildren: 0.5 }}
                className="flex flex-wrap gap-x-3"
              >
                {"I build things for the web.".split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    variants={wordVariants}
                    className="inline-block bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="max-w-xl text-lg text-gray-300 backdrop-blur-sm"
            >
              I'm a software engineer specializing in building exceptional
              digital experiences. Currently, I'm focused on building
              accessible, human-centered products.
            </motion.p>
          </div>
        </section>

        <section id="work">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
            className="mb-12 flex items-center gap-4"
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Projects
            </h2>
            <div className="h-[1px] w-32 bg-white/20"></div>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="pointer-events-auto"
              >
                <SpotlightCard className="flex h-full flex-col justify-between rounded-xl p-6 backdrop-blur-md">
                  <div
                    className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${project.color}`}
                  />
                  <div>
                    <h3 className="mb-2 text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="mb-6 text-sm text-gray-400 leading-relaxed">
                      {project.desc}
                    </p>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white/5 px-3 py-1 text-xs font-mono text-cyan-200 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg bg-cyan-500/10 px-4 py-2 text-sm font-bold text-cyan-400 transition-all hover:bg-cyan-500 hover:text-black"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    <a
                      href={project.links.git}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-white transition-all hover:border-white hover:bg-white/5"
                    >
                      <Github size={16} /> Code
                    </a>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="about">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
            className="mb-12 flex items-center gap-4"
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Technical Skills
            </h2>
            <div className="h-[1px] w-32 bg-white/20"></div>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="pointer-events-auto rounded-xl border border-white/10 bg-neutral-900/60 p-6 backdrop-blur-md transition-colors hover:border-purple-500/50"
              >
                <motion.div
                  variants={floatingIcon}
                  animate="animate"
                  className={`mb-4 inline-flex rounded-lg bg-white/5 p-3 ${cat.color} shadow-[0_0_15px_rgba(0,0,0,0.3)]`}
                >
                  <cat.icon size={28} />
                </motion.div>
                <h3 className="mb-4 text-xl font-bold text-white">
                  {cat.title}
                </h3>
                <ul className="space-y-2">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-sm text-gray-400"
                    >
                      <motion.span
                        initial={{ width: 0 }}
                        whileInView={{ width: 6 }}
                        className={`h-1.5 rounded-full bg-current ${cat.color}`}
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="pb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
            className="mb-12 flex items-center gap-4"
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Education
            </h2>
            <div className="h-[1px] w-32 bg-white/20"></div>
          </motion.div>
          <div className="pointer-events-auto max-w-3xl relative">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ originY: 0 }}
              className="absolute left-[11px] top-4 h-full w-[2px] bg-gradient-to-b from-pink-500 via-purple-500 to-transparent"
            />
            {[
              {
                title: "Bachelor's Degree",
                year: "2024 - 2028",
                color: "bg-pink-500",
                shadow: "magenta",
                university: "Jindal University",
              },
              {
                title: "Higher Secondary",
                year: "2022 - 2024",
                color: "bg-purple-500",
                shadow: "rgba(168,85,247,0.8)",
                university: "Jindal School",
              },
              {
                title: "Secondary School",
                year: "2010 - 2022",
                color: "bg-blue-500",
                shadow: "rgba(59,130,246,0.8)",
                university: "Jindal School",
              },
            ].map((edu, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative mb-12 pl-12"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 * i }}
                  className={`absolute left-0 top-1 h-6 w-6 rounded-full border-4 border-black ${edu.color}`}
                  style={{ boxShadow: `0 0 10px ${edu.shadow}` }}
                />
                <div className="rounded-xl border border-white/10 bg-neutral-900/40 p-8 backdrop-blur-sm hover:bg-neutral-900/60 transition-colors">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                    <h3 className="text-2xl font-bold text-white">
                      {edu.title}
                    </h3>
                    <span className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-xs font-bold text-gray-400 border border-white/10">
                      <Calendar size={12} /> {edu.year}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <GraduationCap size={18} />
                    <span>{edu.university}</span>
                    <span className="mx-2">•</span>
                    <MapPin size={18} />
                    <span>Odisha, India</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="pb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="mb-12 flex items-center gap-4"
          >
            <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
            <div className="h-[1px] w-32 bg-white/20"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pointer-events-auto mx-auto max-w-2xl rounded-2xl border border-white/10 bg-neutral-900/60 p-8 backdrop-blur-xl md:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                    <User size={16} className="text-blue-400" /> Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-gray-600 outline-none transition-all focus:border-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                    <Mail size={16} className="text-blue-400" /> Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-gray-600 outline-none transition-all focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <Type size={16} className="text-blue-400" /> Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project Inquiry"
                  required
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-gray-600 outline-none transition-all focus:border-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <MessageSquare size={16} className="text-blue-400" /> Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Tell me about your project..."
                  required
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-gray-600 outline-none transition-all focus:border-blue-500"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-lg bg-blue-500 px-8 py-4 font-bold text-white transition-all hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
              >
                Send Message{" "}
                <Send
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </motion.button>
            </form>
          </motion.div>
        </section>
      </div>
      <style>{`@keyframes textShimmer { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }`}</style>
    </div>
  );
};

export default MainContent;
