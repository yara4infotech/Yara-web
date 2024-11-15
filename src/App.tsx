import React, { useState, useEffect } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import { FaCode, FaMobileAlt, FaShareAlt, FaSearch, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-yellow-400 origin-left z-50"
        style={{ scaleX }}
      />
      <header className="fixed top-0 left-0 right-0 h-16 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg z-40">
        <nav className="flex justify-between items-center h-full px-5">
          <a href="#home">
            <img src="../public/images/logo.png" alt="Yara InfoTech Logo" className="h-10 w-10" />
          </a>
          <ul className="flex space-x-4">
            {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item, index) => (
              <motion.li 
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <a href={`#${item.toLowerCase()}`} className="text-white hover:text-yellow-400 transition duration-300">
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="min-h-screen flex items-center justify-center pt-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
              transition={{ duration: 0.5 }}
            >
              <AnimatePresence>
                {isLoaded && (
                  <motion.h1 
                    className="text-4xl md:text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    Welcome to Yara InfoTech
                  </motion.h1>
                )}
              </AnimatePresence>
              <motion.p 
                className="text-xl mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Empowering Your Digital Presence
              </motion.p>
              <motion.a 
                href="#contact" 
                className="bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-500 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
                alt="Computer Coding" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center py-20">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Yara InfoTech
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Team working together" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p>
                  Yara InfoTech is a leading software company dedicated to empowering businesses through innovative digital solutions. Founded with a vision to transform the digital landscape, we have grown into a trusted partner for companies seeking to enhance their online presence and streamline their operations.
                </p>
                <p>
                  Our team of skilled professionals brings together expertise in website development, app creation, social media management, and search engine optimization. We believe in the power of technology to drive growth and success for our clients.
                </p>
                <p>
                  At Yara InfoTech, we're not just service providers – we're your technology partners. We work closely with each client to understand their unique needs and deliver tailored solutions that drive real results.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="services" className="min-h-screen flex items-center justify-center py-20">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: FaCode, title: 'Website Development', description: 'We create stunning, responsive websites tailored to your brand and business needs.', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
                { icon: FaMobileAlt, title: 'App Development', description: 'Our team develops innovative mobile applications for iOS and Android platforms.', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
                { icon: FaShareAlt, title: 'Social Media Management', description: 'We help you build and maintain a strong presence across various social media platforms.', image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
                { icon: FaSearch, title: 'SEO', description: 'Our SEO strategies improve your websites visibility and ranking on search engines.', image: 'https://images.unsplash.com/photo-1571371293859-c01fab3cae49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
              ].map((service, index) => (
                <motion.div 
                  key={service.title}
                  className="bg-yellow-400 p-6 rounded-lg text-black"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={service.image} alt={service.title} className="w-full h-48 object-cover mb-4 rounded" />
                  <service.icon className="text-4xl mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p>{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'E-commerce Platform', description: 'A fully responsive online store with integrated payment gateway.', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
                { title: 'Social Media Dashboard', description: 'A comprehensive tool for managing multiple social media accounts.', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80' },
                { title: 'Fitness Tracking App', description: 'A mobile app for tracking workouts and nutrition.', image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
                { title: 'Corporate Website Redesign', description: 'A modern, SEO-optimized website for a Fortune 500 company.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80' },
              ].map((project, index) => (
                <motion.div 
                  key={project.title}
                  className="bg-yellow-400 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 text-black">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contact Us
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      className="w-full p-2 rounded bg-gray-800 text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      className="w-full p-2 rounded bg-gray-800 text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      required 
                      className="w-full p-2 rounded bg-gray-800 text-white h-32"
                    ></textarea>
                  </div>
                  <motion.button 
                    type="submit" 
                    className="bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-500 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-yellow-400 text-2xl" />
                  <span>yara4infotech@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-yellow-400 text-2xl" />
                  <span>+91 8889977537</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-yellow-400 text-2xl" />
                  <span>sainath B, Anjan Naka, Barwani, 451551, mp(India)</span>
                </div>
                <div className="mt-8">
                  <h4 className="text-xl font-bold mb-2">Business Hours</h4>
                  <p>Monday - Friday: 9am - 6pm</p>
                  <p>Saturday: 10am - 4pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-yellow-400 text-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
              <a href="#home">
                <img src="../public/images/logo.png" alt="Yara InfoTech Logo" className="h-24 w-24" />
              </a>
              <p className="mt-2">Empowering Your Digital Presence</p>
            </div>
            <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
              <h3 className="text-lg font-bold mb-2">Quick Links</h3>
              <ul>
                {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                  <li key={item} className="mb-1">
                    <a href={`#${item.toLowerCase()}`} className="hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/3 text-center md:text-right">
              <h3 className="text-lg font-bold mb-2">Connect With Us</h3>
              <div className="flex justify-center md:justify-end space-x-4">
                {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                  <a key={social} href={`https://${social}.com`} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-white transition-colors duration-300">
                    <i className={`fab fa-${social}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Yara InfoTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App