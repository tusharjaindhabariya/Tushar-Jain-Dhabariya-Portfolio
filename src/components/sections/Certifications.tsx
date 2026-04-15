"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { Award, CheckCircle } from 'lucide-react';

const certifications = [
  {
    title: 'React JS Development',
    organization: 'Infosys Springboard',
    year: '2025',
    description:
      'Completed React JS training focusing on building dynamic and responsive user interfaces using modern frontend development practices.',
    skills: ['React.js', 'JavaScript', 'Component-Based Architecture', 'State Management', 'Frontend Development']
  },
  {
    title: 'AWS Cloud Practitioner Essentials',
    organization: 'Amazon Web Services (AWS)',
    year: '2025',
    description:
      'Learned core cloud computing concepts, AWS services, security, architecture, and pricing models.',
    skills: ['Cloud Computing', 'AWS Basics', 'EC2', 'S3', 'IAM', 'Cloud Architecture']
  },
  {
    title: 'Mastercard Cybersecurity Job Simulation',
    organization: 'Mastercard (Forage)',
    year: '2025',
    description:
      'Worked on cybersecurity simulations involving threat analysis, security principles, and risk assessment in real-world scenarios.',
    skills: ['Cybersecurity Basics', 'Threat Analysis', 'Risk Assessment', 'Problem Solving']
  },
  {
    title: 'Ultimate Data Science & Machine Learning Course',
    organization: 'CodeWithHarry',
    year: '2025',
    description:
      'Comprehensive course covering Python programming, data analysis, machine learning, and real-world projects.',
    skills: [
      'Python',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Seaborn',
      'Machine Learning',
      'Regression',
      'Classification',
      'Data Preprocessing',
      'Feature Engineering',
      'Model Evaluation'
    ]
  }
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Certifications & <span className="text-white/50">Achievements</span>
          </h2>

          <p className="text-white/60 max-w-2xl text-lg">
            Certifications reflecting my expertise in frontend development, cloud computing, cybersecurity, and machine learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="h-full"
            >
              <GlassCard className="h-full flex flex-col p-8 group relative overflow-hidden">

                <div className="absolute top-0 right-0 -mr-6 -mt-6 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors pointer-events-none" />

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <Award className="text-white/70 group-hover:text-white transition-colors" size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{cert.title}</h3>
                </div>

                <div className="mb-6 flex-1">
                  <h4 className="text-white/80 font-medium mb-1">{cert.organization}</h4>
                  <p className="text-white/40 text-sm mb-4">{cert.year}</p>

                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <h5 className="text-xs uppercase text-white/50 mb-3 font-semibold">
                    Skills Gained
                  </h5>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map(skill => (
                      <span key={skill} className="flex items-center gap-1.5 text-xs text-white/70">
                        <CheckCircle size={12} className="text-white/40" /> {skill}
                      </span>
                    ))}
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