'use client'
// import { useState } from 'react';
// import { User, Briefcase, BookOpen, Mail, X, ImageIcon } from 'lucide-react';

// function App() {
//   const [activeSection, setActiveSection] = useState(null);
//   const [detailOpen, setDetailOpen] = useState(false);

//   const detailOpen = () => setDetailOpen(true);
//   const closeDetail = () => setDetailOpen(false);

//   const images = [
//                 {
//                   id: 1,
//                   title: 'Desert Landscape',
//                   src: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=600',
//                 },
//                 {
//                   id: 2,
//                   title: 'Mountain Views',
//                   src: 'https://images.pexels.com/photos/1487730/pexels-photo-1487730.jpeg?auto=compress&cs=tinysrgb&w=600',
//                 },
//                 {
//                   id: 3,
//                   title: 'Ocean Waves',
//                   src: 'https://images.pexels.com/photos/1470496/pexels-photo-1470496.jpeg?auto=compress&cs=tinysrgb&w=600',
//                 },
//                 {
//                   id: 4,
//                   title: 'Forest Path',
//                   src: 'https://images.pexels.com/photos/1433086/pexels-photo-1433086.jpeg?auto=compress&cs=tinysrgb&w=600',
//                 },
//                 {
//                   id: 5,
//                   title: 'Sunset Sky',
//                   src: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600',
//                 },
//                 {
//                   id: 6,
//                   title: 'Urban Architecture',
//                   src: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600',
//                 }]

//   const scrollToSection = (sectionId) => {
//     setActiveSection(sectionId);
//     const element = document.getElementById(sectionId);
//     element?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <main className="min-h-screen bg-white text-black font-sans">
//       <nav className="fixed z-50 top-0 left-0 h-screen w-64 border-r border-black flex flex-col justify-center px-12">
//         <div className="space-y-12">
//           <button
//             onClick={() => scrollToSection('home')}
//             className="flex items-center  gap-4 text-xl hover:underline transition-all"
//           >
//             <User size={24} />
//             about
//           </button>
//           <button
//             onClick={() => scrollToSection('projects')}
//             className="flex items-center gap-4 text-xl hover:underline transition-all"
//           >
//             <Briefcase size={20} />
//             projects
//           </button>
//            <button
//             onClick={() => scrollToSection('gallery')}
//             className="flex items-center gap-4 text-xl hover:underline transition-all"
//           >
//             <ImageIcon size={20} />
//             gallery
//           </button>
//           <button
//             onClick={() => scrollToSection('blog')}
//             className="flex items-center gap-4 text-xl hover:underline transition-all"
//           >
//             <BookOpen size={20} />
//             blog
//           </button>
//           <button
//             onClick={() => scrollToSection('contact')}
//             className="flex items-center gap-4 text-xl hover:underline transition-all"
//           >
//             <Mail size={20} />
//             contact
//           </button>
//         </div>
//       </nav>

//       <div className="ml-64">
//         <section id="home" className="min-h-screen flex items-center px-20 py-16">
//           <div className="w-full max-w-6xl">
//             <div className="flex gap-8">
//               <div
//                 className={`
//                   border border-black p-12
//                   transition-all duration-500 ease-in-out
//                   ${detailOpen ? 'w-150' : 'w-full'}
//                 `}
//               >
//                 <h1 className="text-6xl font-light mb-4 tracking-tight">
//                   Amanda Nur Rahmi.
//                 </h1>
//                 <p className="text-2xl text-gray-600 mb-12">Web Developer</p>
//                 <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl">
//                   Passionate about creating elegant and functional web experiences.
//                   Specialized in modern web technologies and clean, maintainable code.
//                 </p>
//                 <button
//                   onClick={openDetail}
//                   className="text-xl border border-black px-8 py-3 hover:bg-black hover:text-white transition-all duration-300"
//                 >
//                   Pendidikan
//                 </button>
//               </div>

