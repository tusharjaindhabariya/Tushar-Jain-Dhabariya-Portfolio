"use client";

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12 bg-black/50 backdrop-blur-xl relative z-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left - Name */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-gradient">
            Tushar Dhabariya
          </span>
          <span className="text-sm text-white/40">© 2026</span>
        </div>

        {/* Center - Social Links */}
        <div className="flex items-center gap-6">

          <a
            href="https://github.com/tusharjaindhabariya"
            target="_blank"
            rel="noreferrer"
            className="text-white/50 hover:text-white transition-colors"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/tushar-jain-dhabariya-ab39a6282"
            target="_blank"
            rel="noreferrer"
            className="text-white/50 hover:text-white transition-colors"
          >
            <FaLinkedin size={20} />
          </a>

        </div>

        {/* Right - Role */}
        <div className="text-right">
          <p className="text-sm text-white/50">
            Machine Learning Engineer | Software Developer
          </p>
        </div>

      </div>
    </footer>
  );
};