import React from 'react';
import { Github, Twitter, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="pointer-events-auto relative w-full overflow-hidden border-t border-white/10 bg-neutral-950/80 backdrop-blur-xl">
      <div className="absolute left-1/2 top-0 h-[1px] w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 shadow-[0_0_15px_cyan]"></div>

      <div className="mx-auto max-w-7xl px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* COLUMN 1: BRANDING */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter text-white">
              PORTFOLIO<span className="text-purple-500">.</span>
            </h2>
            <p className="max-w-xs text-sm text-gray-400">
              Crafting immersive digital experiences with code, creativity, and a touch of neon.
            </p>
          </div>
          <div>
            <h3 className="mb-6 font-mono text-sm font-bold uppercase tracking-wider text-cyan-400">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => scrollToSection(e, '#home')}
                  className="group flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <span className="h-[1px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-4"></span>
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#work" 
                  onClick={(e) => scrollToSection(e, '#work')}
                  className="group flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <span className="h-[1px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-4"></span>
                  Work
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => scrollToSection(e, '#about')}
                  className="group flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <span className="h-[1px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-4"></span>
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 font-mono text-sm font-bold uppercase tracking-wider text-purple-400">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:pallav2005sarkar@gmail.com" className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white">
                  <Mail size={16} /> pallav2005sarkar@gmail.com
                </a>
              </li>
              <li className="text-sm text-gray-400">
                Odisha, India
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 font-mono text-sm font-bold uppercase tracking-wider text-pink-400">Socials</h3>
            <div className="flex gap-4">
              <a 
                href="https://github.com/PallavSarkar2005" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 bg-white/5 p-3 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:text-white hover:shadow-[0_0_15px_white]"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://x.com/Pallav_Sarkar_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 bg-white/5 p-3 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:text-cyan-400 hover:shadow-[0_0_15px_cyan]"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/pallav-sarkar-4746a630b?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 bg-white/5 p-3 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:text-blue-500 hover:shadow-[0_0_15px_blue]"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Creative Developer. All rights reserved.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1 text-xs font-medium text-gray-400 hover:text-cyan-400 transition-colors"
          >
            Back to Top <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;