//               <div
//                 className={`
//                   transition-all duration-500 ease-in-out overflow-hidden
//                   ${detailOpen ? 'flex-1 opacity-100' : 'w-0 opacity-0'}
//                 `}
//               >
//                 {detailOpen && (
//                   <div className="border border-black p-12 h-full"> 
//                     <div className="flex justify-between items-start mb-8">
//                       <h2 className="text-3xl font-light">Pendidikan</h2>
//                       <button
//                         onClick={closeDetail}
//                         className="hover:bg-gray-100 p-2 transition-all"
//                       >
//                         <X size={24} />
//                       </button>
//                     </div>
//                     <div className="space-y-8">
//                       <div className="border-l-2 border-black pl-6">
//                         <h3 className="text-xl font-medium mb-2">
//                           Sarjana Komputer
//                         </h3>
//                         <p className="text-gray-600 mb-2">Universitas Indonesia</p>
//                         <p className="text-gray-500">2019 - 2023</p>
//                       </div>
//                       <div className="border-l-2 border-gray-300 pl-6">
//                         <h3 className="text-xl font-medium mb-2">
//                           SMA Negeri 1
//                         </h3>
//                         <p className="text-gray-600 mb-2">Jurusan IPA</p>
//                         <p className="text-gray-500">2016 - 2019</p>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </section>

//         <section id="projects" className="min-h-screen flex items-center px-20 py-16 bg-gray-50">
//           <div className={`
//                   max-w-6xl
//                   transition-all duration-500 ease-in-out
//                   ${detailOpen ? 'flex-1' : 'w-full'}
//                 `}>
//             <h2 className="text-5xl font-light mb-16 tracking-tight">Projects</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {[
//                 {
//                   title: 'E-Commerce Platform',
//                   description: 'Full-stack marketplace with payment integration',
//                   tech: 'React, Node.js, PostgreSQL',
//                 },
//                 {
//                   title: 'Portfolio Generator',
//                   description: 'Tool for creating professional portfolios',
//                   tech: 'React, TypeScript, Tailwind',
//                 },
//                 {
//                   title: 'Task Management App',
//                   description: 'Collaborative project management tool',
//                   tech: 'Vue.js, Firebase, Vuex',
//                 },
//                 {
//                   title: 'Weather Dashboard',
//                   description: 'Real-time weather data visualization',
//                   tech: 'React, API Integration, Charts',
//                 },
//               ].map((project, index) => (
//                 <div
//                   key={index}
//                   className="border border-black p-8 hover:bg-white transition-all duration-300 group cursor-pointer"
//                 >
//                   <h3 className="text-2xl font-light mb-3 group-hover:underline">
//                     {project.title}
//                   </h3>
//                   <p className="text-gray-600 mb-4">{project.description}</p>
//                   <p className="text-sm text-gray-500">{project.tech}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section id="gallery" className="min-h-screen flex items-center px-20 py-16 bg-gray-50">
//           <div className="w-full max-w-6xl">
//             <h2 className="text-5xl font-light mb-16 tracking-tight">Gallery</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {images.map((image) => (
//                 <div
//                   key={image.id}
//                   className="group overflow-hidden border border-black aspect-square cursor-pointer"
//                 >
//                   <img
//                     src={image.src}
//                     alt={image.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
                 
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section id="blog" className="min-h-screen flex items-center px-20 py-16">
//           <div className="w-full max-w-6xl">
//             <h2 className="text-5xl font-light mb-16 tracking-tight">Blog</h2>
//             <div className="space-y-6">
//               {[
//                 {
//                   title: 'Modern Web Development Best Practices',
//                   date: '15 Desember 2024',
//                   excerpt: 'Exploring the latest trends and methodologies in web development.',
//                 },
//                 {
//                   title: 'Understanding React Hooks',
//                   date: '8 Desember 2024',
//                   excerpt: 'A deep dive into useState, useEffect, and custom hooks.',
//                 },
//                 {
//                   title: 'Building Responsive Layouts with Tailwind',
//                   date: '1 Desember 2024',
//                   excerpt: 'Tips and tricks for creating beautiful responsive designs.',
//                 },
//               ].map((post, index) => (
//                 <div
//                   key={index}
//                   className="border-b border-gray-300 pb-6 hover:border-black transition-all duration-300 cursor-pointer group"
//                 >
//                   <h3 className="text-2xl font-light mb-2 group-hover:underline">
//                     {post.title}
//                   </h3>
//                   <p className="text-sm text-gray-500 mb-3">{post.date}</p>
//                   <p className="text-gray-600">{post.excerpt}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section id="contact" className="min-h-screen flex items-center px-20 py-16 bg-gray-50">
//           <div className="w-full max-w-6xl">
//             <h2 className="text-5xl font-light mb-16 tracking-tight">Contact</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//               <div>
//                 <h3 className="text-2xl font-light mb-6">Get in touch</h3>
//                 <p className="text-gray-600 mb-8 leading-relaxed">
//                   I'm always interested in hearing about new projects and opportunities.
//                   Whether you have a question or just want to say hi, feel free to reach out.
//                 </p>
//                 <div className="space-y-4">
//                   <p className="text-lg">
//                     <span className="text-gray-500">Email:</span>{' '}
//                     <a
//                       href="mailto:amanda@example.com"
//                       className="hover:underline"
//                     >
//                       amanda@example.com
//                     </a>
//                   </p>
//                   <p className="text-lg">
//                     <span className="text-gray-500">Location:</span> Jakarta, Indonesia
//                   </p>
//                 </div>
//               </div>
//               <div className="border border-black p-8">
//                 <form className="space-y-6">
//                   <div>
//                     <label className="block text-sm mb-2">Name</label>
//                     <input
//                       type="text"
//                       className="w-full border border-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm mb-2">Email</label>
//                     <input
//                       type="email"
//                       className="w-full border border-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm mb-2">Message</label>
//                     <textarea
//                       rows={4}
//                       className="w-full border border-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black resize-none"
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     className="w-full border border-black px-8 py-3 hover:bg-black hover:text-white transition-all duration-300"
//                   >
//                     Send Message
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section>

