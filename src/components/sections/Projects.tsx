"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Jet Engine Remaining Useful Life Prediction',
    description:
      'Developed a machine learning model to predict the remaining useful life (RUL) of jet engines using time-series sensor data. Implemented data preprocessing, feature engineering, and regression models to improve prediction accuracy.',
    image: '/JetEngine.png',
    tags: ['Python', 'Machine Learning', 'Pandas', 'NumPy', 'Regression'],
    link: '#',
    github: '#'
  },
  {
    title: 'CareBuddy AI',
    description:
      'An AI-powered assistant designed to provide health-related guidance and basic medical insights. Built using NLP techniques to understand user queries and deliver intelligent responses.',
    image: '/CareBuddy.png',
    tags: ['Python', 'AI', 'NLP', 'Machine Learning'],
    link: '#',
    github: '#'
  },
  {
    title: 'House Rent Price Prediction',
    description:
      'Built a predictive model to estimate house rent prices based on location, amenities, and other features. Applied data analysis, feature selection, and regression techniques for accurate predictions.',
    image: '/HouseRent.png',
    tags: ['Python', 'ML', 'Pandas', 'Scikit-learn'],
    link: '#',
    github: '#'
  },
  {
    title: 'Student Risk & Sentimental Analysis',
    description:
      'Developed a system to analyze student performance risk and sentiment using data analytics and NLP techniques. Identified at-risk students and extracted insights from textual feedback.',
    image: '/StudentRisk.png',
    tags: ['Python', 'NLP', 'Data Analysis', 'Machine Learning'],
    link: '#',
    github: '#'
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-white/50">Projects</span>
          </h2>

          <p className="text-white/60 max-w-xl text-lg">
            A selection of projects showcasing my experience in Machine Learning, Data Analysis, and Software Development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
            >
              <GlassCard className="h-full flex flex-col group p-0 overflow-hidden">
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all z-10 duration-500" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>

                  <p className="text-white/60 flex-1 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 border-t border-white/10 pt-6">
                    <a href={project.link} className="flex items-center text-sm hover:text-white/70 gap-2">
                      Live Preview <ExternalLink size={16} />
                    </a>

                    <a href={project.github} className="flex items-center text-sm hover:text-white/70 gap-2">
                      Source Code <FaGithub size={16} />
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};