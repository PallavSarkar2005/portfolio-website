import React, { useState } from "react";
import { motion } from "framer-motion";
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

const MainContent = () => {
  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // --- CONTACT FORM STATE ---
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
    // Functional 'mailto' link generation
    window.location.href = `mailto:pallavsarkar@example.com?subject=${formData.subject}&body=Name: ${formData.name}%0AEmail: ${formData.email}%0A%0A${formData.message}`;
  };

  // --- DATA ---
  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "A full-stack shopping platform with product previews and real-time inventory.",
      tags: ["React", "Tailwind", "React Router-Dom", "Node.js"],
      links: { demo: "#", git: "#" },
      color: "from-purple-500 to-cyan-500",
    },
    {
      title: "Dashboard",
      desc: "Data visualization dashboard powered by predictive analytics and machine learning.",
      tags: ["React", "Node.js", "Mongo.DB", "Tailwind"],
      links: { demo: "#", git: "#" },
      color: "from-pink-500 to-purple-500",
    },
    {
      title: "Crypto Tracker",
      desc: "Real-time cryptocurrency tracking app with interactive charts and portfolio management.",
      tags: ["Vue", "D3.js", "Firebase"],
      links: { demo: "#", git: "#" },
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
    <div className="pointer-events-none w-full px-6 py-20 md:px-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-6xl space-y-32"
      >
        {/* ==================== 1. HERO SECTION ==================== */}
        <section className="flex flex-col justify-center pt-20">
          <div className="pointer-events-auto">
            <motion.p
              variants={itemVariants}
              className="mb-4 font-mono text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
            >
              Hi, my name is
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="mb-4 text-6xl font-bold tracking-tighter text-white md:text-8xl"
            >
              Pallav Sarkar
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="mb-8 text-4xl font-bold text-gray-400 md:text-6xl"
            >
              I build things for the web.
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="max-w-xl text-lg text-gray-300 backdrop-blur-sm"
            >
              I'm a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I'm focused
              on building accessible, human-centered products.
            </motion.p>
          </div>
        </section>

        {/* ==================== 2. PROJECTS SECTION ==================== */}
        <section>
          <motion.div
            variants={itemVariants}
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
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="pointer-events-auto group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-neutral-900/40 p-6 backdrop-blur-md transition-all hover:border-cyan-500/50"
              >
                {/* Gradient Top Line */}
                <div
                  className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${project.color}`}
                />

                <div>
                  <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mb-6 text-sm text-gray-400 leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs font-mono text-cyan-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 rounded-lg bg-cyan-500/10 px-4 py-2 text-sm font-bold text-cyan-400 transition-all hover:bg-cyan-500 hover:text-black">
                    <ExternalLink size={16} /> Live Demo
                  </button>
                  <button className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-white transition-all hover:border-white hover:bg-white/5">
                    <Github size={16} /> Code
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ==================== 3. TECHNICAL SKILLS ==================== */}
        <section>
          <motion.div
            variants={itemVariants}
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
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="pointer-events-auto rounded-xl border border-white/10 bg-neutral-900/60 p-6 backdrop-blur-md transition-colors hover:border-purple-500/50"
              >
                <div
                  className={`mb-4 inline-flex rounded-lg bg-white/5 p-3 ${cat.color}`}
                >
                  <cat.icon size={24} />
                </div>
                <h3 className="mb-4 text-xl font-bold text-white">
                  {cat.title}
                </h3>
                <ul className="space-y-2">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-sm text-gray-400"
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full bg-current ${cat.color}`}
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ==================== 4. EDUCATION ==================== */}
        <section className="pb-20">
          <motion.div
            variants={itemVariants}
            className="mb-12 flex items-center gap-4"
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Education
            </h2>
            <div className="h-[1px] w-32 bg-white/20"></div>
          </motion.div>

          <div className="pointer-events-auto max-w-3xl">
            {/* Degree Card */}
            <motion.div
              variants={itemVariants}
              className="relative mb-12 border-l-2 border-white/10 pl-8 ml-4"
            >
              <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-pink-500 shadow-[0_0_10px_magenta]"></span>

              <div className="rounded-xl border border-white/10 bg-neutral-900/40 p-8 backdrop-blur-sm transition-colors hover:border-pink-500/30">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                  <h3 className="text-2xl font-bold text-white">
                    Bachelor's Degree
                  </h3>
                  <span className="flex items-center gap-2 rounded-full bg-pink-500/10 px-4 py-1.5 text-xs font-bold text-pink-400 border border-pink-500/20">
                    <Calendar size={12} /> 2024 - 2028
                  </span>
                </div>

                <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <GraduationCap size={18} className="text-pink-400" />
                    <span>NIST University</span>
                  </div>
                  <span className="hidden sm:inline">•</span>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-pink-400" />
                    <span>Berhampure, India</span>
                  </div>
                </div>

                <p className="text-base leading-relaxed text-gray-300">
                  Pursuing a specialized degree focused on Computer Science
                  principles. The curriculum involves deep dives into
                  algorithms, software engineering patterns, and modern web
                  technologies. Active participant in coding clubs and student
                  leadership organizations.
                </p>
              </div>
            </motion.div>

            {/* High School Card */}
            <motion.div
              variants={itemVariants}
              className="relative mb-12 border-l-2 border-white/10 pl-8 ml-4"
            >
              <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></span>

              <div className="rounded-xl border border-white/10 bg-neutral-900/40 p-8 backdrop-blur-sm transition-colors hover:border-purple-500/30">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                  <h3 className="text-2xl font-bold text-white">
                    Higher Secondary School
                  </h3>
                  <span className="flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-1.5 text-xs font-bold text-purple-400 border border-purple-500/20">
                    <Calendar size={12} /> 2022 - 2024
                  </span>
                </div>

                <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <GraduationCap size={18} className="text-purple-400" />
                    <span>Jindal School</span>
                  </div>
                  <span className="hidden sm:inline">•</span>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-purple-400" />
                    <span>Soyabali, India</span>
                  </div>
                </div>

                <p className="text-base leading-relaxed text-gray-300">
                  Completed rigorous coursework with a major in Science and
                  Mathematics, complemented by Computer Science electives.
                  Demonstrated consistent academic excellence and developed a
                  strong foundation in logical reasoning and problem-solving
                  skills which paved the way for a career in technology.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative mb-12 border-l-2 border-white/10 pl-8 ml-4"
            >
              <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></span>

              <div className="rounded-xl border border-white/10 bg-neutral-900/40 p-8 backdrop-blur-sm transition-colors hover:border-purple-500/30">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                  <h3 className="text-2xl font-bold text-white">
                    Secondary School
                  </h3>
                  <span className="flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-1.5 text-xs font-bold text-purple-400 border border-purple-500/20">
                    <Calendar size={12} /> 2017 - 2022
                  </span>
                </div>

                <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <GraduationCap size={18} className="text-purple-400" />
                    <span>Jindal School</span>
                  </div>
                  <span className="hidden sm:inline">•</span>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-purple-400" />
                    <span>Soyabali, India</span>
                  </div>
                </div>

                <p className="text-base leading-relaxed text-gray-300">
                  Completed secondary education with a strong academic record,
                  building foundational skills in Science and Mathematics, along
                  with early exposure to Computer Science. Developed consistent
                  discipline, logical reasoning, and problem-solving abilities
                  that shaped my interest in technology.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ==================== 5. GET IN TOUCH ==================== */}
        <section className="pb-20">
          <motion.div
            variants={itemVariants}
            className="mb-12 flex items-center gap-4"
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Get In Touch
            </h2>
            <div className="h-[1px] w-32 bg-white/20"></div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="pointer-events-auto mx-auto max-w-2xl rounded-2xl border border-white/10 bg-neutral-900/60 p-8 backdrop-blur-xl md:p-10"
          >
            <p className="mb-8 text-center text-gray-400">
              My inbox is always open. Whether you have a question, a project
              proposal, or just want to say hi, I'll try my best to get back to
              you!
            </p>

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
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-gray-600 outline-none transition-all focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
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
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-gray-600 outline-none transition-all focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
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
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-gray-600 outline-none transition-all focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
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
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-gray-600 outline-none transition-all focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-lg bg-blue-500 px-8 py-4 font-bold text-white transition-all hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
              >
                Send Message{" "}
                <Send
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>
          </motion.div>
        </section>
      </motion.div>
    </div>
  );
};

export default MainContent;
