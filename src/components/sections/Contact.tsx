"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { MagneticButton } from '../ui/MagneticButton';
import { Mail, ArrowUpRight, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative text-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <GlassCard className="p-12 md:p-20 text-center overflow-hidden relative border-white/10">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex flex-col items-center"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Let's Work <br />
              <span className="text-white/50">Together.</span>
            </h2>

            <p className="text-lg text-white/70 max-w-xl mx-auto mb-10">
              I am open to opportunities in Machine Learning and Software Development.
              I am interested in working on real-world problems and building impactful solutions.
              Feel free to connect with me.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <a href="mailto:jaintushar2626@gmail.com">
                <MagneticButton className="flex items-center gap-2 bg-white text-black hover:bg-white/90 px-8 py-4 text-lg">
                  Send an Email <Mail size={20} />
                </MagneticButton>
              </a>

              <a
                href="https://www.linkedin.com/in/tushar-jain-dhabariya-ab39a6282"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors font-medium bg-white/5 px-6 py-4 rounded-full border border-white/10 hover:border-white/30"
              >
                Connect on LinkedIn <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-3xl pt-8 border-t border-white/10">

              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-2">
                  <MapPin size={20} className="text-white/70" />
                </div>
                <h4 className="font-semibold text-lg">Location</h4>
                <p className="text-white/60">Indore, India</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-2">
                  <Phone size={20} className="text-white/70" />
                </div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p className="text-white/60">+91 8349964755</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-2">
                  <Mail size={20} className="text-white/70" />
                </div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="text-white/60 text-sm md:text-base break-words">
                  jaintushar2626<br className="sm:hidden" />@gmail.com
                </p>
              </div>

            </div>
          </motion.div>
        </GlassCard>
      </div>
    </section>
  );
};