"use client";

import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  {
    role: "Software Intern",
    entity: "VE Commercial Vehicles",
    period: "Current",
    description:
      "Working on industry-level applications and gaining hands-on experience in software development and real-world problem solving within an automotive environment."
  },
  {
    role: "Intern",
    entity: "Robust Robotics",
    period: "Dec 2025 - Feb 2026",
    description:
      "Worked on technical projects involving software and data-driven approaches, contributing to real-world solutions and improving problem-solving skills."
  },
  {
    role: "Intern",
    entity: "Tapish Foundation",
    period: "Sept 2025 - Nov 2025",
    description:
      "Contributed to data analysis and project-based work, focusing on deriving insights and supporting impactful initiatives."
  },
  {
    role: "Bachelor of Engineering in Computer Engineering",
    entity: "IET DAVV, Indore",
    period: "Expected 2027",
    description:
      "Pursuing a degree in Computer Engineering with focus on Data Structures, Machine Learning, and Software Development, building a strong foundation in problem-solving and real-world applications."
  },
  {
    role: "Machine Learning & Full-Stack Development",
    entity: "Personal Projects",
    period: "2023 - Present",
    description:
      "Developed machine learning models and full-stack applications, working on predictive analytics, data-driven solutions, and modern web technologies."
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-white/50">Journey</span>
          </h2>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">

          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >

              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-black text-white/50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors group-hover:bg-white group-hover:text-black">
                <div className="w-2 h-2 rounded-full bg-current" />
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 transition-colors hover:bg-white/10 hover:border-white/20">

                <div className="flex flex-col sm:flex-row justify-between mb-3 items-start sm:items-center">
                  <h3 className="text-xl font-bold">{item.role}</h3>
                  <span className="text-sm text-white/50 bg-white/5 px-3 py-1 rounded-full mt-2 sm:mt-0">
                    {item.period}
                  </span>
                </div>

                <h4 className="text-white/80 font-medium mb-4">{item.entity}</h4>

                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};