//         <footer className="border-t border-black px-20 py-8">
//           <div className="max-w-6xl flex justify-between items-center">
//             <p className="text-gray-600">© 2024 Amanda Nur Rahmi</p>
//             <p className="text-gray-600">Built with React & Tailwind CSS</p>
//           </div>
//         </footer>
//       </div>
//     </main>
//   );
// }

// export default App;

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
    <main className="min-h-screen bg-white text-black font-sans">
      <nav className="hidden md:fixed md:z-50 md:top-0 md:left-0 md:h-screen md:w-64 md:border-r md:border-black md:flex md:flex-col md:justify-center md:px-12">
        <div className="space-y-12">
            <button
            onClick={() => scrollToSection('about')}
            className="flex items-center gap-4 text-xl hover:underline transition-all"
          >
            <User size={24} />
            about
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="flex items-center gap-4 text-xl hover:underline transition-all"
          >
            <Briefcase size={20} />
            projects
          </button>
          <button
            onClick={() => scrollToSection('gallery')}
            className="flex items-center gap-4 text-xl hover:underline transition-all"
          >
            <ImageIcon size={20} />
            gallery
          </button>
          {/* <button
            onClick={() => scrollToSection('blog')}
            className="flex items-center gap-4 text-xl hover:underline transition-all"
          >
            <BookOpen size={20} />
            blog
          </button> */}
          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center gap-4 text-xl hover:underline transition-all"
          >
            <Mail size={20} />
            contact
          </button>
        </div>
      </nav>

      <div className="fixed md:hidden top-0 left-0 right-0 z-50 border-b border-black bg-white flex justify-between items-center px-6 py-4">
        <div className="w-10 h-10 flex items-center justify-center">
          {/* <User size={20} /> */}
        </div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="fixed md:hidden top-20 left-0 right-0 bg-white border-b border-black z-40 py-6 px-6 space-y-4">
          <button
            onClick={() => scrollToSection('about')}
            className="block text-lg hover:underline transition-all w-full text-left"
          >
            <User size={20} />
            about
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="flex items-center gap-4 text-lg hover:underline transition-all"
          >
            <Briefcase size={18} />
            projects
          </button>
          <button
            onClick={() => scrollToSection('gallery')}
            className="flex items-center gap-4 text-lg hover:underline transition-all"
          >
            <ImageIcon size={18} />
            gallery
          </button>
          <button
            onClick={() => scrollToSection('blog')}
            className="flex items-center gap-4 text-lg hover:underline transition-all"
          >
            <BookOpen size={18} />
            blog
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center gap-4 text-lg hover:underline transition-all"
          >
            <Mail size={18} />
            contact
          </button>
        </div>
      )}

      <div className="md:ml-64 pt-20 md:pt-0">
        <section id="about" className="min-h-screen flex items-center px-4 md:px-20 py-16 md:py-16">
          <div className="w-full max-w-6xl">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div
                className={`
                  border border-black p-6 md:p-12
                  transition-all duration-500 ease-in-out
                  ${detailOpen ? 'md:flex-1' : 'w-full'}
                `}
              >
                <h1 className="text-4xl md:text-6xl font-light mb-4 tracking-tight">
                  Amanda Nur Rahmi.
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 md:mb-12">Web Developer</p>
                <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed max-w-2xl">
                  Passionate about creating elegant and functional web experiences.
                  Specialized in modern web technologies and clean, maintainable code.
                </p>
                <button
                  onClick={() => toggleDetail('pendidikan')}
                  className={`text-lg md:text-xl border border-black px-3 md:px-4 py-2 md:py-2 hover:bg-black hover:text-white transition-all duration-300 mr-4 
                  ${
                      detailOpen === 'pendidikan' ? 'bg-black text-white' : ''
                    }
                      `}
                >
                  Education
                </button>
                <button
                  onClick={() => toggleDetail('work')}
                  className={`text-lg md:text-xl border border-black px-3 md:px-4 py-2 md:py-2 hover:bg-black hover:text-white transition-all duration-300 mr-4 
                  ${
                      detailOpen === 'work' ? 'bg-black text-white' : ''
                    }
                      `}
                >
                  Work Experience
                </button>
                <button
                  onClick={() => toggleDetail('skills')}
                  className={`text-lg md:text-xl border border-black px-3 md:px-4 py-2 md:py-2 hover:bg-black hover:text-white transition-all duration-300 mr-4 
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
                  ${detailOpen ? 'md:flex-1 opacity-100' : 'md:w-0 opacity-0'}
                `}
              >
                 {detailOpen === 'pendidikan' && (
                  <div className="border border-black p-6 md:p-12 md:h-full">
                    <div className="flex justify-between items-start mb-8">
                      <h2 className="text-2xl md:text-3xl font-light">Pendidikan</h2>
                      <button
                        onClick={() => toggleDetail('pendidikan')}
                        className="hover:bg-gray-100 p-2 transition-all"
                      >
                        <X size={20} />
                      </button>
                    </div>
                    <div className="space-y-8">
                      <div className="border-l-2 border-black pl-6">
                        <h3 className="text-lg md:text-xl font-medium mb-2">
                          Bootcamp Perempuan Inovasi 
                        </h3>
                        <p className="text-gray-600 mb-2">Track Fullstack Web Dev</p>
                        <p className="text-gray-500">2025</p>
                      </div>
                      <div className="border-l-2 border-gray-300 pl-6">
                        <h3 className="text-lg md:text-xl font-medium mb-2">
                          Bootcamp SMKDev Scholarship Expert Class
                        </h3>
                        <p className="text-gray-600 mb-2">Student</p>
                        <p className="text-gray-500">2025</p>
                      </div>
                      <div className="border-l-2 border-gray-300 pl-6">
                        <h3 className="text-lg md:text-xl font-medium mb-2">
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
                      <h2 className="text-2xl md:text-3xl font-light">Work Experience</h2>
                      <button
                        onClick={() => toggleDetail('work')}
                        className="hover:bg-gray-100 p-2 transition-all"
                      >
                        <X size={20} />
                      </button>
                    </div>
                    <div className="space-y-8">
                      <div className="border-l-2 border-black pl-6">
                        <h3 className="text-lg md:text-xl font-medium mb-2">
                          Senior Web Developer
                        </h3>
                        <p className="text-gray-600 mb-2">Tech Solutions Inc.</p>
                        <p className="text-gray-500 mb-3">2023 - Present</p>
                        <p className="text-gray-700 text-sm">Led development of scalable web applications using React and Node.js</p>
                      </div>
                      <div className="border-l-2 border-gray-300 pl-6">
                        <h3 className="text-lg md:text-xl font-medium mb-2">
                          Full Stack Developer
                        </h3>
                        <p className="text-gray-600 mb-2">Digital Agency Pro</p>
                        <p className="text-gray-500 mb-3">2021 - 2023</p>
                        <p className="text-gray-700 text-sm">Developed and maintained multiple client websites and web applications</p>
                      </div>
                      <div className="border-l-2 border-gray-300 pl-6">
                        <h3 className="text-lg md:text-xl font-medium mb-2">
                          Junior Developer
                        </h3>
                        <p className="text-gray-600 mb-2">Startup Ventures</p>
                        <p className="text-gray-500 mb-3">2020 - 2021</p>
                        <p className="text-gray-700 text-sm">Contributed to frontend development and bug fixes</p>
                      </div>
                    </div>
                  </div>
                )}

                {detailOpen === 'skills' && (
                  <div className="border border-black p-6 md:p-12 md:h-full">
                    <div className="flex justify-between items-start mb-8">
                      <h2 className="text-2xl md:text-3xl font-light">Skills</h2>
                      <button
                        onClick={() => toggleDetail('skills')}
                        className="hover:bg-gray-100 p-2 transition-all"
                      >
                        <X size={20} />
                      </button>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-3">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                          {['React', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'JavaScript'].map((skill) => (
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
                        <h3 className="text-lg font-medium mb-3">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                          {['Node.js', 'PostgreSQL', 'Firebase', 'REST API', 'GraphQL'].map((skill) => (
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
                        <h3 className="text-lg font-medium mb-3">Tools & Others</h3>
                        <div className="flex flex-wrap gap-2">
                          {['Git', 'Docker', 'Figma', 'AWS', 'Agile'].map((skill) => (
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
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="min-h-screen flex items-center px-4 md:px-20 py-16 bg-gray-50">
          <div className="w-full max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-light mb-12 md:mb-16 tracking-tight">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  title: 'E-Commerce Platform',
                  description: 'Full-stack marketplace with payment integration',
                  tech: 'React, Node.js, PostgreSQL',
                },
                {
                  title: 'Portfolio Generator',
                  description: 'Tool for creating professional portfolios',
                  tech: 'React, TypeScript, Tailwind',
                },
                {
                  title: 'Task Management App',
                  description: 'Collaborative project management tool',
                  tech: 'Vue.js, Firebase, Vuex',
                },
                {
                  title: 'Weather Dashboard',
                  description: 'Real-time weather data visualization',
                  tech: 'React, API Integration, Charts',
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="border border-black p-6 md:p-8 hover:bg-white transition-all duration-300 group cursor-pointer"
                >
                  <h3 className="text-xl md:text-2xl font-light mb-3 group-hover:underline">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4">{project.description}</p>
                  <p className="text-xs md:text-sm text-gray-500">{project.tech}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="min-h-screen flex items-center px-4 md:px-20 py-16 bg-gray-50">
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
        </section>

        <section id="contact" className="min-h-screen flex items-center px-4 md:px-20 py-16 bg-gray-50">
          <div className="flex flex-col items-center justify-center w-full max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-light mb-12 md:mb-16 tracking-tight">Get in touch</h2>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
              <div className="flex-1">
                <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
                  I'm always interested in hearing about new projects and opportunities. Connect with me through any of these channels and let's create something amazing together.
                </p>
                <p className="text-sm md:text-base text-gray-500">
                  Based in Jakarta, Indonesia
                </p>
              </div>
              <div className="flex flex-col gap-6 md:gap-8">
                <a
                  href="mailto:amanda@example.com"
                  className="flex items-center gap-4 border border-black px-6 md:px-8 py-4 hover:bg-black hover:text-white transition-all duration-300"
                >
                  <Mail size={24} />
                  <span className="text-base md:text-lg font-light">Email</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 border border-black px-6 md:px-8 py-4 hover:bg-black hover:text-white transition-all duration-300"
                >
                  <Linkedin size={24} />
                  <span className="text-base md:text-lg font-light">LinkedIn</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 border border-black px-6 md:px-8 py-4 hover:bg-black hover:text-white transition-all duration-300"
                >
                  <Github size={24} />
                  <span className="text-base md:text-lg font-light">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </section>

       
      </div>
    </main>
  );
}

export default App;

