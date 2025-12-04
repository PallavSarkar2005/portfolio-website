import React from 'react';
import { Github, Twitter, Linkedin, Instagram, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pointer-events-auto relative w-full overflow-hidden border-t border-white/10 bg-neutral-950/80 backdrop-blur-xl">
      
      {/* Decorative Top Glow */}
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

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <h3 className="mb-6 font-mono text-sm font-bold uppercase tracking-wider text-cyan-400">Navigation</h3>
            <ul className="space-y-3">
              {['Home', 'Work', 'About', 'Process'].map((link) => (
                <li key={link}>
                  <a href="#" className="group flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white">
                    <span className="h-[1px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-4"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: CONTACT */}
          <div>
            <h3 className="mb-6 font-mono text-sm font-bold uppercase tracking-wider text-purple-400">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@example.com" className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white">
                  <Mail size={16} /> hello@example.com
                </a>
              </li>
              <li className="text-sm text-gray-400">
                New York, NY (Remote)
              </li>
            </ul>
          </div>

          {/* COLUMN 4: SOCIALS */}
          <div>
            <h3 className="mb-6 font-mono text-sm font-bold uppercase tracking-wider text-pink-400">Socials</h3>
            <div className="flex gap-4">
              {[
                { icon: Github, color: "hover:text-white hover:shadow-[0_0_15px_white]" },
                { icon: Twitter, color: "hover:text-cyan-400 hover:shadow-[0_0_15px_cyan]" },
                { icon: Linkedin, color: "hover:text-blue-500 hover:shadow-[0_0_15px_blue]" },
                { icon: Instagram, color: "hover:text-pink-500 hover:shadow-[0_0_15px_magenta]" },
              ].map((Social, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className={`rounded-lg border border-white/10 bg-white/5 p-3 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-transparent ${Social.color}`}
                >
                  <Social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Creative Developer. All rights reserved.
          </p>
          
          <a href="#" className="flex items-center gap-1 text-xs font-medium text-gray-400 hover:text-cyan-400">
            Back to Top <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;