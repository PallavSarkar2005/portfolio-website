import React from 'react';

const HeroBar = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b border-white/10 bg-neutral-950/60 px-8 py-6 backdrop-blur-md">
      <div className="text-3xl font-bold tracking-tighter">
        <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(192,132,252,0.5)]">
          PORTFOLIO
        </span>
      </div>
      <ul className="hidden items-center gap-10 md:flex">
        {['Home', 'Work', 'About'].map((item) => (
          <li key={item} className="group relative cursor-pointer">
            <span className="text-lg font-medium text-gray-300 transition-colors group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">
              {item}
            </span>
            {/* Animated Underline */}
            <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full box-shadow-[0_0_10px_cyan]" />
          </li>
        ))}
      </ul>
      <button className="rounded-full border border-purple-500/50 bg-purple-500/10 px-8 py-3 text-base font-medium text-purple-300 transition-all hover:border-purple-400 hover:bg-purple-500/20 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]">
        Let's Talk
      </button>
    </nav>
  );
};

export default HeroBar;