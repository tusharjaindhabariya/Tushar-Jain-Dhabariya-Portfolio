"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import {
  SiPython, SiReact, SiNodedotjs, SiMongodb, SiExpress,
  SiCplusplus, SiNumpy, SiJavascript, SiPandas
} from 'react-icons/si';
import { Database, BarChart3, BrainCircuit, Cloud } from 'lucide-react';

const skillCategories = [
  {
    title: "Machine Learning & Data",
    skills: [
      { name: 'Python', icon: <SiPython size={28} /> },
      { name: 'NumPy', icon: <SiNumpy size={28} /> },
      { name: 'Pandas', icon: <SiPandas size={28} /> },
      { name: 'Machine Learning', icon: <BrainCircuit size={28} /> },
      { name: 'Data Visualization', icon: <BarChart3 size={28} /> },
      { name: 'SQL', icon: <Database size={28} /> },
    ]
  },
  {
    title: "Web Development",
    skills: [
      { name: 'React.js', icon: <SiReact size={28} /> },
      { name: 'Node.js', icon: <SiNodedotjs size={28} /> },
      { name: 'Express.js', icon: <SiExpress size={28} /> },
      { name: 'MongoDB', icon: <SiMongodb size={28} /> },
      { name: 'JavaScript', icon: <SiJavascript size={28} /> },
    ]
  },
  {
    title: "Core & Tools",
    skills: [
      { name: 'C++', icon: <SiCplusplus size={28} /> },
      { name: 'AWS Basics', icon: <Cloud size={28} /> },
    ]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical Skills
          </h2>

          <p className="text-white/60 max-w-xl mx-auto text-lg">
            A well-rounded combination of machine learning, full-stack development, and core engineering skills.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-16 max-w-6xl mx-auto">

          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Category Title */}
              <h3 className="text-xl font-semibold mb-6 text-white/80 text-center md:text-left">
                {category.title}
              </h3>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
                {category.skills.map((skill) => (
                  <GlassCard
                    key={skill.name}
                    className="flex flex-col items-center justify-center p-5 gap-3 hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className="text-white/70 group-hover:text-white transition">
                      {skill.icon}
                    </div>
                    <span className="text-sm text-white/70 text-center">
                      {skill.name}
                    </span>
                  </GlassCard>
                ))}
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};