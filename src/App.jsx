import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { animate } from "framer-motion";

function Counter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 3,
      onUpdate(latest) {
        setCount(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="min-h-screen bg-linen dark:bg-[#1d1712] transition-colors duration-300 overflow-hidden">
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 z-50 w-full backdrop-blur-md bg-[#faf6efdd] dark:bg-[#1d1712dd] border-b border-stone px-6 md:px-16 py-5 flex justify-between items-center"
      >
        {/* LOGO */}

        <motion.h1
          whileHover={{
            scale: 1.08,
            rotate: -2,
          }}
          transition={{ duration: 0.3 }}
          className="font-display text-2xl text-bark dark:text-white cursor-pointer"
        >
          P<span className="text-clay italic">allav</span>
        </motion.h1>

        {/* NAV LINKS */}

        <div className="hidden md:flex gap-10 text-sm uppercase tracking-wider text-bark dark:text-white">
          {["About", "Projects", "Skills", "Education", "Contact"].map(
            (item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -3,
                  color: "#C97345",
                }}
                className="relative transition-all duration-300"
              >
                {item}

                {/* UNDERLINE */}

                <motion.span
                  className="absolute left-0 -bottom-1 h-[2px] bg-clay w-0"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ),
          )}
        </div>

        {/* DARK BUTTON */}

        <motion.button
          whileHover={{
            scale: 1.08,
            y: -2,
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          onClick={() => setDark(!dark)}
          className="bg-clay text-white px-5 py-2 rounded-full text-sm transition-all duration-300 shadow-md"
        >
          {dark ? "Light" : "Dark"}
        </motion.button>
      </motion.nav>
      {/* HERO SECTION */}
      <section className="relative min-h-screen grid lg:grid-cols-2 items-center px-6 md:px-16 pt-32 gap-10 overflow-hidden">
        {/* SPLINE */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
        </div>

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="inline-block bg-clayPale border border-clayLight text-clay text-xs tracking-[0.2em] uppercase px-5 py-2 rounded-full mb-8">
            Open to Internships 2027 & Full-time Roles
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl leading-tight mb-6"
          >
            Building things
            <br />
            that <span className="italic text-clay">actually</span> work.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#8B7D70] max-w-xl leading-8 mb-8"
          >
            I'm Pallav — a Full Stack Developer & Software Engineer who turns
            ideas into robust, elegant software.
          </motion.p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-clay text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="border border-stone px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:border-clay"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>

        {/* RIGHT CARD */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex justify-center lg:justify-end"
        >
          <motion.div
            whileHover={{
              y: -8,
              rotateX: 2,
              rotateY: -2,
            }}
            transition={{ duration: 0.4 }}
            className="bg-sand border border-stone rounded-[34px] shadow-2xl backdrop-blur-md
    w-full max-w-[760px] overflow-hidden pl-16"
          >
            {/* TOP SECTION */}

            <div className="p-8 md:p-10">
              {/* PROFILE ROW */}

              <div className="flex items-start gap-6">
                {/* IMAGE */}

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-36 h-36 rounded-full overflow-hidden border-[5px] border-clay flex-shrink-0"
                >
                  <img
                    src="/profile.jpeg"
                    alt="Pallav"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* INFO */}

                <div className="pt-3 flex-1">
                  <h3 className="font-display text-5xl text-bark mb-3 leading-none">
                    Pallav
                  </h3>

                  <p className="text-[#8B7D70] text-2xl leading-9 mb-7">
                    Full Stack Developer · Software Engineer
                  </p>

                  {/* STATUS */}

                  <div className="bg-[#E8F0E2] inline-flex items-center gap-3 px-6 py-3 rounded-full text-base text-moss">
                    <span className="w-3 h-3 rounded-full bg-sage animate-pulse"></span>
                    Available for opportunities
                  </div>
                </div>
              </div>

              {/* DIVIDER */}

              <div className="border-t border-stone my-10"></div>

              {/* STATS */}

              <div className="grid grid-cols-3 gap-6 text-center">
                {/* PROJECTS */}

                <motion.div whileHover={{ y: -4 }}>
                  <h4 className="font-display text-6xl text-clay mb-2">
                    <Counter value={10} suffix="+" />
                  </h4>

                  <p className="uppercase tracking-[0.2em] text-xs text-[#8B7D70]">
                    Projects
                  </p>
                </motion.div>

                {/* TECHNOLOGIES */}

                <motion.div whileHover={{ y: -4 }}>
                  <h4 className="font-display text-6xl text-clay mb-2">
                    <Counter value={5} suffix="+" />
                  </h4>

                  <p className="uppercase tracking-[0.2em] text-xs text-[#8B7D70]">
                    Technologies
                  </p>
                </motion.div>

                {/* INTERNSHIP */}

                <motion.div whileHover={{ y: -4 }}>
                  <h4 className="font-display text-6xl text-clay mb-2">
                    <Counter value={2027} />
                  </h4>

                  <p className="uppercase tracking-[0.2em] text-xs text-[#8B7D70]">
                    Internship
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
      {/* ABOUT SECTION */}
      <section id="about" className="px-6 md:px-16 py-32 bg-sand">
        {/* SMALL LABEL */}

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="uppercase tracking-[0.25em] text-clay text-sm mb-6"
        >
          About Me
        </motion.p>

        {/* BIG TITLE */}

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="font-display text-5xl md:text-7xl leading-tight max-w-5xl mb-16"
        >
          Crafting software with
          <br />
          intention & curiosity
        </motion.h2>

        {/* GRID */}

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT TEXT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p className="text-[#8B7D70] text-lg md:text-xl leading-10 mb-8">
              I’m a passionate Computer Science student and developer who enjoys
              building modern, user-focused web applications and exploring new
              technologies. I specialize in frontend and full-stack development
              using technologies like React, Next.js, JavaScript, Python, and
              Java.
            </p>

            <p className="text-[#8B7D70] text-lg md:text-xl leading-10 mb-8">
              I love turning ideas into real projects that are clean,
              responsive, and practical. Along with web development, I’m also
              interested in AI/ML and Blockchain technologies, and I enjoy
              learning by building projects, contributing to open source, and
              participating in hackathons.
            </p>

            <p className="text-[#8B7D70] text-lg md:text-xl leading-10 mb-8">
              Currently, I’m focused on improving my development skills,
              creating impactful projects, and preparing for software
              engineering opportunities. I believe in continuous learning,
              writing efficient code, and building products that solve real
              problems.
            </p>

            <p className="text-[#8B7D70] text-lg md:text-xl leading-10">
              When I’m not coding, I spend time learning new tech, practicing
              problem-solving, and exploring ways to grow as a developer.
            </p>
          </motion.div>

          {/* RIGHT CARDS */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid gap-6 lg:-mt-40"
          >
            {/* CARD 1 */}

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-linen border border-stone rounded-[28px] p-8 flex gap-5"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#F3ECE2] flex items-center justify-center text-2xl flex-shrink-0">
                🌱
              </div>

              <div>
                <h3 className="font-semibold text-2xl mb-2 text-bark">
                  Always Learning
                </h3>

                <p className="text-[#8B7D70] text-lg leading-8">
                  Constantly exploring new tools, frameworks and paradigms to
                  stay sharp.
                </p>
              </div>
            </motion.div>

            {/* CARD 2 */}

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-linen border border-stone rounded-[28px] p-8 flex gap-5"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#F3ECE2] flex items-center justify-center text-2xl flex-shrink-0">
                ⚡
              </div>

              <div>
                <h3 className="font-semibold text-2xl mb-2 text-bark">
                  Performance-first
                </h3>

                <p className="text-[#8B7D70] text-lg leading-8">
                  I care about speed, scalability, and writing code that doesn't
                  break under pressure.
                </p>
              </div>
            </motion.div>

            {/* CARD 3 */}

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-linen border border-stone rounded-[28px] p-8 flex gap-5"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#F3ECE2] flex items-center justify-center text-2xl flex-shrink-0">
                🤝
              </div>

              <div>
                <h3 className="font-semibold text-2xl mb-2 text-bark">
                  Team player
                </h3>

                <p className="text-[#8B7D70] text-lg leading-8">
                  I thrive in collaborative environments and love pairing on
                  hard problems.
                </p>
              </div>
            </motion.div>

            {/* CARD 4 */}

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-linen border border-stone rounded-[28px] p-8 flex gap-5"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#F3ECE2] flex items-center justify-center text-2xl flex-shrink-0">
                🎯
              </div>

              <div>
                <h3 className="font-semibold text-2xl mb-2 text-bark">
                  Internship Ready 2027
                </h3>

                <p className="text-[#8B7D70] text-lg leading-8">
                  Seeking SWE / Full Stack internships — open to remote or
                  on-site roles globally.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* PROJECTS */}
      <section
        id="projects"
        className="px-4 md:px-10 xl:px-16 py-32 bg-linen overflow-hidden"
      >
        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          {/* LABEL */}

          <p className="uppercase tracking-[0.25em] text-clay text-sm mb-5">
            Projects
          </p>

          {/* TOP ROW */}

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            {/* LEFT */}

            <div>
              <h2 className="font-display text-5xl md:text-7xl text-bark mb-8">
                Things I've built
              </h2>

              <p className="text-[#8B7D70] text-lg md:text-2xl leading-10 max-w-4xl">
                A selection of projects that showcase my range across the stack
                — from interactive UIs to backend systems.
              </p>
            </div>

            {/* BUTTONS */}

            <div className="flex gap-4">
              {/* LEFT */}

              <button
                onClick={() => {
                  document.getElementById("projects-scroll").scrollBy({
                    left: -500,
                    behavior: "smooth",
                  });
                }}
                className="
          w-14 h-14
          rounded-full
          border border-stone
          bg-sand
          text-2xl
          text-bark
          hover:bg-clay
          hover:text-white
          transition-all
          duration-300

          flex
          items-center
          justify-center
          "
              >
                ←
              </button>

              {/* RIGHT */}

              <button
                onClick={() => {
                  document.getElementById("projects-scroll").scrollBy({
                    left: 500,
                    behavior: "smooth",
                  });
                }}
                className="
          w-14 h-14
          rounded-full
          border border-stone
          bg-sand
          text-2xl
          text-bark
          hover:bg-clay
          hover:text-white
          transition-all
          duration-300

          flex
          items-center
          justify-center
          "
              >
                →
              </button>
            </div>
          </div>
        </motion.div>

        {/* PROJECT SCROLLER */}

        <div
          id="projects-scroll"
          className="
    flex
    gap-[2%]

    overflow-x-auto
    overflow-y-hidden

    scroll-smooth
    snap-x
    snap-mandatory

    pb-4

    [&::-webkit-scrollbar]:hidden
    [-ms-overflow-style:none]
    [scrollbar-width:none]
    "
        >
          {/* PROJECT 1 */}

          <motion.div
            whileHover={{
              y: -10,
              scale: 1.015,
            }}
            transition={{ duration: 0.35 }}
            className="
w-[32%]

min-w-[32%]
max-w-[32%]

min-h-[560px]

      bg-sand
      border
      border-stone

      rounded-[34px]

      p-10

      shadow-lg

      flex-shrink-0
      snap-start

      flex
      flex-col
      justify-between
      "
          >
            {/* TOP */}

            <div>
              <div className="inline-flex bg-[#E8F0E2] text-sage text-xs uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-10">
                Full Stack
              </div>

              <h3 className="font-display text-5xl text-bark mb-8">NanoLink</h3>

              <p className="text-[#8B7D70] text-xl leading-10">
                NanoLink is a high-performance, full-stack URL shortener
                featuring a sleek dark-themed UI, real-time analytics, and
                smooth scroll-reveal animations.
              </p>
            </div>

            {/* BOTTOM */}

            <div>
              {/* STACK */}

              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  "React",
                  "Vite",
                  "Tailwind",
                  "Framer Motion",
                  "Node.js",
                  "MongoDB",
                ].map((tech, i) => (
                  <span
                    key={i}
                    className="
              bg-[#F7F2EA]
              text-clay

              px-4 py-2
              rounded-full

              text-sm
              whitespace-nowrap
              "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* LINKS */}

              <div className="flex items-center gap-8 text-[#8B7D70] text-lg">
                <a
                  href="https://nanolink-project.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-clay transition-all duration-300"
                >
                  🔗 Live Demo
                </a>

                <a
                  href="#"
                  className="hover:text-clay transition-all duration-300"
                >
                  ↗ Source
                </a>
              </div>
            </div>
          </motion.div>

          {/* PROJECT 2 */}

          <motion.div
            whileHover={{
              y: -10,
              scale: 1.015,
            }}
            transition={{ duration: 0.35 }}
            className="
      relative

w-[32%]

min-w-[32%]
max-w-[32%]

min-h-[560px]
      bg-sand
      border
      border-stone

      rounded-[34px]

      p-10

      shadow-lg

      flex-shrink-0
      snap-start

      flex
      flex-col
      justify-between

      overflow-hidden
      "
          >
            {/* TOP LINE */}

            <div className="absolute top-0 left-0 w-full h-1 bg-clay"></div>

            {/* TOP */}

            <div>
              <div className="inline-flex bg-[#E8F0E2] text-sage text-xs uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-10">
                Full Stack
              </div>

              <h3 className="font-display text-5xl text-bark mb-8 leading-tight">
                E-Commerce
                <br />
                Platform
              </h3>

              <p className="text-[#8B7D70] text-xl leading-10">
                Modern full-stack e-commerce platform with authentication, cart
                management, scalable APIs, responsive UI and production-ready
                architecture.
              </p>
            </div>

            {/* BOTTOM */}

            <div>
              {/* STACK */}

              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  "React",
                  "Express",
                  "MongoDB",
                  "JWT",
                  "REST APIs",
                  "Tailwind",
                ].map((tech, i) => (
                  <span
                    key={i}
                    className="
              bg-[#F7F2EA]
              text-clay

              px-4 py-2
              rounded-full

              text-sm
              whitespace-nowrap
              "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* LINKS */}

              <div className="flex items-center gap-8 text-[#8B7D70] text-lg">
                <a
                  href="https://e-commerse-api-wine.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-clay transition-all duration-300"
                >
                  🔗 Live Demo
                </a>

                <a
                  href="#"
                  className="hover:text-clay transition-all duration-300"
                >
                  ↗ Source
                </a>
              </div>
            </div>
          </motion.div>

          {/* PROJECT 3 */}

          <motion.div
            whileHover={{
              y: -10,
              scale: 1.015,
            }}
            transition={{ duration: 0.35 }}
            className="
w-[32%]

min-w-[32%]
max-w-[32%]

min-h-[560px]
      bg-sand
      border
      border-stone

      rounded-[34px]

      p-10

      shadow-lg

      flex-shrink-0
      snap-start

      flex
      flex-col
      justify-between
      "
          >
            {/* TOP */}

            <div>
              <div className="inline-flex bg-[#E8F0E2] text-sage text-xs uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-10">
                Collaboration Platform
              </div>

              <h3 className="font-display text-5xl text-bark mb-8">CollabX</h3>

              <p className="text-[#8B7D70] text-xl leading-10">
                Real-time collaborative coding platform where developers can
                code together simultaneously with integrated AI assistance.
              </p>
            </div>

            {/* BOTTOM */}

            <div>
              {/* STACK */}

              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  "Next.js",
                  "TypeScript",
                  "Tailwind",
                  "PostgreSQL",
                  "Realtime",
                  "AI",
                ].map((tech, i) => (
                  <span
                    key={i}
                    className="
              bg-[#F7F2EA]
              text-clay

              px-4 py-2
              rounded-full

              text-sm
              whitespace-nowrap
              "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* LINKS */}

              <div className="flex items-center gap-8 text-[#8B7D70] text-lg">
                <span className="text-clay">🚀 Coming Soon</span>

                <a
                  href="#"
                  className="hover:text-clay transition-all duration-300"
                >
                  ↗ Source
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* SKILLS */}
      <section
        id="skills"
        className="px-6 md:px-16 py-32 bg-sand overflow-hidden"
      >
        {/* SECTION LABEL */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.25em] text-clay text-sm mb-5"
        >
          Skills
        </motion.p>

        {/* TITLE */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-display text-5xl md:text-7xl mb-8"
        >
          My toolkit
        </motion.h2>

        {/* SUBTEXT */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-[#8B7D70] text-lg md:text-2xl leading-10 max-w-5xl mb-20"
        >
          Technologies and tools I use to bring ideas to life across the full
          stack.
        </motion.p>

        {/* SKILLS GRID */}

        <div className="grid md:grid-cols-2 gap-8">
          {/* FRONTEND */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -6 }}
            className="bg-linen border border-stone rounded-[32px] p-10 transition-all duration-300"
          >
            <h3 className="uppercase tracking-[0.2em] text-clay text-xl mb-6">
              Frontend
            </h3>

            <div className="border-b border-stone mb-8"></div>

            <ul className="space-y-5">
              {[
                "React / Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Framer Motion",
                "HTML / CSS",
              ].map((skill, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-2xl flex items-center gap-4 text-bark"
                >
                  <span className="text-clay text-xl">·</span>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* BACKEND */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            whileHover={{ y: -6 }}
            className="bg-linen border border-stone rounded-[32px] p-10 transition-all duration-300"
          >
            <h3 className="uppercase tracking-[0.2em] text-clay text-xl mb-6">
              Backend
            </h3>

            <div className="border-b border-stone mb-8"></div>

            <ul className="space-y-5">
              {[
                "Node.js / Express",
                "Python / FastAPI",
                "REST APIs",
                "GraphQL",
                "Auth / JWT",
              ].map((skill, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-2xl flex items-center gap-4 text-bark"
                >
                  <span className="text-clay text-xl">·</span>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* DATABASES */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            whileHover={{ y: -6 }}
            className="bg-linen border border-stone rounded-[32px] p-10 transition-all duration-300"
          >
            <h3 className="uppercase tracking-[0.2em] text-clay text-xl mb-6">
              Databases
            </h3>

            <div className="border-b border-stone mb-8"></div>

            <ul className="space-y-5">
              {["MongoDB", "PostgreSQL", "Redis", "Prisma ORM", "SQL"].map(
                (skill, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-2xl flex items-center gap-4 text-bark"
                  >
                    <span className="text-clay text-xl">·</span>
                    {skill}
                  </motion.li>
                ),
              )}
            </ul>
          </motion.div>

          {/* DEVOPS */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            whileHover={{ y: -6 }}
            className="bg-linen border border-stone rounded-[32px] p-10 transition-all duration-300"
          >
            <h3 className="uppercase tracking-[0.2em] text-clay text-xl mb-6">
              DevOps & Tools
            </h3>

            <div className="border-b border-stone mb-8"></div>

            <ul className="space-y-5">
              {[
                "Git / GitHub",
                "Docker",
                "Vercel / Netlify",
                "Linux / Bash",
                "VS Code",
              ].map((skill, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-2xl flex items-center gap-4 text-bark"
                >
                  <span className="text-clay text-xl">·</span>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
      {/* EDUCATION */}
      <section
        id="education"
        className="px-6 md:px-16 py-32 bg-linen overflow-hidden"
      >
        {/* LABEL */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.25em] text-clay text-sm mb-5"
        >
          Education
        </motion.p>

        {/* TITLE */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-display text-5xl md:text-7xl mb-24"
        >
          Background & formation
        </motion.h2>

        {/* TIMELINE */}

        <div className="relative max-w-6xl">
          {/* LINE */}

          <div className="hidden md:block absolute left-[149px] top-0 bottom-0 w-[1px] bg-stone"></div>

          {/* ITEM 1 */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-[180px_1fr] gap-10 mb-24 relative"
          >
            {/* DATE */}

            <div className="text-[#8B7D70] text-lg md:text-right md:pr-10 pt-1">
              2023 – Present
            </div>

            {/* DOT */}

            <div className="hidden md:block absolute left-[144px] top-3 w-3 h-3 rounded-full bg-clay"></div>

            {/* CONTENT */}

            <motion.div whileHover={{ y: -4 }}>
              <h3 className="font-display text-4xl mb-4 text-bark">
                B.Tech in Computer Science
              </h3>

              <p className="text-[#8B7D70] text-xl leading-9 max-w-3xl mb-5">
                Pursuing a full undergraduate program with focus on algorithms,
                systems design, and software engineering fundamentals.
              </p>

              <span className="bg-[#F3ECE2] text-clay px-5 py-2 rounded-full text-sm">
                Currently enrolled · Expected 2027
              </span>
            </motion.div>
          </motion.div>

          {/* ITEM 2 */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="grid md:grid-cols-[180px_1fr] gap-10 mb-24 relative"
          >
            {/* DATE */}

            <div className="text-[#8B7D70] text-lg md:text-right md:pr-10 pt-1">
              2022 – 2023
            </div>

            {/* DOT */}

            <div className="hidden md:block absolute left-[144px] top-3 w-3 h-3 rounded-full bg-clay"></div>

            {/* CONTENT */}

            <motion.div whileHover={{ y: -4 }}>
              <h3 className="font-display text-4xl mb-4 text-bark">
                Self-directed Learning
              </h3>

              <p className="text-[#8B7D70] text-xl leading-9 max-w-3xl mb-5">
                Deep dives into full-stack development, data structures, and
                modern web technologies through structured online programs and
                personal projects.
              </p>

              <span className="bg-[#F3ECE2] text-clay px-5 py-2 rounded-full text-sm">
                Ongoing
              </span>
            </motion.div>
          </motion.div>

          {/* ITEM 3 */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="grid md:grid-cols-[180px_1fr] gap-10 relative"
          >
            {/* DATE */}

            <div className="text-[#8B7D70] text-lg md:text-right md:pr-10 pt-1">
              2021 – 2022
            </div>

            {/* DOT */}

            <div className="hidden md:block absolute left-[144px] top-3 w-3 h-3 rounded-full bg-clay"></div>

            {/* CONTENT */}

            <motion.div whileHover={{ y: -4 }}>
              <h3 className="font-display text-4xl mb-4 text-bark">
                Higher Secondary Education
              </h3>

              <p className="text-[#8B7D70] text-xl leading-9 max-w-3xl mb-5">
                Completed 12th grade with strong foundation in Mathematics and
                Computer Science. Discovered passion for software development.
              </p>

              <span className="bg-[#F3ECE2] text-clay px-5 py-2 rounded-full text-sm">
                Completed
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* CONTACT */}
      <section
        id="contact"
        className="px-6 md:px-16 py-32 bg-bark text-white overflow-hidden"
      >
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* LABEL */}

            <p className="uppercase tracking-[0.25em] text-[#D9B08C] text-sm mb-5">
              Get In Touch
            </p>

            {/* TITLE */}

            <h2 className="font-display text-5xl md:text-7xl leading-tight mb-8">
              Let's build something
              <br />
              together
            </h2>

            {/* SUBTEXT */}

            <p className="text-[#D7C1AF] text-lg md:text-2xl leading-10 max-w-2xl mb-16">
              Open to internships (2027), full-time roles, and interesting
              collaborations. Don’t hesitate to reach out.
            </p>

            {/* CONTACT CARDS */}

            <div className="space-y-5">
              {/* EMAIL */}

              <motion.a
                whileHover={{ y: -4 }}
                href="mailto:pallav2005sarkar@gmail.com"
                className="flex items-center gap-5 border border-[#5A4333] rounded-2xl px-6 py-5 bg-[#4A2E1C]/40 hover:bg-[#4A2E1C]/70 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#5A4333] flex items-center justify-center text-lg">
                  ✉️
                </div>

                <span className="text-lg text-[#F3E6D8]">
                  pallav2005sarkar@gmail.com
                </span>
              </motion.a>

              {/* GITHUB */}

              <motion.a
                whileHover={{ y: -4 }}
                href="https://github.com/PallavSarkar2005"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 border border-[#5A4333] rounded-2xl px-6 py-5 bg-[#4A2E1C]/40 hover:bg-[#4A2E1C]/70 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#5A4333] flex items-center justify-center text-lg">
                  ⌘
                </div>

                <span className="text-lg text-[#F3E6D8]">
                  github.com/PallavSarkar2005
                </span>
              </motion.a>

              {/* LINKEDIN */}

              <motion.a
                whileHover={{ y: -4 }}
                href="https://www.linkedin.com/in/pallavsarkar2005"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 border border-[#5A4333] rounded-2xl px-6 py-5 bg-[#4A2E1C]/40 hover:bg-[#4A2E1C]/70 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#5A4333] flex items-center justify-center text-lg">
                  in
                </div>

                <span className="text-lg text-[#F3E6D8]">
                  linkedin.com/in/pallavsarkar2005
                </span>
              </motion.a>

              {/* X / TWITTER */}

              <motion.a
                whileHover={{ y: -4 }}
                href="https://x.com/Pallav_Sarkar_"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 border border-[#5A4333] rounded-2xl px-6 py-5 bg-[#4A2E1C]/40 hover:bg-[#4A2E1C]/70 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#5A4333] flex items-center justify-center text-lg">
                  𝕏
                </div>

                <span className="text-lg text-[#F3E6D8]">
                  x.com/Pallav_Sarkar_
                </span>
              </motion.a>

              {/* RESUME */}

              <motion.a
                whileHover={{ y: -4 }}
                href="/internship_resume.pdf"
                download
                className="flex items-center gap-5 border border-[#5A4333] rounded-2xl px-6 py-5 bg-[#4A2E1C]/40 hover:bg-[#4A2E1C]/70 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#5A4333] flex items-center justify-center text-lg">
                  📄
                </div>

                <span className="text-lg text-[#F3E6D8]">
                  Download Resume / CV
                </span>
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <form
              action="https://formsubmit.co/pallav2005sarkar@gmail.com"
              method="POST"
              className="space-y-5"
            >
              {/* HIDDEN CONFIG */}

              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              {/* NAME */}

              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full bg-[#2A2A2A] border border-[#4A4A4A] rounded-xl px-6 py-5 text-lg outline-none focus:border-clay transition-all"
              />

              {/* EMAIL */}

              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                className="w-full bg-[#2A2A2A] border border-[#4A4A4A] rounded-xl px-6 py-5 text-lg outline-none focus:border-clay transition-all"
              />

              {/* MESSAGE */}

              <textarea
                name="message"
                required
                placeholder="Your message..."
                rows="6"
                className="w-full bg-[#2A2A2A] border border-[#4A4A4A] rounded-xl px-6 py-5 text-lg outline-none focus:border-clay transition-all resize-none"
              ></textarea>

              {/* BUTTON */}

              <button
                type="submit"
                className="pt-5 text-xl font-semibold hover:translate-x-2 transition-all duration-300"
              >
                Send message →
              </button>
            </form>
          </motion.div>
        </div>

        {/* FOOTER */}

        <div className="border-t border-[#5A4333] mt-28 pt-10 flex flex-col md:flex-row justify-between gap-6 text-[#B89F8B]">
          <p>© 2025 Pallav — Built with care & code</p>

          <div className="flex gap-8">
            <a
              href="https://github.com/PallavSarkar2005"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-all"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/pallavsarkar2005"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-all"
            >
              LinkedIn
            </a>

            <a href="#top" className="hover:text-white transition-all">
              Back to top ↑
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
