'use client'

import { useState } from 'react';
import { User, Briefcase, BookOpen, Mail, X, ImageIcon, Menu, Linkedin, Github, Download, ExternalLink } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [projectDetailOpen, setProjectDetailOpen] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDetail = (detail) => {
    setDetailOpen(detailOpen === detail ? null : detail);
  };

  const toggleProjectDetail = (index) => {
    setProjectDetailOpen(projectDetailOpen === index ? null : index);
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <main className="flex justify-center min-h-screen bg-white text-black font-sans">
      <nav className="hidden md:fixed md:z-50 md:top-0 md:left-0 md:h-screen md:w-52 md:flex md:flex-col md:justify-center md:px-20">
        <div className="space-y-12">
            <button
            onClick={() => scrollToSection('about')}
            className="flex items-center gap-4 text-base hover:underline transition-all"
          >
            <User size={16} />
            about
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="flex items-center gap-4 text-base hover:underline transition-all"
          >
            <Briefcase size={16} />
            projects
          </button>
          {/* <button
            onClick={() => scrollToSection('gallery')}
            className="flex items-center gap-4 text-base hover:underline transition-all"
          >
            <ImageIcon size={16} />
            gallery
          </button> */}
          {/* <button
            onClick={() => scrollToSection('blog')}
            className="flex items-center gap-4 text-base hover:underline transition-all"
          >
            <BookOpen size={16} />
            blog
          </button> */}
          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center gap-4 text-base hover:underline transition-all"
          >
            <Mail size={16} />
            contact
          </button>
        </div>
      </nav>

      <div className="fixed md:hidden top-0 left-0 right-0 z-50 border-b border-black bg-white flex justify-between items-center px-6 py-4">
        <div className="w-10 h-10 flex items-center justify-center">
          {/* <User size={20} /> */}
        </div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="fixed md:hidden top-20 left-0 right-0 bg-white border-b border-black z-40 py-6 px-6 space-y-4">
          <button
            onClick={() => scrollToSection('about')}
            className="flex items-center gap-4 text-sm hover:underline transition-all"
          >
            <User size={14} />
            about
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="flex items-center gap-4 text-sm hover:underline transition-all"
          >
            <Briefcase size={14} />
            projects
          </button>
          {/* <button
            onClick={() => scrollToSection('gallery')}
            className="flex items-center gap-4 text-sm hover:underline transition-all"
          >
            <ImageIcon size={14} />
            gallery
          </button>
          <button
            onClick={() => scrollToSection('blog')}
            className="flex items-center gap-4 text-sm hover:underline transition-all"
          >
            <BookOpen size={14} />
            blog
          </button> */}
          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center gap-4 text-sm hover:underline transition-all"
          >
            <Mail size={14} />
            contact
          </button>
        </div>
      )}

      <div className={`md:ml-62 md:mr-10 ${detailOpen ? 'pt-15' : 'pt-10'} md:pt-0`}>
        <section id="about" className="min-h-screen flex items-center px-4 md:px-12 py-10 md:py-12 snap-start">
          <div className="w-full max-w-6xl">
            <div className={`flex ${detailOpen ? 'flex-col' : 'flex-col-reverse'} md:flex-row gap-3 md:gap-4`}>
              <div
                className={`
                  p-6 md:p-12
                  transition-all duration-0 ease-in-out
                  ${detailOpen ? 'md:flex-1 md:h-100' : ' md:h-95'}
                `}
              >
                <h1 className="text-2xl md:text-4xl font-light mb-4 tracking-tight">
                  Hello,
                </h1>
                <p className="text-xl md:text-2xl font-light text-black mb-6 md:mb-4">I'm Amanda Nur Rahmi.</p>
                <p className="text-xs md:text-base text-gray-700 mb-6 md:mb-12 leading-relaxed max-w-2xl">
                  a junior web developer with hands-on experience in building web applications.
                  Passionate about continuous learning and building impactful digital products.
                </p>
                <button
                  onClick={() => toggleDetail('pendidikan')}
                  className={`text-sm md:text-base border border-black px-3 md:px-4 py-2 md:py-2 hover:bg-black hover:text-white transition-all duration-300 md:mr-4 mr-2 
                  ${
                      detailOpen === 'pendidikan' ? 'bg-black text-white' : ''
                    }
                      `}
                >
                  Education
                </button>
                <button
                  onClick={() => toggleDetail('work')}
                  className={`text-sm md:text-base border border-black px-3 md:px-4 py-2 md:py-2 hover:bg-black hover:text-white transition-all duration-300 md:mr-4 mr-2 md:mt-0 mt-2
                  ${
                      detailOpen === 'work' ? 'bg-black text-white' : ''
                    }
                      `}
                >
                  Work Experience
                </button>
                <button
                  onClick={() => toggleDetail('skills')}
                  className={`text-sm md:text-base border border-black px-3 md:px-4 py-2 md:py-2 hover:bg-black hover:text-white transition-all duration-300 mr-4 md:mt-0 mt-2 
                  ${
                      detailOpen === 'skills' ? 'bg-black text-white' : ''
                    }
                      `}
                >
                  Skills
                </button>
              </div>

              <div
                className={`
                  transition-all duration-500 ease-in-out overflow-hidden
                  ${detailOpen ? 'md:flex-1 opacity-100' : ''}
                `}
              >
                 {detailOpen === 'pendidikan' && (
                  <div className="border border-black p-6 md:p-12 md:h-full">
                    <div className="flex justify-between items-start mb-8">
                      <h2 className="text-lg md:text-xl font-light">Education</h2>
                      <button
                        onClick={() => toggleDetail('pendidikan')}
                        className="hover:bg-gray-100 p-2 transition-all"
                      >
                        <X size={20} />
                      </button>
                    </div>
                    <div className="space-y-8">
                      <div className="border-l-2 border-black pl-6">
                        <h3 className="text-sm md:text-base font-medium mb-2">
                          Bootcamp Perempuan Inovasi 
                        </h3>
                        <p className="text-gray-600 mb-2">Track Fullstack Web Dev</p>
                        <p className="text-gray-500">2025</p>
                      </div>
                      <div className="border-l-2 border-gray-300 pl-6">
                        <h3 className="text-sm md:text-base font-medium mb-2">
                          Bootcamp SMKDev Scholarship Expert Class
                        </h3>
                        <p className="text-gray-600 mb-2">Student</p>
                        <p className="text-gray-500">2025</p>
                      </div>
                      <div className="border-l-2 border-gray-300 pl-6">
                        <h3 className="text-sm md:text-base font-medium mb-2">
                          SMK Negeri 1 Gunungputri
                        </h3>
                        <p className="text-gray-600 mb-2">Software Engineering</p>
                        <p className="text-gray-500">2022 - 2025</p>
                      </div>
                    </div>
                  </div>
                )}

                {detailOpen === 'work' && (
                  <div className="border border-black p-6 md:p-12 md:h-full">
                    <div className="flex justify-between items-start mb-8">
                      <h2 className="text-lg md:text-xl font-light">Work Experience</h2>
                      <button
                        onClick={() => toggleDetail('work')}
                        className="hover:bg-gray-100 p-2 transition-all"
                      >
                        <X size={20} />
                      </button>
                    </div>
                    <div className="space-y-8">
                      <div className="border-l-2 border-black pl-6">
                        <h3 className="text-sm md:text-base font-medium mb-2">
                          Junior Web Developer
                        </h3>
                        <p className="text-gray-600 mb-2">B One Corp.</p>
                        <p className="text-gray-500 mb-3">2024</p>
                        <p className="text-gray-700 text-sm">Developed a clinic sales system using Laravel and XAMPP to support daily medicine transactions.</p>
                      </div>
                    </div>
                  </div>
                )}

                {detailOpen === 'skills' && (
                  <div className="border border-black p-6 md:p-12 md:h-full">
                    <div className="flex justify-between items-start mb-8">
                      <h2 className="text-lg md:text-xl font-light">Skills</h2>
                      <button
                        onClick={() => toggleDetail('skills')}
                        className="hover:bg-gray-100 p-2 transition-all"
                      >
                        <X size={20} />
                      </button>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-medium mb-3">Languages & Frameworks</h3>
                        <div className="flex flex-wrap gap-2">
                          {['JavaScript','PHP', 'Next.js', 'React', 'Express.js', 'Laravel'].map((skill) => (
                            <span
                              key={skill}
                              className="border border-gray-300 px-3 py-1 text-sm rounded-full bg-gray-50"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium mb-3">Backend Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                          {['Node.js', 'Express.js', 'MongoDB'].map((skill) => (
                            <span
                              key={skill}
                              className="border border-gray-300 px-3 py-1 text-sm rounded-full bg-gray-50"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium mb-3">AI & Automation</h3>
                        <div className="flex flex-wrap gap-2">
                          {['Google Gemini API', 'n8n Automation'].map((skill) => (
                            <span
                              key={skill}
                              className="border border-gray-300 px-3 py-1 text-sm rounded-full bg-gray-50"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium mb-3">Tools & Others</h3>
                        <div className="flex flex-wrap gap-2">
                          {['Git', 'GitHub', 'Postman', 'Netlify', 'Vercel'].map((skill) => (
                            <span
                              key={skill}
                              className="border border-gray-300 px-3 py-1 text-sm rounded-full bg-gray-50"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {!detailOpen && (
                  <div className="flex justify-center items-center md:h-95">
                    <div className="px-12">
                        <img src="/Amanda.png" alt="Foto Amanda Nur Rahmi" className="w-100 h-full" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="min-h-screen flex items-center px-4 md:px-12 py-10 bg-gray-50 snap-start">
          <div className="w-full max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-light mb-8 md:mb-10 tracking-tight">Projects</h2>
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-4">
              {/* Project Grid / List */}
              <div className={`grid grid-cols-1 ${projectDetailOpen !== null ? 'md:grid-cols-1 md:w-1/2 md:h-full' : 'md:grid-cols-2 md:w-full'} gap-6 md:gap-4 transition-all duration-500`}>
                {[
                  {
                    title: 'ManagHer',
                    image: '/managher.png',
                    description: 'SaaS platform designed to empower women entrepreneurs.',
                    tech: 'Next.js, React, Express.js, Node.js, MongoDB, Google AI..',
                    link: 'https://managher-v2.vercel.app/',
                    longDescription: 'ManagHer is a comprehensive SaaS platform designed to empower women entrepreneurs. It leverages AI to generate business ideas based on user interests and market trends. The platform also includes tools for business planning, task management, and resource allocation.'
                  },
                  {
                    title: 'OwlShop',
                    image: '/owlshop.png',
                    description: 'Cart app',
                    tech: 'Next.js, React, Tailwind CSS',
                    link: 'https://owlshop-mu.vercel.app/',
                    longDescription: 'OwlShop is a modern e-commerce cart application built with performance and user experience in mind. It features a clean UI, seamless checkout process, and real-time inventory updates.'
                  },
                  {
                    title: 'SMK Negeri 1 ChatBot',
                    image: '/chatbot.png',
                    description: 'Telegram chatbot that helps students with their questions',
                    tech: 'n8n, Google Gemini API',
                    link: '#',
                    longDescription: 'An intelligent chatbot designed for SMK Negeri 1 Gunungputri students. Powered by Google Gemini API and n8n, it can answer questions about school schedules, curriculum, and administrative procedures with high accuracy.'
                  },
                  {
                    title: 'Library',
                    description: 'Library management system',
                    tech: 'Laravel, XAMPP, MySQL',
                    link: '#',
                    longDescription: 'A robust library management system built with Laravel. It handles book inventory, member management, borrowing/returning processes, and generates detailed reports for library administrators.'
                  },
                ].map((project, index) => (
                  <div key={index} className="flex flex-col">
                    <div
                      onClick={() => toggleProjectDetail(index)}
                      className={`
                        border border-black p-4 md:p-5 transition-all duration-300 group cursor-pointer
                        ${projectDetailOpen === index ? 'bg-black text-white hover:bg-white hover:text-black' : ''}
                      `}
                    >
                      <h3 className={`text-base md:text-lg font-light mb-3 ${projectDetailOpen === index ? '' : 'group-hover:underline'}`}>
                        {project.title}
                      </h3>
                      <p className={`text-xs md:text-sm mb-4 ${projectDetailOpen === index ? 'hidden' : ''}`}>{project.description}</p>
                      <p className={`text-xs md:text-xs ${projectDetailOpen === index ? 'text-gray-400 hidden' : 'text-gray-500'}`}>{project.tech}</p>
                    </div>

                    {/* Mobile Detail View (Expandable) */}
                    <AnimatePresence>
                      {projectDetailOpen === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="md:hidden border-l border-r border-b border-black overflow-hidden"
                        >
                          <div className="p-6 bg-gray-50">
                             <img src={project.image} alt={project.title} className=" mb-4" />
                             <h4 className="text-lg font-medium mb-3">{project.title}</h4>
                             <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                               {project.longDescription}
                             </p>
                             <div className="mb-4">
                               <h5 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Technologies</h5>
                               <p className="text-sm text-gray-600">{project.tech}</p>
                             </div>
                             <a href={project.link} className="inline-flex items-center gap-2 text-sm font-medium hover:underline">
                               View Project <ExternalLink size={14} />
                             </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Desktop Detail View (Sidebar) */}
              <AnimatePresence>
                {projectDetailOpen !== null && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="hidden md:block md:w-1/2 border border-black p-8 h-fit sticky top-24"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-light">
                        {[
                          {
                            title: 'ManagHer',
                            image: '/managher.png',
                            description: 'SaaS web app that help generate and manage business ideas',
                            tech: 'Next.js, React, Express.js, Node.js, MongoDB, Google AI SDK, Tailwind CSS, JWT',
                            link: 'https://managher-v2.vercel.app/',
                            longDescription: 'ManagHer is a comprehensive SaaS platform designed to empower women entrepreneurs. It leverages AI to generate business ideas based on user interests and market trends. The platform also includes tools for business planning, task management, and resource allocation.'
                          },
                          {
                            title: 'OwlShop',
                            description: 'Cart app',
                            tech: 'Next.js, React, Tailwind CSS',
                            link: 'https://owlshop-mu.vercel.app/',
                            longDescription: 'OwlShop is a modern e-commerce cart application built with performance and user experience in mind. It features a clean UI, seamless checkout process, and real-time inventory updates.'
                          },
                          {
                            title: 'SMK Negeri 1 ChatBot',
                            description: 'Telegram chatbot that helps students with their questions',
                            tech: 'n8n, Google Gemini API',
                            link: '#',
                            longDescription: 'An intelligent chatbot designed for SMK Negeri 1 Gunungputri students. Powered by Google Gemini API and n8n, it can answer questions about school schedules, curriculum, and administrative procedures with high accuracy.'
                          },
                          {
                            title: 'Library',
                            description: 'Library management system',
                            tech: 'Laravel, XAMPP, MySQL',
                            link: '#',
                            longDescription: 'A robust library management system built with Laravel. It handles book inventory, member management, borrowing/returning processes, and generates detailed reports for library administrators.'
                          },
                        ][projectDetailOpen].title}
                      </h3>
                      <button onClick={() => setProjectDetailOpen(null)} className="hover:bg-gray-100 p-2 rounded-full transition-all">
                        <X size={20} />
                      </button>
                    </div>
                    <img src={[
                          {
                            image: '/managher.png',
                          },
                          {
                            image: '/owlshop.png',
                          },
                          {
                            image: '/chatbot.png',
                          },
                          {
                            image: '/library.svg',
                          },
                        ][projectDetailOpen].image} alt={[
                          {
                            title: 'ManagHer',
                          },
                          {
                            title: 'OwlShop',
                          },
                          {
                            title: 'SMK Negeri 1 ChatBot',
                          },
                          {
                            title: 'Library',
                          },
                        ][projectDetailOpen].title} className="w-100 h-full mb-4" />
                    <p className="text-base text-gray-700 mb-8 leading-relaxed">
                       {[
                          {
                            longDescription: 'ManagHer is a comprehensive SaaS platform designed to empower women entrepreneurs. It leverages AI to generate business ideas based on user interests and market trends. The platform also includes tools for business planning, task management, and resource allocation.'
                          },
                          {
                            longDescription: 'OwlShop is a modern e-commerce cart application built with performance and user experience in mind. It features a clean UI, seamless checkout process, and real-time inventory updates.'
                          },
                          {
                            longDescription: 'An intelligent chatbot designed for SMK Negeri 1 Gunungputri students. Powered by Google Gemini API and n8n, it can answer questions about school schedules, curriculum, and administrative procedures with high accuracy.'
                          },
                          {
                            longDescription: 'A robust library management system built with Laravel. It handles book inventory, member management, borrowing/returning processes, and generates detailed reports for library administrators.'
                          },
                        ][projectDetailOpen].longDescription}
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {[
                            { tech: 'Next.js, React, Express.js, Node.js, MongoDB, Google AI SDK, Tailwind CSS, JWT' },
                            { tech: 'Next.js, React, Tailwind CSS' },
                            { tech: 'n8n, Google Gemini API' },
                            { tech: 'Laravel, XAMPP, MySQL' },
                          ][projectDetailOpen].tech.split(', ').map((tech, i) => (
                            <span key={i} className="border border-gray-300 px-3 py-1 text-sm rounded-full bg-gray-50">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-6 border-t border-gray-200">
                        <a 
                          href={[
                            { link: 'https://managher-v2.vercel.app/' },
                            { link: 'https://owlshop-mu.vercel.app/' },
                            { link: '#' },
                            { link: '#' },
                          ][projectDetailOpen].link} 
                          className="inline-flex items-center gap-3 border border-black px-6 py-3 hover:bg-black hover:text-white transition-all duration-300"
                        >
                          View Live Project <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* <section id="gallery" className="min-h-screen flex items-center px-4 md:px-20 py-16 bg-gray-50">
          <div className="w-full max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-light mb-12 md:mb-16 tracking-tight">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  id: 1,
                  title: 'Desert Landscape',
                  src: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=600',
                },
                {
                  id: 2,
                  title: 'Mountain Views',
                  src: 'https://images.pexels.com/photos/1487730/pexels-photo-1487730.jpeg?auto=compress&cs=tinysrgb&w=600',
                },
                {
                  id: 3,
                  title: 'Ocean Waves',
                  src: 'https://images.pexels.com/photos/1470496/pexels-photo-1470496.jpeg?auto=compress&cs=tinysrgb&w=600',
                },
                {
                  id: 4,
                  title: 'Forest Path',
                  src: 'https://images.pexels.com/photos/1433086/pexels-photo-1433086.jpeg?auto=compress&cs=tinysrgb&w=600',
                },
                {
                  id: 5,
                  title: 'Sunset Sky',
                  src: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600',
                },
                {
                  id: 6,
                  title: 'Urban Architecture',
                  src: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600',
                },
              ].map((image) => (
                <div
                  key={image.id}
                  className="group overflow-hidden border border-black aspect-square cursor-pointer"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="blog" className="min-h-screen flex items-center px-4 md:px-20 py-16">
          <div className="w-full max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-light mb-12 md:mb-16 tracking-tight">Blog</h2>
            <div className="space-y-4 md:space-y-6">
              {[
                {
                  title: 'Modern Web Development Best Practices',
                  date: '15 Desember 2024',
                  excerpt: 'Exploring the latest trends and methodologies in web development.',
                },
                {
                  title: 'Understanding React Hooks',
                  date: '8 Desember 2024',
                  excerpt: 'A deep dive into useState, useEffect, and custom hooks.',
                },
                {
                  title: 'Building Responsive Layouts with Tailwind',
                  date: '1 Desember 2024',
                  excerpt: 'Tips and tricks for creating beautiful responsive designs.',
                },
              ].map((post, index) => (
                <div
                  key={index}
                  className="border-b border-gray-300 pb-4 md:pb-6 hover:border-black transition-all duration-300 cursor-pointer group"
                >
                  <h3 className="text-lg md:text-2xl font-light mb-2 group-hover:underline">
                    {post.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 mb-3">{post.date}</p>
                  <p className="text-sm md:text-base text-gray-600">{post.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        <section id="contact" className="min-h-screen flex items-center px-4 md:px-12 py-10 bg-gray-50 snap-start">
          <div className="flex flex-col items-center justify-center w-full max-w-5xl p-6 md:p-12">
            <h2 className="text-2xl md:text-3xl font-light mb-8 md:mb-10 tracking-tight">Get in touch</h2>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 md:w-150">
              <div className="flex-1">
                <p className="text-xs md:text-sm text-gray-600 mb-8 leading-relaxed max-w-2xl">
                  I&apos;m always interested in hearing about new projects and opportunities. Connect with me through any of these channels and let&apos;s create something amazing together.
                </p>
                <p className="text-xs md:text-sm text-gray-500">
                  Based in Bogor, Indonesia
                </p>
              </div>
              <div className='w-full md:w-auto'>
                <div className="flex flex-row flex-wrap justify-center md:flex-col gap-3 md:gap-4">
                  <a
                    href="mailto:amndofc@gmail.com"
                    className="flex-1 md:flex-none flex items-center justify-center gap-2 md:gap-4 border border-black px-3 md:px-5 py-2 hover:bg-black hover:text-white transition-all duration-300"
                  >
                    <Mail size={18} />
                    <span className="text-xs md:text-sm font-light">Email</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/amanda-nur-rahmi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-none flex items-center justify-center gap-2 md:gap-4 border border-black px-3 md:px-5 py-2 hover:bg-black hover:text-white transition-all duration-300"
                  >
                    <Linkedin size={18} />
                    <span className="text-xs md:text-sm font-light">LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/brmandw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-none flex items-center justify-center gap-2 md:gap-4 border border-black px-3 md:px-5 py-2 hover:bg-black hover:text-white transition-all duration-300"
                  >
                    <Github size={18} />
                    <span className="text-xs md:text-sm font-light">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

       
      </div>
    </main>
  );
}

export default App;
