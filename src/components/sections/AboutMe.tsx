"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content (UPDATED ✅) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6">
              Building Intelligent Systems. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">
                Solving Real-World Problems.
              </span>
            </h2>

            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                I am a Computer Applications student with a strong interest in Machine Learning and Software Development. I have been placed at VE Commercial Vehicles and focus on building practical, industry-ready solutions.
              </p>

              <p>
                I have experience in Python, Data Structures, and Machine Learning, along with working on real-world projects such as predictive modeling and data analysis. I enjoy transforming raw data into meaningful insights and actionable solutions.
              </p>

              <p>
                In addition, I develop modern web applications using contemporary technologies. My goal is to build scalable, efficient, and intelligent systems that solve real problems and create impact.
              </p>
            </div>
          </motion.div>

          {/* Right Image (IMPROVED 🔥) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-4/5 sm:w-2/3 lg:w-3/4 mx-auto lg:ml-auto lg:mr-0 group"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative mx-auto">

              <img
                src="/tushar.jpeg"
                alt="Tushar Dhabariya Portrait"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-110 transition-all duration-700 ease-in-out"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=800&auto=format&fit=crop";
                }}
              />

              <div className="absolute inset-0 border border-white/10 rounded-3xl z-10 pointer-events-none" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
            </div>

            <div className="absolute -inset-4 bg-white/5 blur-3xl -z-10 rounded-full group-hover:bg-white/10 transition-all duration-700" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};