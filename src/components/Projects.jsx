import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className='my-20 text-center text-4xl'
        >
          Projects
        </motion.h2>

        <div>
            {PROJECTS.map((project, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div 
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: -100 }}
                      transition={{ duration: 1 }}
                      className='w-full lg:w-1/4'
                    >
                      <img 
                        src={project.image} 
                        width={150} 
                        height={150} 
                        alt={project.title} 
                        className='mb-6 rounded'
                      />
                    </motion.div>

                    <motion.div
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: 100 }}
                      transition={{ duration: 1 }}
                      className='w-full max-w-xl lg:w-3/4'
                    >
                      <div className='flex items-center justify-between mb-4'>
                        <h6 className='text-xl font-semibold'>{project.title}</h6>
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className='bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out border border-blue-700 hover:border-blue-800'
                        >
                          View Project
                        </a>
                      </div>
                      <p className='mb-4 text-neutral-400'>{project.description}</p>
                      {project.technologies.map((tech, index) => (
                        <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700'>
                          {tech}
                        </span> 
                      ))}
                    </motion.div>
                </div>    
            ))}
        </div>
    </div>
  );
}

export default Projects;
