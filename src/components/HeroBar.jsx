import React from "react";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

const HeroBar = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="flex w-full items-center justify-between border-b border-white/10 bg-neutral-950/60 px-8 py-6 backdrop-blur-md">
      <div
        className="flex items-center gap-4 cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src="/logo.svg"
          alt="PS Logo"
          className="h-10 w-10 object-contain drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]"
        />
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="hidden text-xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] sm:block animate-gradient"
          style={{
            animation: "textShimmer 3s linear infinite",
          }}
        >
          Pallav Portfolio
        </motion.span>
        <style>
          {`
            @keyframes textShimmer {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}
        </style>
      </div>

      <ul className="hidden items-center gap-10 md:flex">
        {[
          { name: "Home", id: "home" },
          { name: "Work", id: "work" },
          { name: "About", id: "about" },
        ].map((item) => (
          <li key={item.name} className="group relative cursor-pointer">
            <a
              href={`#${item.id}`}
              onClick={(e) => handleScroll(e, item.id)}
              className="text-lg font-medium text-gray-300 transition-colors group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]"
            >
              {item.name}
            </a>
            <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full box-shadow-[0_0_10px_cyan]" />
          </li>
        ))}
      </ul>

      <a
        href="/intership_resume.pdf"
        download="Pallav_Sarkar_CV.pdf"
        className="flex items-center gap-2 rounded-full border border-purple-500/50 bg-purple-500/10 px-6 py-2 text-base font-medium text-purple-300 transition-all hover:border-purple-400 hover:bg-purple-500/20 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
      >
        <span>CV</span>
        <Download size={18} />
      </a>
    </nav>
  );
};

export default HeroBar;