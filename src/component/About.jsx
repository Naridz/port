import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaEnvelope, FaPhone, FaLocationDot, FaCalendar } from 'react-icons/fa6';
import Tilt from 'react-parallax-tilt';
import '../image/im.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const infoItems = [
    { icon: FaCalendar, label: 'Date of Birth', value: '14 March 2001' },
    { icon: FaEnvelope, label: 'Email', value: 'naris2001@gmail.com' },
    { icon: FaPhone, label: 'Phone', value: '082-441-9859' },
    { icon: FaLocationDot, label: 'Location', value: 'Ladprao 112, Bangkok 10310' },
  ];

  return (
    <section id="section1" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Left Content */}
          <div className="flex-1 order-2 lg:order-1">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                Get To Know Me
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              About{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Me
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-base-content/70 mb-8 leading-relaxed"
            >
              Hello! I have a strong interest in Software Development including Frontend, 
              Backend, and Fullstack development. My skills include{' '}
              <span className="text-primary font-medium">Next.js</span>,{' '}
              <span className="text-primary font-medium">Nuxt.js</span>,{' '}
              <span className="text-primary font-medium">Tailwind CSS</span>, and{' '}
              <span className="text-primary font-medium">Node.js</span>.
              Although I don't have direct professional experience yet, I am eager to develop 
              my skills and I'm always excited to learn new technologies and frameworks.
            </motion.p>

            {/* Info Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              {infoItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-3 p-4 rounded-xl bg-base-200/50 border border-base-content/5 hover:border-primary/30 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-base-content/50 uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4">
              <motion.a
                href="https://github.com/Naridz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary gap-2 rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="w-5 h-5" />
                GitHub Profile
              </motion.a>
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
            className="flex-1 order-1 lg:order-2 flex justify-center"
            variants={itemVariants}
          >
            <Tilt scale={1.05} transitionSpeed={2000} tiltReverse={true}>
              <motion.div
                className="relative"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-3xl blur-3xl opacity-60 scale-95" />
                
                {/* Main Image Container */}
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  {/* Decorative Elements */}
                  <motion.div
                    className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-2xl -z-10"
                    animate={{ rotate: [0, 90, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full -z-10"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  
                  {/* Image */}
                  <div className="w-full h-full rounded-3xl border-4 border-base-100 shadow-2xl bg-cover bg-center imm overflow-hidden" />
                </div>
              </motion.div>
            </Tilt>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;