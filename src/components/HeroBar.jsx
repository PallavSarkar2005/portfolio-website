import React from "react";
import { Download } from "lucide-react";

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
        className="text-3xl font-bold tracking-tighter cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(192,132,252,0.5)]">
          PORTFOLIO
        </span>
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
        href="/resume.pdf"
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
