'use client'

import { useState } from 'react';
import { User, Briefcase, BookOpen, Mail, X, ImageIcon, Menu, Linkedin, Github, Download } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDetail = (detail) => {
    setDetailOpen(detailOpen === detail ? null : detail);
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

      <div className="md:ml-62 md:mr-10 pt-15 md:pt-0">
        <section id="about" className="min-h-screen flex items-center px-4 md:px-12 py-10 md:py-12">
          <div className="w-full max-w-6xl">
            <div className={`flex ${detailOpen ? 'flex-col' : 'flex-col-reverse'} md:flex-row gap-3 md:gap-4`}>
              <div
                className={`
                  border border-black p-6 md:p-12
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
                  className={`text-sm md:text-base border border-black px-3 md:px-4 py-2 md:py-2 hover:bg-black hover:text-white transition-all duration-300 mr-4 
                  ${
                      detailOpen === 'pendidikan' ? 'bg-black text-white' : ''
                    }
                      `}
                >
                  Education
                </button>
                <button
                  onClick={() => toggleDetail('work')}
                  className={`text-sm md:text-base border border-black px-3 md:px-4 py-2 md:py-2 hover:bg-black hover:text-white transition-all duration-300 mr-4 md:mt-0 mt-4
                  ${
                      detailOpen === 'work' ? 'bg-black text-white' : ''
                    }
                      `}
                >
                  Work Experience
                </button>
                <button
                  onClick={() => toggleDetail('skills')}
                  className={`text-sm md:text-base border border-black px-3 md:px-4 py-2 md:py-2 hover:bg-black hover:text-white transition-all duration-300 mr-4 md:mt-0 mt-4 
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
                          {['Google Gemini API', 'Chain-of-Thought Prompting', 'Role-based Prompting', 'n8n Automation'].map((skill) => (
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
                  <div className="flex justify-center items-center border border-black md:h-full">
                    <div className="px-12">
                        <img src="/globe.svg" alt="B One Corp." className="w-100 h-40" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="min-h-screen flex items-center px-4 md:px-12 py-10 bg-gray-50">
          <div className="w-full max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-light mb-8 md:mb-10 tracking-tight">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4">
              {[
                {
                  title: 'ManagHer',
                  description: 'SaaS web app that help generate and manage business ideas',
                  tech: 'Next.js, React, Express.js, Node.js, MongoDB, Google AI SDK, Tailwind CSS, TweakCN, Zod, React Hook Form, JWT',
                },
                {
                  title: 'OwlShop',
                  description: 'Cart app',
                  tech: 'Next.js, React, Tailwind CSS',
                },
                {
                  title: 'SMK Negeri 1 ChatBot',
                  description: 'Telegram chatbot that helps students with their questions',
                  tech: 'n8n, Google Gemini API, Chain-of-Thought Prompting',
                },
                {
                  title: 'Library',
                  description: 'Library management system',
                  tech: 'Laravel, XAMPP, MySQL',
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="border border-black p-4 md:p-5 hover:bg-white transition-all duration-300 group cursor-pointer"
                >
                  <h3 className="text-base md:text-lg font-light mb-3 group-hover:underline">
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 mb-4">{project.description}</p>
                  <p className="text-xs md:text-xs text-gray-500">{project.tech}</p>
                </div>
              ))}
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

        <section id="contact" className="min-h-screen flex items-center px-4 md:px-12 py-10 bg-gray-50">
          <div className="flex flex-col items-center justify-center w-full max-w-5xl">
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
              <div className=''>
                <div className="flex flex-col gap-6 md:gap-4">
                  <a
                    href="mailto:amndofc@gmail.com"
                    className="flex items-center gap-4 border border-black px-4 md:px-5 py-2 hover:bg-black hover:text-white transition-all duration-300"
                  >
                    <Mail size={18} />
                    <span className="text-xs md:text-sm font-light">Email</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/amanda-nur-rahmi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 border border-black px-4 md:px-5 py-2 hover:bg-black hover:text-white transition-all duration-300"
                  >
                    <Linkedin size={18} />
                    <span className="text-xs md:text-sm font-light">LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/brmandw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 border border-black px-4 md:px-5 py-2 hover:bg-black hover:text-white transition-all duration-300"
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
