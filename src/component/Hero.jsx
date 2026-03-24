import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa6';
import Tilt from 'react-parallax-tilt';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
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

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-base-100 via-base-200 to-base-300" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                Available for Hire
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Naris
              </span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-base-content/80 mb-6"
            >
              Full Stack Developer
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-base-content/60 max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Passionate about building modern web applications with React, Next.js, Node.js, and more.
              Always eager to learn new technologies and create impactful solutions.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <a
                href="#section1"
                className="btn btn-primary btn-lg rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
              >
                About Me
                <FaArrowDown className="ml-2" />
              </a>
              <a
                href="https://github.com/Naridz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg rounded-full"
              >
                <FaGithub className="mr-2" />
                GitHub
              </a>
            </motion.div>

            {/* Tech Stack Pills */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {['React', 'Next.js', 'Node.js', 'Express', 'Tailwind'].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-base-300/50 border border-base-content/10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Tilt scale={1.05} transitionSpeed={2000} tiltReverse={true}>
              <motion.div
                className="relative"
                animate={floatAnimation}
              >
                {/* Glow Effect Behind Image */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-50 scale-110" />
                
                {/* Profile Image Container */}
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-base-100 shadow-2xl overflow-hidden bg-cover bg-center imm" />
                
                {/* Decorative Ring */}
                <motion.div
                  className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>
            </Tilt>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.a
            href="#section1"
            className="flex flex-col items-center text-base-content/50 hover:text-primary transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <FaArrowDown />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
