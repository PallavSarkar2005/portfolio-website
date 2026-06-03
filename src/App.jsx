import { useEffect, useState } from "react";
import { motion, LazyMotion, domAnimation, animate } from "framer-motion";
import SplineScene from "./components/SplineScene";

/* ─────────────────────────────────────────────
   ANIMATED COUNTER
───────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────
   APP
───────────────────────────────────────────── */

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
    <LazyMotion features={domAnimation}>
      <div
        className="
  min-h-screen

  bg-linen
  dark:bg-[#1d1712]

  text-bark
  dark:text-[#F5EBDD]

  transition-colors
  duration-300

  overflow-hidden
  "
      >
        {/* ══════════════════════════════════════
    NAVBAR
══════════════════════════════════════ */}
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="
  fixed top-0 z-50 w-full

  bg-[#faf6efdd]
  dark:bg-[#1d1712dd]

  backdrop-blur-md

  border-b border-stone
  "
        >
          <div
            className="
    max-w-7xl
    mx-auto

    px-5 sm:px-6 md:px-10 xl:px-16
    py-5

    grid grid-cols-[1fr_auto_1fr]
    items-center
    "
          >
            {/* LEFT — LOGO */}

            <div className="flex justify-start -ml-2 md:-ml-48">
              <motion.h1
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="
        font-display
        text-2xl

        text-bark
        dark:text-white

        cursor-pointer
        "
              >
                P<span className="text-clay italic">allav</span>
              </motion.h1>
            </div>

            {/* CENTER — NAV LINKS */}

            <div
              className="
      hidden md:flex

      items-center
      justify-center

      gap-8 lg:gap-10

      text-sm
      uppercase
      tracking-wider

      text-bark
      dark:text-white
      "
            >
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
                    className="relative transition duration-300"
                  >
                    {item}

                    <motion.span
                      className="
              absolute
              left-0
              -bottom-1

              h-[2px]
              bg-clay
              rounded-full

              w-0
              "
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ),
              )}
            </div>

            {/* RIGHT — DARK MODE */}

            <div className="flex justify-end -mr-2 md:-mr-40">
              <motion.button
                whileHover={{
                  scale: 1.08,
                  y: -1,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={() => setDark(!dark)}
                className="
        bg-clay
        text-white

        px-4 sm:px-5
        py-2

        rounded-full

        text-sm

        shadow-md

        transition duration-300
        "
              >
                {dark ? "Light" : "Dark"}
              </motion.button>
            </div>
          </div>
        </motion.nav>

        {/* ══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
        <section className="relative min-h-screen grid lg:grid-cols-2 items-center px-6 md:px-16 pt-32 gap-10 bg-linen">
          <SplineScene />
          {/* LEFT — TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* BADGE */}
            <div className="inline-block bg-clayPale border border-clayLight text-clay text-[10px] sm:text-xs tracking-[0.2em] uppercase px-4 sm:px-5 py-2 rounded-full mb-8">
              Open to Internships 2027 &amp; Full-time Roles
            </div>

            {/* HEADLINE */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-5xl sm:text-6xl xl:text-7xl leading-tight text-bark dark:text-white mb-6"
            >
              Building things
              <br />
              that <span className="italic text-clay">actually</span> work.
            </motion.h1>

            {/* SUBTEXT */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#8B7D70] text-base sm:text-lg md:text-xl leading-8 md:leading-9 max-w-2xl mb-10"
            >
              I'm Pallav — a Full Stack Developer &amp; Software Engineer who
              turns ideas into robust, elegant software.
            </motion.p>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-clay text-white px-7 md:px-8 py-4 rounded-full hover:scale-105 transition duration-300"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border border-stone px-7 md:px-8 py-4 rounded-full hover:scale-105 hover:border-clay transition duration-300"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>

          {/* RIGHT — PROFILE CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 flex justify-center lg:justify-end will-change-transform"
          >
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4 }}
              className="bg-sand border border-stone rounded-[34px] shadow-2xl"
            >
              <div className="p-6 sm:p-8 md:p-10">
                {/* PROFILE ROW */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
                  {/* AVATAR */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="
  w-32 h-32
  md:w-36 md:h-36

  rounded-full
  overflow-hidden

  border-[5px]
  border-clay

  flex-shrink-0

  bg-[#E7DDCC]
  "
                  >
                    <img
                      src="/profile.jpeg"
                      alt="Pallav"
                      draggable="false"
                      className="
    w-full
    h-full

    object-cover
    object-top

    scale-[1.08]
    "
                    />
                  </motion.div>

                  {/* INFO */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-display text-4xl md:text-5xl text-bark mb-3">
                      Pallav
                    </h3>
                    <p className="text-[#8B7D70] text-lg md:text-2xl leading-8 md:leading-9 mb-6">
                      Full Stack Developer · Software Engineer
                    </p>
                    <div className="bg-[#E8F0E2] inline-flex items-center gap-3 px-5 md:px-6 py-3 rounded-full text-sm md:text-base text-moss">
                      <span className="w-3 h-3 rounded-full bg-sage animate-pulse" />
                      Available for opportunities
                    </div>
                  </div>
                </div>

                {/* DIVIDER */}
                <div className="border-t border-stone my-10" />

                {/* STATS */}
                <div className="grid grid-cols-3 gap-4 sm:gap-6 text-center">
                  <motion.div
                    whileHover={{ translateY: -4 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center"
                  >
                    <h4 className="font-display text-4xl sm:text-5xl md:text-6xl text-clay mb-2">
                      <Counter value={10} suffix="+" />
                    </h4>
                    <p className="uppercase tracking-[0.2em] text-[10px] sm:text-xs text-[#8B7D70]">
                      Projects
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ translateY: -4 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center"
                  >
                    <h4 className="font-display text-4xl sm:text-5xl md:text-6xl text-clay mb-2">
                      <Counter value={5} suffix="+" />
                    </h4>
                    <p className="uppercase tracking-[0.2em] text-[10px] sm:text-xs text-[#8B7D70]">
                      Technologies
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ translateY: -4 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center"
                  >
                    <h4 className="font-display text-4xl sm:text-5xl md:text-6xl text-clay mb-2">
                      <Counter value={2027} />
                    </h4>
                    <p className="uppercase tracking-[0.2em] text-[10px] sm:text-xs text-[#8B7D70]">
                      Internship
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════
          ABOUT SECTION
      ══════════════════════════════════════ */}
        <section
          id="about"
          className="px-5 sm:px-6 md:px-10 xl:px-16 py-24 md:py-32 bg-sand"
        >
          <motion.p className="uppercase tracking-[0.25em] text-clay text-xs sm:text-sm mb-5 md:mb-6">
            About Me
          </motion.p>

          <motion.h2 className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-tight max-w-5xl mb-14 md:mb-16">
            Crafting software with
            <br />
            intention &amp; curiosity
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* LEFT — PARAGRAPHS */}
            <motion.div className="w-full">
              {[
                "I'm a passionate Computer Science student and developer who enjoys building modern, user-focused web applications and exploring new technologies. I specialize in frontend and full-stack development using technologies like React, Next.js, JavaScript, Python, and Java.",
                "I love turning ideas into real projects that are clean, responsive, and practical. Along with web development, I'm also interested in AI/ML and Blockchain technologies, and I enjoy learning by building projects, contributing to open source, and participating in hackathons.",
                "Currently, I'm focused on improving my development skills, creating impactful projects, and preparing for software engineering opportunities. I believe in continuous learning, writing efficient code, and building products that solve real problems.",
                "When I'm not coding, I spend time learning new tech, practicing problem-solving, and exploring ways to grow as a developer.",
              ].map((para, i) => (
                <p
                  key={i}
                  className="text-[#8B7D70] text-base sm:text-lg md:text-xl leading-8 md:leading-10 mb-8 last:mb-0"
                >
                  {para}
                </p>
              ))}
            </motion.div>

            {/* RIGHT — TRAIT CARDS */}
            <motion.div className="grid gap-5 sm:gap-6 lg:-mt-32 xl:-mt-40 w-full">
              {[
                {
                  icon: "🌱",
                  title: "Always Learning",
                  desc: "Constantly exploring new tools, frameworks and paradigms to stay sharp.",
                },
                {
                  icon: "⚡",
                  title: "Performance-first",
                  desc: "I care about speed, scalability, and writing code that doesn't break under pressure.",
                },
                {
                  icon: "🤝",
                  title: "Team player",
                  desc: "I thrive in collaborative environments and love pairing on hard problems.",
                },
                {
                  icon: "🎯",
                  title: "Internship Ready 2027",
                  desc: "Seeking SWE / Full Stack internships — open to remote or on-site roles globally.",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-linen border border-stone rounded-[24px] md:rounded-[28px] p-5 sm:p-6 md:p-8 flex gap-4 sm:gap-5 items-start transition duration-300"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#F3ECE2] flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                    {card.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-xl sm:text-2xl mb-2 text-bark">
                      {card.title}
                    </h3>
                    <p className="text-[#8B7D70] text-sm sm:text-base md:text-lg leading-7 md:leading-8">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════
          PROJECTS SECTION
      ══════════════════════════════════════ */}
        <section
          id="projects"
          className="px-5 sm:px-6 md:px-10 xl:px-16 py-24 md:py-32 bg-linen"
        >
          {/* HEADER */}
          <motion.div className="mb-14 md:mb-16">
            <p className="uppercase tracking-[0.25em] text-clay text-xs sm:text-sm mb-4 md:mb-5">
              Projects
            </p>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 md:gap-10">
              <div className="max-w-5xl">
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-bark mb-6 md:mb-8">
                  Things I've built
                </h2>
                <p className="text-[#8B7D70] text-base sm:text-lg md:text-2xl leading-8 md:leading-10">
                  A selection of projects that showcase my range across the
                  stack — from interactive UIs to backend systems.
                </p>
              </div>

              {/* SCROLL ARROWS */}
              <div className="flex gap-4">
                {["←", "→"].map((arrow, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      document.getElementById("projects-scroll").scrollBy({
                        left: i === 0 ? -500 : 500,
                        behavior: "smooth",
                      });
                    }}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-stone bg-sand text-xl md:text-2xl text-bark hover:bg-clay hover:text-white transition duration-300 flex items-center justify-center"
                  >
                    {arrow}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* PROJECT CARDS SCROLLER */}
          <div
            id="projects-scroll"
            className="flex gap-5 md:gap-6 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory pb-4 w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {[
              {
                type: "Full Stack",
                title: "NanoLink",
                desc: "NanoLink is a high-performance, full-stack URL shortener featuring a sleek dark-themed UI, real-time analytics, and smooth scroll-reveal animations.",
                stack: [
                  "React",
                  "Vite",
                  "Tailwind",
                  "Framer Motion",
                  "Node.js",
                  "MongoDB",
                ],
                live: "https://nanolink-project.vercel.app",
                source: "#",
                liveLabel: "🔗 Live Demo",
              },
              {
                type: "Full Stack",
                title: "E-Commerce\nPlatform",
                desc: "Modern full-stack e-commerce platform with authentication, cart management, scalable APIs, responsive UI and production-ready architecture.",
                stack: [
                  "React",
                  "Express",
                  "MongoDB",
                  "JWT",
                  "REST APIs",
                  "Tailwind",
                ],
                live: "https://e-commerse-api-wine.vercel.app",
                source: "#",
                liveLabel: "🔗 Live Demo",
              },
              {
                type: "Collaboration Platform",
                title: "CollabX",
                desc: "Real-time collaborative coding platform where developers can code together simultaneously with integrated AI assistance.",
                stack: [
                  "Next.js",
                  "TypeScript",
                  "Tailwind",
                  "PostgreSQL",
                  "Realtime",
                  "AI",
                ],
                live: null,
                source: "#",
                liveLabel: null,
              },
            ].map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ translateY: -4 }}
                transition={{ duration: 0.35 }}
                className="relative w-[88%] sm:w-[75%] md:w-[48%] xl:w-[32%] min-w-[88%] sm:min-w-[75%] md:min-w-[48%] xl:min-w-[32%] min-h-[620px] bg-sand border border-stone rounded-[28px] md:rounded-[34px] p-6 sm:p-8 md:p-10 shadow-lg flex-shrink-0 snap-start flex flex-col justify-between"
              >
                {/* TOP COLOR LINE */}
                <div className="absolute top-0 left-6 right-6 h-[4px] bg-clay rounded-full"></div>

                {/* CARD TOP */}
                <div>
                  <div className="inline-flex bg-[#E8F0E2] text-sage text-[10px] sm:text-xs uppercase tracking-[0.2em] px-4 sm:px-5 py-2 rounded-full mb-8 md:mb-10">
                    {project.type}
                  </div>
                  <h3 className="font-display text-4xl sm:text-5xl text-bark leading-tight mb-6 md:mb-8 whitespace-pre-line">
                    {project.title}
                  </h3>
                  <p className="text-[#8B7D70] text-base sm:text-lg md:text-xl leading-8 md:leading-10">
                    {project.desc}
                  </p>
                </div>

                {/* CARD BOTTOM */}
                <div>
                  <div className="flex flex-wrap gap-3 mb-8 md:mb-10">
                    {project.stack.map((tech, j) => (
                      <span
                        key={j}
                        className="bg-[#F7F2EA] text-clay px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-5 sm:gap-8 text-[#8B7D70] text-base sm:text-lg">
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-clay transition duration-300"
                      >
                        {project.liveLabel}
                      </a>
                    ) : (
                      <span className="text-clay">🚀 Coming Soon</span>
                    )}
                    <a
                      href={project.source}
                      className="hover:text-clay transition duration-300"
                    >
                      ↗ Source
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════
          SKILLS SECTION
      ══════════════════════════════════════ */}
        <section
          id="skills"
          className="px-5 sm:px-6 md:px-10 xl:px-16 py-24 md:py-32 bg-sand"
        >
          {/* LABEL */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-[0.25em] text-clay text-xs sm:text-sm mb-4 md:mb-5"
          >
            Skills
          </motion.p>

          {/* TITLE */}

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl mb-6 md:mb-8"
          >
            My toolkit
          </motion.h2>

          {/* SUBTEXT */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#8B7D70] text-base sm:text-lg md:text-2xl leading-8 md:leading-10 max-w-5xl mb-14 md:mb-20"
          >
            Technologies and tools I use to bring ideas to life across the full
            stack.
          </motion.p>

          {/* GRID */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            {[
              {
                label: "Frontend",
                skills: [
                  "React / Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Framer Motion",
                  "HTML / CSS",
                ],
              },

              {
                label: "Backend",
                skills: [
                  "Node.js / Express",
                  "Python / FastAPI",
                  "REST APIs",
                  "GraphQL",
                  "Auth / JWT",
                ],
              },

              {
                label: "Databases",
                skills: ["MongoDB", "PostgreSQL", "Redis", "Prisma ORM", "SQL"],
              },

              {
                label: "DevOps & Tools",
                skills: [
                  "Git / GitHub",
                  "Docker",
                  "Vercel / Netlify",
                  "Linux / Bash",
                  "VS Code",
                ],
              },
            ].map((category, ci) => (
              <motion.div
                key={ci}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: ci * 0.05,
                }}
                className="
        bg-linen
        border border-stone

        rounded-[26px] md:rounded-[32px]

        p-6 sm:p-8 md:p-10

        h-full
        min-h-[320px]

        overflow-hidden

        flex
        flex-col
        "
              >
                {/* TITLE */}

                <h3 className="uppercase tracking-[0.2em] text-clay text-lg md:text-xl mb-5 md:mb-6">
                  {category.label}
                </h3>

                {/* LINE */}

                <div className="border-b border-stone mb-6 md:mb-8" />

                {/* SKILLS */}

                <ul className="space-y-4 md:space-y-5">
                  {category.skills.map((skill, si) => (
                    <li
                      key={si}
                      className="
              text-lg sm:text-xl md:text-2xl

              flex items-center
              gap-3 md:gap-4

              text-bark
              "
                    >
                      <span className="text-clay text-lg md:text-xl">·</span>

                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>
        {/* ══════════════════════════════════════
          EDUCATION SECTION
      ══════════════════════════════════════ */}
        <section
          id="education"
          className="px-5 sm:px-6 md:px-10 xl:px-16 py-24 md:py-32 bg-linen"
        >
          <motion.p className="uppercase tracking-[0.25em] text-clay text-xs sm:text-sm mb-5">
            Education
          </motion.p>

          <motion.h2 className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl mb-16 md:mb-24">
            Background &amp; formation
          </motion.h2>

          {/* TIMELINE */}
          <div className="relative max-w-6xl">
            {/* VERTICAL LINE */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
              style={{ originY: 0 }}
              className="
  hidden md:block

  absolute
  left-[149px]
  top-0
  bottom-0

  w-[1.5px]

  bg-[#BFA48B]

  origin-top
  "
            ></motion.div>

            {[
              {
                date: "2024 – Present",
                title: "B.Tech in Computer Science",
                details: [
                  "Pursuing a full undergraduate program with focus on algorithms, systems design, and software engineering fundamentals.",
                  "CGPA - 8.42",
                ],
                badge: "Currently enrolled · Expected 2028",
              },
              {
                date: "2022 – 2024",
                title: "Higher Secondary Education - Science Stream",
                details: [
                  "Jindal School, Barbil, Odisha (INDIA)",
                  "Percentage - 70.12%",
                ],
                badge: "Completed",
              },
              {
                date: "2005 – 2022",
                title: "Secondary School Education",
                details: [
                  "Jindal School, Barbil, Odisha (INDIA)",
                  "Percentage - 83.23%",
                ],
                badge: "Completed",
              },
            ].map((item, i) => (
              <motion.div className="grid md:grid-cols-[180px_1fr] gap-6 md:gap-10 mb-16 md:mb-24 last:mb-0 relative">
                {/* DATE */}
                <div className="text-[#8B7D70] text-base md:text-lg md:text-right md:pr-10 pt-1">
                  {item.date}
                </div>

                {/* TIMELINE DOT */}
                <div className="hidden md:block absolute left-[144px] top-3 w-3 h-3 rounded-full bg-clay" />

                {/* CONTENT */}
                <motion.div whileHover={{ translateY: -4 }}>
                  <h3 className="font-display text-3xl md:text-4xl mb-4 text-bark">
                    {item.title}
                  </h3>
                  {item.details.map((line, j) => (
                    <p
                      key={j}
                      className="text-[#8B7D70] text-lg md:text-xl leading-8 md:leading-9 max-w-3xl mb-4 md:mb-5"
                    >
                      {line}
                    </p>
                  ))}
                  <span className="bg-[#F3ECE2] text-clay px-5 py-2 rounded-full text-sm">
                    {item.badge}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════
          CONTACT SECTION
      ══════════════════════════════════════ */}
        <section
          id="contact"
          className="px-5 sm:px-6 md:px-10 xl:px-16 py-24 md:py-32 bg-[#2A1A0E]"
        >
          <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-start">
            {/* LEFT — INFO */}
            <motion.div className="w-full">
              <p className="uppercase tracking-[0.25em] text-[#cd9666] text-xs sm:text-sm mb-4">
                Get In Touch
              </p>

              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.05] mb-6 sm:mb-8 text-[#F3E6D8]">
                Let's build something
                <br />
                together
              </h2>

              <p className="text-[#D7C1AF] text-base sm:text-lg md:text-xl leading-8 sm:leading-9 max-w-2xl mb-10 sm:mb-14">
                Open to internships (2027), full-time roles, freelance work, and
                meaningful collaborations across software engineering, full
                stack development, and modern web technologies.
              </p>

              {/* CONTACT LINKS */}
              <div className="space-y-4">
                {[
                  {
                    icon: "✉️",
                    label: "pallav2005sarkar@gmail.com",
                    href: "mailto:pallav2005sarkar@gmail.com",
                  },
                  {
                    icon: "⌘",
                    label: "github.com/PallavSarkar2005",
                    href: "https://github.com/PallavSarkar2005",
                  },
                  {
                    icon: "in",
                    label: "linkedin.com/in/pallavsarkar2005",
                    href: "https://www.linkedin.com/in/pallavsarkar2005",
                  },
                  {
                    icon: "𝕏",
                    label: "x.com/Pallav_Sarkar_",
                    href: "https://x.com/Pallav_Sarkar_",
                  },
                ].map((link, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ translateY: -4 }}
                    transition={{ duration: 0.3 }}
                    href={link.href}
                    target={
                      link.href.startsWith("mailto") ? undefined : "_blank"
                    }
                    rel="noreferrer"
                    className="flex items-center gap-4 border border-[#5A4333] rounded-2xl px-4 sm:px-6 py-4 sm:py-5 bg-[#4A2E1C]/40 hover:bg-[#4A2E1C]/70 hover:border-clay transition duration-300"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#5A4333] flex items-center justify-center text-lg font-semibold flex-shrink-0 text-[#F3E6D8]">
                      {link.icon}
                    </div>
                    <p className="text-[#F3E6D8] text-base sm:text-lg break-all">
                      {link.label}
                    </p>
                  </motion.a>
                ))}

                {/* RESUME DOWNLOAD */}
                <motion.a
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  href="/internship_resume.pdf"
                  download="Pallav_Sarkar_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 border border-[#5A4333] rounded-2xl px-4 sm:px-6 py-4 sm:py-5 bg-[#4A2E1C]/40 hover:bg-[#4A2E1C]/70 hover:border-clay transition duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#5A4333] flex items-center justify-center text-lg flex-shrink-0">
                    📄
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[#F3E6D8] text-base sm:text-lg">
                      Download Resume / CV
                    </span>
                    <span className="text-[#C8B6A3] text-sm">PDF Format</span>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* RIGHT — CONTACT FORM */}
            <motion.div className="w-full">
              <form
                action="https://formsubmit.co/pallav2005sarkar@gmail.com"
                method="POST"
                className="space-y-5"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full bg-[#2A2A2A] border border-[#4A4A4A] rounded-2xl px-5 sm:px-6 py-4 sm:py-5 text-base sm:text-lg text-white outline-none focus:border-clay transition duration-300"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email"
                  className="w-full bg-[#2A2A2A] border border-[#4A4A4A] rounded-2xl px-5 sm:px-6 py-4 sm:py-5 text-base sm:text-lg text-white outline-none focus:border-clay transition duration-300"
                />

                <textarea
                  name="message"
                  required
                  placeholder="Your message..."
                  rows={7}
                  className="w-full bg-[#2A2A2A] border border-[#4A4A4A] rounded-2xl px-5 sm:px-6 py-4 sm:py-5 text-base sm:text-lg text-white outline-none focus:border-clay transition duration-300 resize-none"
                />

                <motion.button
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="pt-2 text-lg sm:text-xl font-semibold text-[#F3E6D8] hover:text-clay transition duration-300"
                >
                  Send message →
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* FOOTER */}
          <div className="border-t border-[#5A4333] mt-20 md:mt-28 pt-8 md:pt-10 flex flex-col md:flex-row justify-between gap-6 text-[#B89F8B]">
            <p>© 2025 Pallav — Built with care &amp; code</p>
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
    </LazyMotion>
  );
}
